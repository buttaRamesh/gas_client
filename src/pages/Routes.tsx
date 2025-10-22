import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  Search as SearchIcon,
  Visibility as ViewIcon,
  Edit as EditIcon,
  PersonOutline as PersonIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
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
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Routes Management
        </Typography>
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
            elevation={3}
            sx={{
              height: "100%",
              bgcolor: "grey.200",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
                    {route.area_code}-{route.area_code_description}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton size="small" color="primary" onClick={() => navigate(`/routes/${route.id}`)}>
                    <ViewIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="secondary" onClick={() => navigate(`/routes/${route.id}/edit`)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Box sx={{ flex: 1, textAlign: "center", p: 1.5, bgcolor: "info.light", borderRadius: 1 }}>
                  <LocationIcon color="info" sx={{ mb: 0.5 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {route.area_count}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Areas
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: "center", p: 1.5, bgcolor: "success.light", borderRadius: 1 }}>
                  <GroupIcon color="success" sx={{ mb: 0.5 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {route.consumer_count}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Consumers
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  p: 1.5,
                  bgcolor: route.delivery_person_name ? "grey.100" : "warning.light",
                  borderRadius: 1,
                }}
              >
                <PersonIcon fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {route.delivery_person_name || "Unassigned"}
                </Typography>
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
