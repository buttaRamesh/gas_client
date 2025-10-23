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
  Select,
  MenuItem,
  FormControl,
  CircularProgress,
  IconButton,
  Chip,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
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
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    fetchAreas();
  }, [filterStatus, searchQuery]);

  const fetchAreas = async () => {
    try {
      setLoading(true);
      let response;
      let data: Area[] = [];

      if (filterStatus === 'assigned') {
        response = await areasApi.getAll();
        const allAreas = Array.isArray(response.data?.results)
          ? response.data.results
          : Array.isArray(response.data)
          ? response.data
          : [];
        data = allAreas.filter((area: Area) => area.route);
      } else if (filterStatus === 'unassigned') {
        response = await areasApi.getAvailable();
        data = Array.isArray(response.data?.results)
          ? response.data.results
          : Array.isArray(response.data)
          ? response.data
          : [];
      } else {
        response = await areasApi.getAll();
        data = Array.isArray(response.data?.results)
          ? response.data.results
          : Array.isArray(response.data)
          ? response.data
          : [];
      }

      setAreas(data);
    } catch (error: any) {
      console.error('Error fetching areas:', error);
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

  const handleDelete = async (id: number) => {
    const area = areas.find(a => a.id === id);
    if (!area || !window.confirm(`Are you sure you want to delete area "${area.area_name}"? This action cannot be undone.`)) {
      return;
    }

    try {
      await areasApi.delete(id);
      toast({
        title: "Success",
        description: "Area deleted successfully",
      });
      fetchAreas();
    } catch (err: any) {
      console.error("Failed to delete area:", err);
      toast({
        title: "Error",
        description: err.response?.data?.message || "Failed to delete area",
        variant: "destructive",
      });
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'area_name',
      headerName: 'Area Name',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Typography sx={{ fontWeight: 500 }}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'consumer_count',
      headerName: 'Consumer Count',
      width: 180,
      renderCell: (params) => (
        <Chip
          label={params.value ? params.value.toLocaleString() : '0'}
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
      field: 'route',
      headerName: 'Route',
      width: 200,
      renderCell: (params) => {
        const area = params.row as Area;
        return area.route ? (
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
        );
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params) => (
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(params.row.id);
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

  const filteredAreas = areas.filter(area =>
    area.area_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={filteredAreas}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 25, 50]}
            disableRowSelectionOnClick
            sx={{
              border: 'none',
              borderRadius: 2,
              bgcolor: 'background.paper',
              '& .MuiDataGrid-columnHeaders': {
                bgcolor: 'primary.main',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 700,
                borderBottom: 'none',
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 700,
              },
              '& .MuiDataGrid-row': {
                '&:nth-of-type(even)': {
                  bgcolor: 'action.hover',
                },
                '&:hover': {
                  bgcolor: 'primary.light',
                  transform: 'scale(1.01)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '& .MuiDataGrid-cell': {
                    color: 'primary.contrastText',
                  },
                },
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              },
              '& .MuiDataGrid-cell': {
                fontSize: '0.9rem',
                borderBottom: '1px solid',
                borderColor: 'divider',
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '2px solid',
                borderColor: 'divider',
              },
              '& .MuiDataGrid-iconSeparator': {
                color: 'white',
              },
              '& .MuiDataGrid-sortIcon': {
                color: 'white',
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default RouteAreas;
