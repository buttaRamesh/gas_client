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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setCurrentPage(1);
    fetchAreas(1);
  }, [filterStatus]);

  useEffect(() => {
    fetchAreas(currentPage);
  }, [currentPage]);

  useEffect(() => {
    filterAreas();
  }, [areas, searchQuery]);

  const fetchAreas = async (page: number) => {
    try {
      setLoading(true);
      let response;
      let data: Area[] = [];
      
      if (filterStatus === 'assigned') {
        response = await areasApi.getAll(page);
        const allAreas = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
        data = allAreas.filter((area: Area) => area.route);
      } else if (filterStatus === 'unassigned') {
        response = await areasApi.getAvailable(page);
        data = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
      } else {
        response = await areasApi.getAll(page);
        data = Array.isArray(response.data?.results) 
          ? response.data.results 
          : Array.isArray(response.data) 
            ? response.data 
            : [];
      }
      
      // Extract pagination metadata
      const count = response.data?.count || data.length;
      setTotalCount(count);
      setTotalPages(Math.ceil(count / 10)); // Assuming 10 items per page
      
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
    <div className="min-h-screen bg-background">
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

        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted hover:bg-muted">
                <TableHead className="font-semibold py-3">Area Name</TableHead>
                <TableHead className="font-semibold py-3">Consumer Count</TableHead>
                <TableHead className="font-semibold py-3">Route</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAreas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                    No areas found
                  </TableCell>
                </TableRow>
              ) : (
                filteredAreas.map((area, index) => (
                  <TableRow 
                    key={area.id} 
                    className={`hover:bg-muted/50 transition-colors ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
                  >
                    <TableCell className="font-medium py-3">{area.area_name}</TableCell>
                    <TableCell className="py-3">{area.consumer_count ? area.consumer_count.toLocaleString() : '0'}</TableCell>
                    <TableCell className="py-3">
                      {area.route ? (
                        <Button
                          variant="link"
                          className="p-0 h-auto text-info hover:text-info/80"
                          onClick={() => navigate(`/routes/${area.route}`, { state: { from: 'route-areas' } })}
                        >
                          {area.route_code || `Route #${area.route}`}
                        </Button>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {((currentPage - 1) * 10) + 1}-{Math.min(currentPage * 10, totalCount)} of {totalCount} areas
          </div>
          
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteAreas;
