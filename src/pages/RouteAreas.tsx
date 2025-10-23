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
} from '@mui/icons-material';
import { useToast } from '@/hooks/use-toast';

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

        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.200' }}>
                <TableCell sx={{ fontWeight: 600 }}>Area Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Consumer Count</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Route</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {areas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 8 }}>
                    <Typography color="text.secondary">No areas found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                areas.map((area) => (
                  <TableRow 
                    key={area.id}
                    sx={{ 
                      '&:hover': { bgcolor: 'grey.100' },
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500 }}>{area.area_name}</TableCell>
                    <TableCell>{area.consumer_count ? area.consumer_count.toLocaleString() : '0'}</TableCell>
                    <TableCell>
                      {area.route ? (
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => navigate(`/routes/${area.route}`, { state: { from: 'route-areas' } })}
                          sx={{ 
                            p: 0,
                            minWidth: 'auto',
                            color: 'info.main',
                            '&:hover': { color: 'info.dark' },
                          }}
                        >
                          {area.route_code || `Route #${area.route}`}
                        </Button>
                      ) : (
                        <Typography variant="body2" color="text.secondary">-</Typography>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={(e) => handleDelete(area, e)}
                        sx={{ 
                          color: 'error.main',
                          '&:hover': { bgcolor: 'error.light' },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

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
