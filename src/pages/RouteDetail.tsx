import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  ArrowBack as BackIcon,
  PersonOutline as PersonIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
  Edit as EditIcon,
  Place as PlaceIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { routesApi } from "@/services/api";
import { Route, Area } from "@/types/routes";
import { useSnackbar } from "@/contexts/SnackbarContext";

export default function RouteDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [route, setRoute] = useState<Route | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const { showSnackbar } = useSnackbar();

  const handleBack = () => {
    const fromAreas = location.state?.from === 'route-areas';
    navigate(fromAreas ? '/route-areas' : '/routes');
  };

  useEffect(() => {
    if (id) {
      fetchRoute(parseInt(id));
    }
  }, [id]);

  const fetchRoute = async (routeId: number) => {
    try {
      setLoading(true);
      const response = await routesApi.getById(routeId);
      setRoute(response.data);
    } catch (err: any) {
      console.error("Failed to fetch route:", err);
      showSnackbar(err.message || "Failed to fetch route details", "error");
      navigate("/routes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!route || !window.confirm(`Are you sure you want to delete route "${route.area_code}"? This action cannot be undone.`)) {
      return;
    }

    try {
      setDeleting(true);
      await routesApi.delete(route.id);
      showSnackbar("Route deleted successfully", "success");
      navigate("/routes");
    } catch (err: any) {
      console.error("Failed to delete route:", err);
      showSnackbar(err.response?.data?.message || "Failed to delete route", "error");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 8 }}>
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={48} />
        </Container>
      </Box>
    );
  }

  if (!route) {
    return null;
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={handleBack} sx={{ bgcolor: "background.paper" }}>
            <BackIcon />
          </IconButton>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Route Details
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {route.area_code} - {route.area_code_description}
            </Typography>
          </Box>
          <IconButton sx={{ bgcolor: "background.paper" }} onClick={() => navigate(`/routes/${id}/edit`)}>
            <EditIcon />
          </IconButton>
          <IconButton 
            sx={{ bgcolor: "error.light", color: "error.main", '&:hover': { bgcolor: "error.main", color: "white" } }} 
            onClick={handleDelete}
            disabled={deleting}
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "grid", gap: 3 }}>
          <Card elevation={3} sx={{ bgcolor: "grey.200" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Route Information
              </Typography>
              
              <Box sx={{ display: "grid", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ minWidth: 120 }}>
                    Area Code:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {route.area_code}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ minWidth: 120 }}>
                    Description:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {route.area_code_description}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ minWidth: 120 }}>
                    Delivery Person:
                  </Typography>
                  {route.delivery_person_name ? (
                    <Chip
                      icon={<PersonIcon />}
                      label={route.delivery_person_name}
                      color="primary"
                      variant="outlined"
                    />
                  ) : (
                    <Chip
                      icon={<PersonIcon />}
                      label="Unassigned"
                      color="warning"
                      variant="outlined"
                    />
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
            <Card elevation={3} sx={{ bgcolor: "grey.200" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "info.light",
                      p: 1.5,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationIcon color="info" fontSize="large" />
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      {route.area_count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Areas
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Number of delivery areas in this route
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={3} sx={{ bgcolor: "grey.200" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "success.light",
                      p: 1.5,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GroupIcon color="success" fontSize="large" />
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      {route.consumer_count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Consumers
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Number of consumers assigned to this route
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Card elevation={3} sx={{ bgcolor: "grey.200" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <PlaceIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Areas Covered
                </Typography>
              </Box>

              {route.areas && route.areas.length > 0 ? (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {route.areas.map((area, index) => {
                    const colors = ['primary', 'secondary', 'success', 'info', 'warning'] as const;
                    const color = colors[index % colors.length];
                    return (
                      <Chip
                        key={area.id}
                        label={area.area_name}
                        color={color}
                        variant="outlined"
                      />
                    );
                  })}
                </Box>
              ) : (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <PlaceIcon sx={{ fontSize: 48, color: "text.disabled", mb: 1 }} />
                  <Typography variant="body1" color="text.secondary">
                    No areas assigned to this route
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
