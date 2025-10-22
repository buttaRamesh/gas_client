import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { areasApi } from '@/services/api';
import { Area } from '@/types/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Search } from 'lucide-react';
import { CircularProgress } from '@mui/material';

const RouteAreas = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [areas, setAreas] = useState<Area[]>([]);
  const [filteredAreas, setFilteredAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'assigned' | 'unassigned'>('all');

  useEffect(() => {
    fetchAreas();
  }, [filterStatus]);

  useEffect(() => {
    filterAreas();
  }, [areas, searchQuery]);

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
        console.log('API Response (assigned filter):', allAreas);
        data = allAreas.filter((area: Area) => area.route);
      } else if (filterStatus === 'unassigned') {
        response = await areasApi.getAvailable();
        data = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
        console.log('API Response (unassigned filter):', data);
      } else {
        response = await areasApi.getAll();
        data = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
        console.log('API Response (all):', data);
        console.log('Sample area object:', data[0]);
      }
      
      setAreas(data);
      setFilteredAreas(data);
    } catch (error) {
      console.error('Error fetching areas:', error);
      setAreas([]);
      setFilteredAreas([]);
      toast({
        title: 'Error',
        description: 'Failed to fetch route areas',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filterAreas = () => {
    if (!searchQuery.trim()) {
      setFilteredAreas(areas);
      return;
    }

    const filtered = areas.filter((area) =>
      area.area_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.area_code.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAreas(filtered);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/routes')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Routes
        </Button>
        
        <h1 className="text-3xl font-bold mb-2">Route Areas</h1>
        <p className="text-muted-foreground">
          Manage all route areas and their assignments
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by area name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Areas</SelectItem>
            <SelectItem value="assigned">Assigned</SelectItem>
            <SelectItem value="unassigned">Unassigned</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Area Name</TableHead>
              <TableHead>Area Code</TableHead>
              <TableHead>Consumer Count</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAreas.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No areas found
                </TableCell>
              </TableRow>
            ) : (
              filteredAreas.map((area) => (
                <TableRow key={area.id}>
                  <TableCell className="font-medium">{area.area_name}</TableCell>
                  <TableCell>{area.area_code}</TableCell>
                  <TableCell>{area.consumer_count ? area.consumer_count.toLocaleString() : '0'}</TableCell>
                  <TableCell>
                    {area.route ? (
                      <Button
                        variant="link"
                        className="p-0 h-auto"
                        onClick={() => navigate(`/routes/${area.route}`)}
                      >
                        {area.route_code || `Route #${area.route}`}
                      </Button>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {area.route ? (
                      <Badge variant="default">Assigned</Badge>
                    ) : (
                      <Badge variant="secondary">Unassigned</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {area.route && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/routes/${area.route}/edit`)}
                      >
                        View Route
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Showing {filteredAreas.length} of {areas.length} areas
      </div>
    </div>
  );
};

export default RouteAreas;
