import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  ArrowBack as BackIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { routesApi } from "@/services/api";
import { Route } from "@/types/routes";
import { useToast } from "@/hooks/use-toast";

const routeSchema = z.object({
  area_code: z.string().trim().min(1, "Area code is required").max(50, "Area code must be less than 50 characters"),
  area_code_description: z.string().trim().min(1, "Description is required").max(200, "Description must be less than 200 characters"),
  delivery_person_name: z.string().trim().max(100, "Name must be less than 100 characters").optional().nullable(),
});

type RouteFormData = z.infer<typeof routeSchema>;

export default function RouteEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    reset,
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
    if (id) {
      fetchRoute(parseInt(id));
    }
  }, [id]);

  const fetchRoute = async (routeId: number) => {
    try {
      setLoading(true);
      const response = await routesApi.getById(routeId);
      const route: Route = response.data;
      reset({
        area_code: route.area_code,
        area_code_description: route.area_code_description,
        delivery_person_name: route.delivery_person_name || "",
      });
    } catch (err: any) {
      console.error("Failed to fetch route:", err);
      toast({
        title: "Error",
        description: err.message || "Failed to fetch route details",
        variant: "destructive",
      });
      navigate("/routes");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: RouteFormData) => {
    if (!id) return;

    try {
      setSaving(true);
      await routesApi.update(parseInt(id), {
        ...data,
        delivery_person_name: data.delivery_person_name || null,
      });
      
      toast({
        title: "Success",
        description: "Route updated successfully",
      });
      
      navigate(`/routes/${id}`);
    } catch (err: any) {
      console.error("Failed to update route:", err);
      toast({
        title: "Error",
        description: err.message || "Failed to update route",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
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

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={() => navigate(`/routes/${id}`)} sx={{ bgcolor: "background.paper" }}>
            <BackIcon />
          </IconButton>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Edit Route
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Update route information
            </Typography>
          </Box>
        </Box>

        <Card elevation={3} sx={{ bgcolor: "grey.200" }}>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "grid", gap: 3 }}>
                <Controller
                  name="area_code"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Area Code"
                      fullWidth
                      error={!!errors.area_code}
                      helperText={errors.area_code?.message}
                      disabled={saving}
                    />
                  )}
                />

                <Controller
                  name="area_code_description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Description"
                      fullWidth
                      multiline
                      rows={3}
                      error={!!errors.area_code_description}
                      helperText={errors.area_code_description?.message}
                      disabled={saving}
                    />
                  )}
                />

                <Controller
                  name="delivery_person_name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      value={field.value || ""}
                      label="Delivery Person Name"
                      fullWidth
                      error={!!errors.delivery_person_name}
                      helperText={errors.delivery_person_name?.message || "Leave empty if unassigned"}
                      disabled={saving}
                    />
                  )}
                />

                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/routes/${id}`)}
                    disabled={saving}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={saving ? <CircularProgress size={20} /> : <SaveIcon />}
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save Changes"}
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
