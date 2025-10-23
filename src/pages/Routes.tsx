import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Visibility as ViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  PersonOutline as PersonIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
  Add as AddIcon,
  BarChart as BarChartIcon,
  History as HistoryIcon,
} from "@mui/icons-material";
import { routesApi } from "@/services/api";
import { Route } from "@/types/routes";
import { useToast } from "@/hooks/use-toast";

export default function Routes() {
  const navigate = useNavigate();
  const [routes, setRoutes] = useState<Route[]>([]);
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRoutes();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRoutes(routes);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = routes.filter(
        (route) =>
          route.area_code.toLowerCase().includes(query) ||
          route.area_code_description.toLowerCase().includes(query) ||
          route.delivery_person_name?.toLowerCase().includes(query),
      );
      setFilteredRoutes(filtered);
    }
  }, [searchQuery, routes]);

  const fetchRoutes = async () => {
    try {
      setLoading(true);
      const response = await routesApi.getAll();
      const data = Array.isArray(response.data?.results) ? response.data.results : [];
      console.log("routes");
      console.log(data);
      setRoutes(data);
      setFilteredRoutes(data);
    } catch (err: any) {
      console.error("Failed to fetch routes:", err);
      setRoutes([]);
      setFilteredRoutes([]);
      toast({
        title: "Error",
        description: err.message || "Failed to fetch routes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (route: Route, event: React.MouseEvent) => {
    event.stopPropagation();
    if (!window.confirm(`Are you sure you want to delete route "${route.area_code}"? This action cannot be undone.`)) {
      return;
    }

    try {
      await routesApi.delete(route.id);
      toast({
        title: "Success",
        description: "Route deleted successfully",
      });
      fetchRoutes();
    } catch (err: any) {
      console.error("Failed to delete route:", err);
      toast({
        title: "Error",
        description: err.response?.data?.message || "Failed to delete route",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, display: "flex", justifyContent: "center" }}>
        <CircularProgress size={48} />
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 4 }}>
    <Container maxWidth="xl" sx={{ px: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Routes Management
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<BarChartIcon />}
              onClick={() => navigate('/routes/statistics')}
              sx={{ 
                bgcolor: 'info.main',
                color: 'white',
                '&:hover': { bgcolor: 'info.dark' },
              }}
            >
              Statistics
            </Button>
            <Button
              variant="contained"
              startIcon={<HistoryIcon />}
              onClick={() => navigate('/routes/history')}
              sx={{ 
                bgcolor: 'secondary.main',
                color: 'white',
                '&:hover': { bgcolor: 'secondary.dark' },
              }}
            >
              History
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate('/routes/new')}
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              Create Route
            </Button>
            <IconButton 
              color="primary" 
              onClick={() => navigate('/route-areas')}
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
                px: 2,
                borderRadius: 2
              }}
            >
              <LocationIcon sx={{ mr: 1 }} />
              <Typography variant="button" sx={{ fontSize: '0.875rem' }}>
                View All Areas
              </Typography>
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Manage delivery routes and assignments
        </Typography>

        <TextField
          fullWidth
          placeholder="Search routes by code, description, or delivery person..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ maxWidth: 672 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {filteredRoutes.map((route) => (
          <Card
            key={route.id}
            elevation={2}
            sx={{
              height: "100%",
              background: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--accent) / 0.05) 50%, hsl(var(--primary) / 0.05) 100%)",
              borderRadius: 2,
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 24px -10px rgba(0, 0, 0, 0.2)",
                borderColor: "accent.main",
                background: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--accent) / 0.12) 50%, hsl(var(--primary) / 0.12) 100%)",
              },
            }}
            onClick={() => navigate(`/routes/${route.id}`)}
          >
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2.5 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: "primary.main", 
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: 1,
                    }}
                  >
                    {route.area_code}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: "text.primary",
                      fontSize: "1rem",
                      mt: 0.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {route.area_code_description}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 0.5, ml: 1 }}>
                  <IconButton 
                    size="small" 
                    color="primary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/routes/${route.id}`);
                    }}
                    sx={{
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        bgcolor: "primary.light",
                      }
                    }}
                  >
                    <ViewIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    color="secondary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/routes/${route.id}/edit`);
                    }}
                    sx={{
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        bgcolor: "secondary.light",
                      }
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    color="error" 
                    onClick={(e) => handleDelete(route, e)}
                    sx={{
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        bgcolor: "error.light",
                      }
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 1.5, mb: 2.5 }}>
                <Box 
                  sx={{ 
                    flex: 1, 
                    textAlign: "center", 
                    p: 2, 
                    bgcolor: "info.main", 
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "info.dark",
                  }}
                >
                  <LocationIcon sx={{ mb: 0.5, color: "white" }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "white" }}>
                    {route.area_count}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "white", fontWeight: 500, opacity: 0.9 }}>
                    Areas
                  </Typography>
                </Box>
                <Box 
                  sx={{ 
                    flex: 1, 
                    textAlign: "center", 
                    p: 2, 
                    bgcolor: "success.main", 
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "success.dark",
                  }}
                >
                  <GroupIcon sx={{ mb: 0.5, color: "white" }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "white" }}>
                    {route.consumer_count}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "white", fontWeight: 500, opacity: 0.9 }}>
                    Consumers
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.5,
                  bgcolor: route.delivery_person_name ? "primary.light" : "warning.light",
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: route.delivery_person_name ? "primary.main" : "warning.main",
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: route.delivery_person_name ? "primary.main" : "warning.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 18, color: "white" }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", display: "block", fontSize: "0.65rem" }}>
                    Delivery Person
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary" }}>
                    {route.delivery_person_name || "Unassigned"}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {filteredRoutes.length === 0 && (
        <Box sx={{ textAlign: "center", py: 16 }}>
          <Typography variant="h6" color="text.secondary">
            No routes found
          </Typography>
        </Box>
      )}
    </Container>
    </Box>
  );
}
