import { useState, useEffect } from "react";
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
    <Container maxWidth="xl" sx={{ py: 4, px: 2 }}>
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
            elevation={0}
            sx={{
              height: "100%",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #2196F3 0%, #21CBF3 100%)",
              },
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 24px rgba(33, 150, 243, 0.15)",
                borderColor: "primary.main",
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      color: "primary.main",
                      mb: 0.5,
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {route.area_code}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "text.secondary",
                      lineHeight: 1.4,
                      fontSize: "0.875rem"
                    }}
                  >
                    {route.area_code_description}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 0.5, ml: 1 }}>
                  <IconButton 
                    size="small" 
                    sx={{
                      color: "primary.main",
                      bgcolor: "primary.lighter",
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    <ViewIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    size="small"
                    sx={{
                      color: "secondary.main",
                      bgcolor: "secondary.lighter",
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: "secondary.main",
                        color: "white",
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box 
                  sx={{ 
                    flex: 1, 
                    textAlign: "center", 
                    p: 2, 
                    background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
                    borderRadius: 2,
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  <LocationIcon sx={{ color: "#1976D2", fontSize: 28, mb: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#1565C0", mb: 0.5 }}>
                    {route.area_count}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Areas
                  </Typography>
                </Box>
                <Box 
                  sx={{ 
                    flex: 1, 
                    textAlign: "center", 
                    p: 2, 
                    background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
                    borderRadius: 2,
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  <GroupIcon sx={{ color: "#388E3C", fontSize: 28, mb: 1 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#2E7D32", mb: 0.5 }}>
                    {route.consumer_count}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Consumers
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 2,
                  background: route.delivery_person_name 
                    ? "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)"
                    : "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)",
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: route.delivery_person_name ? "#CE93D8" : "#FFB74D",
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: route.delivery_person_name ? "#9C27B0" : "#F57C00",
                    color: "white",
                  }}
                >
                  <PersonIcon fontSize="small" />
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: route.delivery_person_name ? "#6A1B9A" : "#E65100",
                    flex: 1
                  }}
                >
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
  );
}
