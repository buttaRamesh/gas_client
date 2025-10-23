import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { areasApi } from '@/services/api';
import { Area } from '@/types/routes';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  Pagination,
  CircularProgress,
  IconButton,
  Chip,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';
import { useToast } from '@/hooks/use-toast';
import { EnhancedTable, ColumnDef } from '@/components/EnhancedTable';

type SortField = 'area_name' | 'consumer_count' | 'route';
type SortOrder = 'asc' | 'desc';

const RouteAreas = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'assigned' | 'unassigned'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [sortField, setSortField] = useState<SortField>('area_name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    setCurrentPage(1);
  }, [filterStatus]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage === 1) {
        fetchAreas(1);
      } else {
        setCurrentPage(1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, filterStatus]);

  useEffect(() => {
    if (!loading && searchQuery) {
      searchInputRef.current?.focus();
    }
  }, [loading]);

  useEffect(() => {
    if (currentPage > 0 && currentPage <= totalPages) {
      fetchAreas(currentPage);
    }
  }, [currentPage]);

  const fetchAreas = async (page: number) => {
    try {
      setLoading(true);
      let response;
      let data: Area[] = [];
      
      const params = new URLSearchParams();
      if (searchQuery.trim()) {
        params.append('search', searchQuery.trim());
      }
      params.append('page', page.toString());
      
      if (filterStatus === 'assigned') {
        response = await areasApi.getAll(page, searchQuery);
        const allAreas = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
        data = allAreas.filter((area: Area) => area.route);
      } else if (filterStatus === 'unassigned') {
        response = await areasApi.getAvailable(page, searchQuery);
        data = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
      } else {
        response = await areasApi.getAll(page, searchQuery);
        data = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
      }
      
      const count = response.data?.count || data.length;
      setTotalCount(count);
      const pages = Math.ceil(count / 10);
      setTotalPages(pages);
      
      if (page > pages && pages > 0) {
        setCurrentPage(1);
      } else {
        setAreas(data);
      }
    } catch (error: any) {
      console.error('Error fetching areas:', error);
      
      if (error.response?.status === 404 && error.response?.data?.detail === 'Invalid page.') {
        setCurrentPage(1);
        return;
      }
      
      setAreas([]);
      toast({
        title: 'Error',
        description: 'Failed to fetch route areas',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (area: Area, event: React.MouseEvent) => {
    event.stopPropagation();
    if (!window.confirm(`Are you sure you want to delete area "${area.area_name}"? This action cannot be undone.`)) {
      return;
    }

    try {
      await areasApi.delete(area.id);
      toast({
        title: "Success",
        description: "Area deleted successfully",
      });
      fetchAreas(currentPage);
    } catch (err: any) {
      console.error("Failed to delete area:", err);
      toast({
        title: "Error",
        description: err.response?.data?.message || "Failed to delete area",
        variant: "destructive",
      });
    }
  };

  const columns: ColumnDef<Area>[] = [
    {
      id: 'area_name',
      label: 'Area Name',
      sortable: true,
      getValue: (row) => row.area_name,
      render: (row) => (
        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
          {row.area_name}
        </Typography>
      ),
    },
    {
      id: 'consumer_count',
      label: 'Consumer Count',
      sortable: true,
      getValue: (row) => row.consumer_count || 0,
      render: (row) => (
        <Chip
          label={row.consumer_count ? row.consumer_count.toLocaleString() : '0'}
          size="small"
          sx={{
            fontWeight: 600,
            bgcolor: 'info.light',
            color: 'info.main',
          }}
        />
      ),
    },
    {
      id: 'route',
      label: 'Route',
      sortable: true,
      getValue: (row) => row.route_code || row.route || '',
      render: (row) =>
        row.route ? (
          <Chip
            label={row.route_code || `Route #${row.route}`}
            size="small"
            clickable
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/routes/${row.route}`, { state: { from: 'route-areas' } });
            }}
            sx={{
              fontWeight: 600,
              bgcolor: 'success.light',
              color: 'success.main',
              '&:hover': { bgcolor: 'success.main', color: 'white' },
              transition: 'all 0.2s',
            }}
          />
        ) : (
          <Chip
            label="Unassigned"
            size="small"
            sx={{
              bgcolor: 'warning.light',
              color: 'warning.main',
              fontWeight: 600,
            }}
          />
        ),
    },
    {
      id: 'actions',
      label: 'Actions',
      align: 'right',
      sortable: false,
      render: (row) => (
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(row, e);
          }}
          sx={{
            color: 'error.main',
            bgcolor: 'error.light',
            '&:hover': {
              bgcolor: 'error.main',
              color: 'white',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s',
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      ),
    },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress size={48} />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/routes')}
            sx={{ mb: 2 }}
          >
            Back to Routes
          </Button>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Route Areas
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage all route areas and their assignments
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate('/route-areas/new')}
            >
              Create Area
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            inputRef={searchInputRef}
            placeholder="Search by area name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          
          <FormControl sx={{ minWidth: { xs: '100%', sm: 180 } }}>
            <Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              displayEmpty
            >
              <MenuItem value="all">All Areas</MenuItem>
              <MenuItem value="assigned">Assigned</MenuItem>
              <MenuItem value="unassigned">Unassigned</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <EnhancedTable
          columns={columns}
          data={areas}
          getRowKey={(row) => row.id}
          emptyMessage="No areas found"
          striped={true}
          hoverable={true}
        />

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {totalCount > 0 && `Showing ${((currentPage - 1) * 10) + 1}-${Math.min(currentPage * 10, totalCount)} of ${totalCount} areas`}
          </Typography>
          
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_, page) => setCurrentPage(page)}
              color="primary"
              showFirstButton
              showLastButton
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default RouteAreas;
