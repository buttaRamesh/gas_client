import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Eye, Edit, User, MapPin, Users, Loader2 } from 'lucide-react';
import { routesApi } from '@/services/api';
import { Route } from '@/types/routes';
import { useToast } from '@/hooks/use-toast';

export default function Routes() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRoutes();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredRoutes(routes);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = routes.filter(
        (route) =>
          route.area_code.toLowerCase().includes(query) ||
          route.area_code_description.toLowerCase().includes(query) ||
          route.delivery_person_name?.toLowerCase().includes(query)
      );
      setFilteredRoutes(filtered);
    }
  }, [searchQuery, routes]);

  const fetchRoutes = async () => {
    try {
      setLoading(true);
      const response = await routesApi.getAll();
      setRoutes(response.data);
      setFilteredRoutes(response.data);
    } catch (err: any) {
      toast({
        title: 'Error',
        description: err.message || 'Failed to fetch routes',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-2">Routes Management</h1>
        <p className="text-muted-foreground mb-6">
          Manage delivery routes and assignments
        </p>

        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search routes by code, description, or delivery person..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredRoutes.map((route) => (
          <Card
            key={route.id}
            className="h-full transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {route.area_code}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {route.area_code_description}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <div className="flex-1 text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <MapPin className="h-5 w-5 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                  <p className="text-lg font-semibold">{route.area_count}</p>
                  <p className="text-xs text-muted-foreground">Areas</p>
                </div>
                <div className="flex-1 text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <Users className="h-5 w-5 mx-auto mb-1 text-green-600 dark:text-green-400" />
                  <p className="text-lg font-semibold">{route.consumer_count}</p>
                  <p className="text-xs text-muted-foreground">Consumers</p>
                </div>
              </div>

              <div
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  route.delivery_person_name
                    ? 'bg-secondary'
                    : 'bg-yellow-50 dark:bg-yellow-950'
                }`}
              >
                <User className="h-4 w-4" />
                <p className="text-sm font-medium">
                  {route.delivery_person_name || 'Unassigned'}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRoutes.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No routes found</p>
        </div>
      )}
    </div>
  );
}
