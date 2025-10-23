import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Route as RouteIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import { routesApi } from "@/services/api";
import { Route } from "@/types/routes";
import { useToast } from "@/hooks/use-toast";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

interface Statistics {
  total_routes: number;
  total_areas: number;
  total_consumers: number;
  assigned_routes: number;
  unassigned_routes: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function RouteStatistics() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [statistics, setStatistics] = useState<Statistics>({
    total_routes: 0,
    total_areas: 0,
    total_consumers: 0,
    assigned_routes: 0,
    unassigned_routes: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [routesResponse, statsResponse] = await Promise.all([
        routesApi.getAll(),
        routesApi.getStatistics(),
      ]);

      const routesData = Array.isArray(routesResponse.data?.results)
        ? routesResponse.data.results
        : [];
      setRoutes(routesData);

      // Calculate statistics
      const totalRoutes = routesData.length;
      const totalAreas = routesData.reduce((sum, route) => sum + (route.area_count || 0), 0);
      const totalConsumers = routesData.reduce((sum, route) => sum + (route.consumer_count || 0), 0);
      const assignedRoutes = routesData.filter(route => route.delivery_person_name).length;
      const unassignedRoutes = totalRoutes - assignedRoutes;

      setStatistics({
        total_routes: totalRoutes,
        total_areas: totalAreas,
        total_consumers: totalConsumers,
        assigned_routes: assignedRoutes,
        unassigned_routes: unassignedRoutes,
      });
    } catch (err: any) {
      console.error("Failed to fetch statistics:", err);
      toast({
        title: "Error",
        description: "Failed to load statistics",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getTopRoutesByAreas = () => {
    return [...routes]
      .sort((a, b) => (b.area_count || 0) - (a.area_count || 0))
      .slice(0, 10)
      .map(route => ({
        name: route.area_code,
        areas: route.area_count || 0,
      }));
  };

  const getTopRoutesByConsumers = () => {
    return [...routes]
      .sort((a, b) => (b.consumer_count || 0) - (a.consumer_count || 0))
      .slice(0, 10)
      .map(route => ({
        name: route.area_code,
        consumers: route.consumer_count || 0,
      }));
  };

  const getAssignmentData = () => [
    { name: "Assigned", value: statistics.assigned_routes },
    { name: "Unassigned", value: statistics.unassigned_routes },
  ];

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, display: "flex", justifyContent: "center" }}>
        <CircularProgress size={48} />
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
      <Container maxWidth="xl" sx={{ px: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <IconButton onClick={() => navigate("/routes")} color="primary">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Route Statistics Dashboard
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Overview of route performance and distribution metrics
          </Typography>
        </Box>

        {/* Summary Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            mb: 4,
          }}
        >
          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "primary.light",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RouteIcon sx={{ fontSize: 32, color: "primary.main" }} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {statistics.total_routes}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Routes
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "info.light",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationIcon sx={{ fontSize: 32, color: "info.main" }} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {statistics.total_areas}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Areas
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "success.light",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GroupIcon sx={{ fontSize: 32, color: "success.main" }} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {statistics.total_consumers}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Consumers
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Card elevation={3}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "warning.light",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 32, color: "warning.main" }} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {statistics.total_routes > 0
                      ? Math.round(statistics.total_consumers / statistics.total_routes)
                      : 0}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avg Consumers/Route
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Charts */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {/* Top Routes by Areas */}
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Top 10 Routes by Areas
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getTopRoutesByAreas()}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="areas" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Routes by Consumers */}
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Top 10 Routes by Consumers
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getTopRoutesByConsumers()}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="consumers" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Assignment Distribution */}
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Route Assignment Status
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={getAssignmentData()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {getAssignmentData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity Summary */}
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Quick Insights
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Largest Route by Areas
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {getTopRoutesByAreas()[0]?.name || "N/A"} ({getTopRoutesByAreas()[0]?.areas || 0} areas)
                  </Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Largest Route by Consumers
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {getTopRoutesByConsumers()[0]?.name || "N/A"} ({getTopRoutesByConsumers()[0]?.consumers || 0} consumers)
                  </Typography>
                </Box>
                <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Assignment Rate
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {statistics.total_routes > 0
                      ? Math.round((statistics.assigned_routes / statistics.total_routes) * 100)
                      : 0}%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
