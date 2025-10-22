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
import { ArrowLeft, MapPin, Hash, Users, Route as RouteIcon } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-6 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/route-areas')}
          className="mb-6 hover:bg-muted/50 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Route Areas
        </Button>

        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Create Route Area
          </h1>
          <p className="text-muted-foreground text-lg">
            Add a new area to your delivery system
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Area Information</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="area_name" className="flex items-center gap-2 text-base font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  Area Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="area_name"
                  {...register('area_name')}
                  placeholder="e.g., Downtown District"
                  className="mt-1 h-12 text-base border-border/50 focus:border-primary transition-colors"
                />
                {errors.area_name && (
                  <p className="text-sm text-destructive mt-2 flex items-center gap-1">
                    <span className="font-medium">⚠</span> {errors.area_name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="area_code" className="flex items-center gap-2 text-base font-medium">
                  <Hash className="w-4 h-4 text-primary" />
                  Area Code
                </Label>
                <Input
                  id="area_code"
                  {...register('area_code')}
                  placeholder="e.g., DT-001"
                  className="mt-1 h-12 text-base border-border/50 focus:border-primary transition-colors"
                />
                {errors.area_code && (
                  <p className="text-sm text-destructive mt-2 flex items-center gap-1">
                    <span className="font-medium">⚠</span> {errors.area_code.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="consumer_count" className="flex items-center gap-2 text-base font-medium">
                  <Users className="w-4 h-4 text-primary" />
                  Consumer Count
                </Label>
                <Input
                  id="consumer_count"
                  type="number"
                  {...register('consumer_count')}
                  placeholder="Enter number of consumers"
                  className="mt-1 h-12 text-base border-border/50 focus:border-primary transition-colors"
                  min="0"
                />
                {errors.consumer_count && (
                  <p className="text-sm text-destructive mt-2 flex items-center gap-1">
                    <span className="font-medium">⚠</span> {errors.consumer_count.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="route" className="flex items-center gap-2 text-base font-medium">
                  <RouteIcon className="w-4 h-4 text-primary" />
                  Assign to Route <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
                </Label>
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
                  <SelectTrigger className="mt-1 h-12 text-base border-border/50 focus:border-primary transition-colors">
                    <SelectValue placeholder="Select a route to assign" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border/50">
                    <SelectItem value="none" className="text-base">
                      <span className="text-muted-foreground">No route assigned</span>
                    </SelectItem>
                    {routes.map((route) => (
                      <SelectItem key={route.id} value={route.id.toString()} className="text-base">
                        <div className="flex items-center gap-2">
                          <RouteIcon className="w-4 h-4 text-primary" />
                          <span>{route.area_code} - {route.area_code_description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/route-areas')}
              disabled={loading}
              className="h-12 px-6 text-base border-border/50 hover:bg-muted/50"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
              variant="success"
              className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              {loading ? (
                <>
                  <CircularProgress size={18} className="mr-2" />
                  Creating Area...
                </>
              ) : (
                <>
                  <MapPin className="mr-2 h-4 w-4" />
                  Create Area
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RouteAreaCreate;
