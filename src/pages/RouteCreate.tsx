import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Autocomplete,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { routesApi, areasApi } from "@/services/api";
import { Area } from "@/types/routes";
import { useSnackbar } from "@/contexts/SnackbarContext";
import { PageHeader } from "@/components/PageHeader";

const routeSchema = z.object({
  area_code: z.string().min(1, "Area code is required").max(50, "Area code must be less than 50 characters"),
  area_code_description: z.string().min(1, "Description is required").max(200, "Description must be less than 200 characters"),
  delivery_person_name: z.string().max(100, "Name must be less than 100 characters").optional().nullable(),
});

type RouteFormData = z.infer<typeof routeSchema>;

export default function RouteCreate() {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [availableAreas, setAvailableAreas] = useState<Area[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<Area[]>([]);
  const [loadingAreas, setLoadingAreas] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RouteFormData>({
    resolver: zodResolver(routeSchema),
    defaultValues: {
      area_code: "",
      area_code_description: "",
      delivery_person_name: "",
    },
  });

  useEffect(() => {
    fetchAvailableAreas();
  }, []);

  const fetchAvailableAreas = async () => {
    try {
      setLoadingAreas(true);
      const response = await areasApi.getAvailable();
      const data = Array.isArray(response.data?.results) ? response.data.results : [];
      setAvailableAreas(data);
    } catch (err: any) {
      console.error("Failed to fetch available areas:", err);
      showSnackbar("Failed to fetch available areas", "error");
    } finally {
      setLoadingAreas(false);
    }
  };

  const handleAddArea = (area: Area | null) => {
    if (area && !selectedAreas.find((a) => a.id === area.id)) {
      setSelectedAreas([...selectedAreas, area]);
      setAvailableAreas(availableAreas.filter((a) => a.id !== area.id));
    }
  };

  const handleRemoveArea = (areaId: number) => {
    const removedArea = selectedAreas.find((a) => a.id === areaId);
    if (removedArea) {
      setSelectedAreas(selectedAreas.filter((a) => a.id !== areaId));
      setAvailableAreas([...availableAreas, removedArea]);
    }
  };

  const onSubmit = async (data: RouteFormData) => {
    try {
      setLoading(true);
      
      // Create the route with assigned areas
      const routeResponse = await routesApi.create({
        area_code: data.area_code,
        area_code_description: data.area_code_description,
        delivery_person_name: data.delivery_person_name || null,
        areas: selectedAreas.map(area => area.id),
      });

      console.log("Route creation response:", routeResponse.data);

      const newRouteId = routeResponse.data?.id;

      if (!newRouteId) {
        throw new Error("Route created but no ID returned from server");
      }

      showSnackbar("Route created successfully", "success");

      navigate(`/routes/${newRouteId}`);
    } catch (err: any) {
      console.error("Failed to create route:", err);
      showSnackbar(err.response?.data?.message || err.message || "Failed to create route", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.50", py: 4 }}>
      <Container maxWidth="lg">
        <PageHeader title="Create New Route" />

        <Card elevation={2}>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="Area Code"
                  {...register("area_code")}
                  error={!!errors.area_code}
                  helperText={errors.area_code?.message}
                  fullWidth
                  required
                />

                <TextField
                  label="Description"
                  {...register("area_code_description")}
                  error={!!errors.area_code_description}
                  helperText={errors.area_code_description?.message}
                  fullWidth
                  required
                  multiline
                  rows={2}
                />

                <TextField
                  label="Delivery Person Name"
                  {...register("delivery_person_name")}
                  error={!!errors.delivery_person_name}
                  helperText={errors.delivery_person_name?.message}
                  fullWidth
                />

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Assigned Areas ({selectedAreas.length})
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    {selectedAreas.length > 0 ? (
                      selectedAreas.map((area) => (
                        <Chip
                          key={area.id}
                          label={area.area_name}
                          onDelete={() => handleRemoveArea(area.id)}
                          color="primary"
                        />
                      ))
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No areas assigned yet
                      </Typography>
                    )}
                  </Box>

                  <Autocomplete
                    options={availableAreas}
                    getOptionLabel={(option) => option.area_name}
                    loading={loadingAreas}
                    onChange={(_, value) => handleAddArea(value)}
                    value={null}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Add Area"
                        placeholder="Search and select an area"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <>
                              <AddIcon sx={{ ml: 1, color: "text.secondary" }} />
                              {params.InputProps.startAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                  />
                </Box>

                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate("/routes")}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
                    disabled={loading}
                    sx={{ px: 4 }}
                  >
                    {loading ? "Creating..." : "Create Route"}
                  </Button>
                </Box>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
