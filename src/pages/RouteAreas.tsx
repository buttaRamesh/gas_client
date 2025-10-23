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

  const handleSort = (field: SortField) => {
    const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newOrder);
    
    const sorted = [...areas].sort((a, b) => {
      let aVal: any = a[field];
      let bVal: any = b[field];
      
      if (field === 'consumer_count') {
        aVal = a.consumer_count || 0;
        bVal = b.consumer_count || 0;
      } else if (field === 'route') {
        aVal = a.route_code || a.route || '';
        bVal = b.route_code || b.route || '';
      } else {
        aVal = String(aVal || '').toLowerCase();
        bVal = String(bVal || '').toLowerCase();
      }
      
      if (aVal < bVal) return newOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return newOrder === 'asc' ? 1 : -1;
      return 0;
    });
    
    setAreas(sorted);
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

        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow 
                sx={{ 
                  bgcolor: 'primary.main',
                  '& .MuiTableCell-root': {
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    borderBottom: 'none',
                  }
                }}
              >
                <TableCell 
                  sx={{ 
                    cursor: 'pointer',
                    userSelect: 'none',
                    '&:hover': { bgcolor: 'primary.dark' },
                    transition: 'background-color 0.2s',
                  }}
                  onClick={() => handleSort('area_name')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Area Name
                    {sortField === 'area_name' && (
                      sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
                    )}
                  </Box>
                </TableCell>
                <TableCell 
                  sx={{ 
                    cursor: 'pointer',
                    userSelect: 'none',
                    '&:hover': { bgcolor: 'primary.dark' },
                    transition: 'background-color 0.2s',
                  }}
                  onClick={() => handleSort('consumer_count')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Consumer Count
                    {sortField === 'consumer_count' && (
                      sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
                    )}
                  </Box>
                </TableCell>
                <TableCell 
                  sx={{ 
                    cursor: 'pointer',
                    userSelect: 'none',
                    '&:hover': { bgcolor: 'primary.dark' },
                    transition: 'background-color 0.2s',
                  }}
                  onClick={() => handleSort('route')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Route
                    {sortField === 'route' && (
                      sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
                    )}
                  </Box>
                </TableCell>
                <TableCell align="right">Actions</TableCell>
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
                areas.map((area, index) => (
                  <TableRow 
                    key={area.id}
                    sx={{ 
                      bgcolor: index % 2 === 0 ? 'background.paper' : 'action.hover',
                      '&:hover': { 
                        bgcolor: 'primary.light',
                        transform: 'scale(1.01)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        '& .MuiTableCell-root': {
                          color: 'primary.contrastText',
                        },
                      },
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                    }}
                  >
                    <TableCell sx={{ fontWeight: 500, fontSize: '0.9rem' }}>{area.area_name}</TableCell>
                    <TableCell>
                      <Chip 
                        label={area.consumer_count ? area.consumer_count.toLocaleString() : '0'}
                        size="small"
                        sx={{ 
                          fontWeight: 600,
                          bgcolor: 'info.light',
                          color: 'info.main',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {area.route ? (
                        <Chip
                          label={area.route_code || `Route #${area.route}`}
                          size="small"
                          clickable
                          onClick={() => navigate(`/routes/${area.route}`, { state: { from: 'route-areas' } })}
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
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={(e) => handleDelete(area, e)}
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
