import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { areasApi, routesApi } from '@/services/api';
import { Route } from '@/types/routes';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  CircularProgress,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  LocationOn as MapPinIcon,
  Route as RouteIcon,
} from '@mui/icons-material';
import { useToast } from '@/hooks/use-toast';

const areaSchema = z.object({
  area_name: z.string().min(1, 'Area name is required'),
  route: z.coerce.number().nullable().optional(),
});

type AreaFormData = z.infer<typeof areaSchema>;

const RouteAreaCreate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loadingRoutes, setLoadingRoutes] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AreaFormData>({
    resolver: zodResolver(areaSchema),
    defaultValues: {
      area_name: '',
      route: null,
    },
  });

  const selectedRoute = watch('route');

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      setLoadingRoutes(true);
      const response = await routesApi.getAll();
      const routesData = Array.isArray(response.data?.results)
        ? response.data.results
        : Array.isArray(response.data)
          ? response.data
          : [];
      setRoutes(routesData);
    } catch (error) {
      console.error('Error fetching routes:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch routes',
        variant: 'destructive',
      });
    } finally {
      setLoadingRoutes(false);
    }
  };

  const onSubmit = async (data: AreaFormData) => {
    try {
      setLoading(true);
      
      const payload = {
        area_name: data.area_name,
        route: data.route || null,
      };

      await areasApi.create(payload);

      toast({
        title: 'Success',
        description: 'Route area created successfully',
      });

      navigate('/route-areas');
    } catch (error: any) {
      console.error('Error creating area:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to create route area',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loadingRoutes) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress size={48} />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 4 }}>
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/route-areas')}
          sx={{ mb: 3 }}
        >
          Back to Route Areas
        </Button>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: '50%',
              bgcolor: 'primary.light',
              mb: 2,
            }}
          >
            <MapPinIcon sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
            Create Route Area
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add a new area to your delivery system
          </Typography>
        </Box>

        <Card elevation={3}>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPinIcon sx={{ color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Area Information
                  </Typography>
                </Box>

                <TextField
                  label="Area Name"
                  {...register('area_name')}
                  error={!!errors.area_name}
                  helperText={errors.area_name?.message}
                  fullWidth
                  required
                  placeholder="e.g., Downtown District"
                  InputProps={{
                    startAdornment: (
                      <MapPinIcon sx={{ mr: 1, color: 'primary.main' }} />
                    ),
                  }}
                />

                <FormControl fullWidth error={!!errors.route}>
                  <InputLabel>Assign to Route (Optional)</InputLabel>
                  <Select
                    value={selectedRoute?.toString() || ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      setValue('route', value ? parseInt(value) : null);
                    }}
                    label="Assign to Route (Optional)"
                    startAdornment={<RouteIcon sx={{ mr: 1, color: 'primary.main' }} />}
                  >
                    <MenuItem value="">
                      <em>No route assigned</em>
                    </MenuItem>
                    {routes.map((route) => (
                      <MenuItem key={route.id} value={route.id.toString()}>
                        {route.area_code} - {route.area_code_description}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.route && (
                    <FormHelperText>{errors.route.message}</FormHelperText>
                  )}
                </FormControl>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/route-areas')}
                    disabled={loading}
                    sx={{ px: 3 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
                    sx={{ px: 4 }}
                  >
                    {loading ? 'Creating...' : 'Create Area'}
                  </Button>
                </Box>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default RouteAreaCreate;
