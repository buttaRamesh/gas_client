import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { ArrowBack, Save } from '@mui/icons-material';
import { PageHeader } from '../components/PageHeader';
import { productsApi } from '../services/api';
import { useSnackbar } from '../contexts/SnackbarContext';

export default function ProductCreate() {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!formData.name.trim()) {
      setErrors({ name: 'Product name is required' });
      return;
    }

    try {
      setLoading(true);
      const response = await productsApi.create(formData);
      showSnackbar('Product created successfully', 'success');
      navigate(`/products/${response.data.id}`);
    } catch (err: any) {
      console.error('Failed to create product:', err);
      setErrors(err.response?.data || {});
      showSnackbar('Failed to create product', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: 'hsl(var(--background))', minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false} sx={{ width: '80%', mx: 'auto' }}>
        <PageHeader
          title="Create Product"
          description="Add a new product to your catalog"
          actions={
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate('/products')}
            >
              Back to Products
            </Button>
          }
        />

        <Card
          elevation={3}
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/.95) 100%)',
            border: '1px solid hsl(var(--border))',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Product Name *
                  </Typography>
                  <TextField
                    fullWidth
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={!!errors.name}
                    helperText={errors.name}
                    placeholder="e.g., LPG Gas Cylinder"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'hsl(var(--primary))',
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Description
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    error={!!errors.description}
                    helperText={errors.description}
                    placeholder="Product description..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'hsl(var(--primary))',
                        },
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/products')}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<Save />}
                    disabled={loading}
                    sx={{ px: 4, py: 1.5, fontWeight: 600 }}
                  >
                    {loading ? 'Creating...' : 'Create Product'}
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
