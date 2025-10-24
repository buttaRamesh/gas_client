import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { deliveryPersonsApi } from "@/services/api";
import { useSnackbar } from "@/contexts/SnackbarContext";
import { PageHeader } from "@/components/PageHeader";

const deliveryPersonSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200, "Name must be less than 200 characters"),
});

type DeliveryPersonFormData = z.infer<typeof deliveryPersonSchema>;

export default function DeliveryPersonCreate() {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryPersonFormData>({
    resolver: zodResolver(deliveryPersonSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: DeliveryPersonFormData) => {
    try {
      setSubmitting(true);
      const response = await deliveryPersonsApi.create(data);
      showSnackbar("Delivery person created successfully", "success");
      navigate(`/delivery-persons/${response.data.id}`);
    } catch (err: any) {
      console.error("Failed to create delivery person:", err);
      showSnackbar(
        err.response?.data?.name?.[0] || "Failed to create delivery person",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
      <Container maxWidth="md" sx={{ px: 2 }}>
        <PageHeader
          title="Add Delivery Person"
          description="Create a new delivery person"
          actions={
            <IconButton
              onClick={() => navigate("/delivery-persons")}
              sx={{ bgcolor: "background.paper" }}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        />

        <Card 
          elevation={0} 
          sx={{ 
            bgcolor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Person Name *
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter delivery person name"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    disabled={submitting}
                  />
                </Box>

                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate("/delivery-persons")}
                    disabled={submitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={submitting ? <CircularProgress size={20} /> : <SaveIcon />}
                    disabled={submitting}
                    sx={{ bgcolor: "primary.main", color: "white" }}
                  >
                    {submitting ? "Creating..." : "Create Person"}
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
