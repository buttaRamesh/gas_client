import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  LocalShipping as RouteIcon,
  People as ConsumersIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { deliveryPersonsApi } from "@/services/api";
import { DeliveryPerson } from "@/types/routes";
import { useSnackbar } from "@/contexts/SnackbarContext";
import { PageHeader } from "@/components/PageHeader";

export default function DeliveryPersons() {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);
  const [deliveryPersons, setDeliveryPersons] = useState<DeliveryPerson[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPersons, setFilteredPersons] = useState<DeliveryPerson[]>([]);

  useEffect(() => {
    fetchDeliveryPersons();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPersons(deliveryPersons);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = deliveryPersons.filter((person) =>
      person.name.toLowerCase().includes(query)
    );
    setFilteredPersons(filtered);
  }, [searchQuery, deliveryPersons]);

  const fetchDeliveryPersons = async () => {
    try {
      setLoading(true);
      const response = await deliveryPersonsApi.getAll();
      const persons = Array.isArray(response.data?.results)
        ? response.data.results
        : Array.isArray(response.data)
        ? response.data
        : [];
      setDeliveryPersons(persons);
      setFilteredPersons(persons);
    } catch (err: any) {
      console.error("Failed to fetch delivery persons:", err);
      showSnackbar("Failed to load delivery persons", "error");
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
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
      <Container maxWidth="xl" sx={{ px: 2 }}>
        <PageHeader
          title="Delivery Persons"
          description="Manage your delivery team"
          actions={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("/delivery-persons/create")}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              Add Person
            </Button>
          }
        />

        <Card elevation={3} sx={{ mb: 3, bgcolor: "background.paper" }}>
          <CardContent>
            <TextField
              fullWidth
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Card>

        {filteredPersons.length === 0 ? (
          <Card elevation={3} sx={{ bgcolor: "background.paper" }}>
            <CardContent>
              <Box sx={{ textAlign: "center", py: 8 }}>
                <PersonIcon sx={{ fontSize: 64, color: "text.secondary", mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  {searchQuery ? "No delivery persons found" : "No delivery persons yet"}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {searchQuery
                    ? "Try a different search term"
                    : "Add your first delivery person to get started"}
                </Typography>
                {!searchQuery && (
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => navigate("/delivery-persons/create")}
                    sx={{ bgcolor: "primary.main", color: "white" }}
                  >
                    Add Delivery Person
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 3 }}>
            {filteredPersons.map((person) => (
              <Card
                key={person.id}
                elevation={3}
                sx={{
                  bgcolor: "background.paper",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                  <CardContent sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          bgcolor: "primary.light",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PersonIcon sx={{ color: "primary.main", fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {person.name}
                        </Typography>
                        <Chip label={`ID: ${person.id}`} size="small" />
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                          <RouteIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                          <Typography variant="caption" color="text.secondary">
                            Routes
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {person.route_count || 0}
                        </Typography>
                      </Box>
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                          <ConsumersIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                          <Typography variant="caption" color="text.secondary">
                            Consumers
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {person.consumer_count || 0}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>

                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => navigate(`/delivery-persons/${person.id}`)}
                    >
                      View Details
                    </Button>
                  </Box>
                </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
