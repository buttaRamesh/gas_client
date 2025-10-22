import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { areasApi, routesApi } from '@/services/api';
import { Route } from '@/types/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { CircularProgress } from '@mui/material';

const areaSchema = z.object({
  area_name: z.string().min(1, 'Area name is required'),
  area_code: z.string().optional(),
  consumer_count: z.coerce.number().min(0, 'Consumer count must be positive').optional(),
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
      area_code: '',
      consumer_count: 0,
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
        area_code: data.area_code || '',
        consumer_count: data.consumer_count || 0,
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
      <div className="flex items-center justify-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/route-areas')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Route Areas
        </Button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Create Route Area</h1>
          <p className="text-muted-foreground">
            Add a new area to the system
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="rounded-lg border bg-card shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Area Details</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="area_name">
                  Area Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="area_name"
                  {...register('area_name')}
                  placeholder="Enter area name"
                  className="mt-1"
                />
                {errors.area_name && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.area_name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="area_code">Area Code</Label>
                <Input
                  id="area_code"
                  {...register('area_code')}
                  placeholder="Enter area code (optional)"
                  className="mt-1"
                />
                {errors.area_code && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.area_code.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="consumer_count">Consumer Count</Label>
                <Input
                  id="consumer_count"
                  type="number"
                  {...register('consumer_count')}
                  placeholder="Enter consumer count"
                  className="mt-1"
                  min="0"
                />
                {errors.consumer_count && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.consumer_count.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="route">Assign to Route (Optional)</Label>
                <Select
                  value={selectedRoute?.toString() || 'none'}
                  onValueChange={(value) => {
                    if (value === 'none') {
                      setValue('route', null);
                    } else {
                      setValue('route', parseInt(value));
                    }
                  }}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No route</SelectItem>
                    {routes.map((route) => (
                      <SelectItem key={route.id} value={route.id.toString()}>
                        {route.area_code} - {route.area_code_description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/route-areas')}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <CircularProgress size={16} className="mr-2" />
                  Creating...
                </>
              ) : (
                'Create Area'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RouteAreaCreate;
