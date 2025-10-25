import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
import { ArrowBack, Edit, Delete, Add } from '@mui/icons-material';
import { PageHeader } from '../components/PageHeader';
import { productsApi, variantsApi, unitsApi } from '../services/api';
import { Product, ProductVariant, Unit, VariantType } from '../types/products';
import { useSnackbar } from '../contexts/SnackbarContext';

const VARIANT_TYPES: VariantType[] = ['DOMESTIC', 'COMMERCIAL', 'INDUSTRIAL', 'OTHER'];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const [product, setProduct] = useState<Product | null>(null);
  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addVariantDialogOpen, setAddVariantDialogOpen] = useState(false);
  const [deleteVariantDialogOpen, setDeleteVariantDialogOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [variantFormData, setVariantFormData] = useState({
    product_code: '',
    name: '',
    unit: '',
    size: '',
    variant_type: 'DOMESTIC' as VariantType,
  });

  useEffect(() => {
    fetchProductDetails();
    fetchUnits();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const [productRes, variantsRes] = await Promise.all([
        productsApi.getById(Number(id)),
        productsApi.getVariants(Number(id)),
      ]);
      setProduct(productRes.data);
      // Extract variants array from the response object
      setVariants(variantsRes.data.variants || []);
      setFormData({
        name: productRes.data.name,
        description: productRes.data.description || '',
      });
    } catch (err: any) {
      console.error('Failed to fetch product details:', err);
      showSnackbar('Failed to load product details', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchUnits = async () => {
    try {
      const response = await unitsApi.getAll();
      setUnits(response.data.results || response.data);
    } catch (err: any) {
      console.error('Failed to fetch units:', err);
    }
  };

  const handleUpdate = async () => {
    try {
      await productsApi.update(Number(id), formData);
      showSnackbar('Product updated successfully', 'success');
      setEditDialogOpen(false);
      fetchProductDetails();
    } catch (err: any) {
      console.error('Failed to update product:', err);
      showSnackbar('Failed to update product', 'error');
    }
  };

  const handleAddVariant = async () => {
    try {
      await productsApi.addVariant(Number(id), {
        ...variantFormData,
        product: Number(id),
        unit: Number(variantFormData.unit),
        size: parseFloat(variantFormData.size),
      });
      showSnackbar('Variant added successfully', 'success');
      setAddVariantDialogOpen(false);
      setVariantFormData({
        product_code: '',
        name: '',
        unit: '',
        size: '',
        variant_type: 'DOMESTIC',
      });
      fetchProductDetails();
    } catch (err: any) {
      console.error('Failed to add variant:', err);
      showSnackbar('Failed to add variant', 'error');
    }
  };

  const handleDeleteVariant = async () => {
    if (!selectedVariant) return;

    try {
      await variantsApi.delete(selectedVariant.id);
      showSnackbar('Variant deleted successfully', 'success');
      setDeleteVariantDialogOpen(false);
      setSelectedVariant(null);
      fetchProductDetails();
    } catch (err: any) {
      console.error('Failed to delete variant:', err);
      showSnackbar('Failed to delete variant', 'error');
    }
  };

  const getVariantTypeColor = (type: VariantType) => {
    switch (type) {
      case 'DOMESTIC': return 'primary';
      case 'COMMERCIAL': return 'success';
      case 'INDUSTRIAL': return 'warning';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <Box sx={{ bgcolor: 'hsl(var(--background))', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="xl">
          <Typography>Loading...</Typography>
        </Container>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ bgcolor: 'hsl(var(--background))', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="xl">
          <Typography>Product not found</Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: 'hsl(var(--background))', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        <PageHeader
          title={product.name}
          description={product.description}
          actions={
            <>
              <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                onClick={() => navigate('/products')}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => setEditDialogOpen(true)}
              >
                Edit Product
              </Button>
            </>
          }
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/.95) 100%)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Product Variants
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => setAddVariantDialogOpen(true)}
                  >
                    Add Variant
                  </Button>
                </Box>

                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 600 }}>Code</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Unit</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {variants.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} align="center">
                            <Typography color="text.secondary">No variants found</Typography>
                          </TableCell>
                        </TableRow>
                      ) : (
                        variants.map((variant) => (
                          <TableRow key={variant.id} hover>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                {variant.product_code}
                              </Typography>
                            </TableCell>
                            <TableCell>{variant.name}</TableCell>
                            <TableCell>{variant.size}</TableCell>
                            <TableCell>{variant.unit_name || variant.unit}</TableCell>
                            <TableCell>
                              <Chip
                                label={variant.variant_type}
                                size="small"
                                color={getVariantTypeColor(variant.variant_type)}
                              />
                            </TableCell>
                            <TableCell align="right">
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => {
                                  setSelectedVariant(variant);
                                  setDeleteVariantDialogOpen(true);
                                }}
                              >
                                <Delete fontSize="small" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Edit Product Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Variant Dialog */}
      <Dialog open={addVariantDialogOpen} onClose={() => setAddVariantDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Product Variant</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Product Code"
              value={variantFormData.product_code}
              onChange={(e) => setVariantFormData({ ...variantFormData, product_code: e.target.value })}
              placeholder="e.g., LPG-14.2-DOM"
            />
            <TextField
              fullWidth
              label="Variant Name"
              value={variantFormData.name}
              onChange={(e) => setVariantFormData({ ...variantFormData, name: e.target.value })}
              placeholder="e.g., 14.2 kg Domestic"
            />
            <TextField
              fullWidth
              label="Size"
              type="number"
              value={variantFormData.size}
              onChange={(e) => setVariantFormData({ ...variantFormData, size: e.target.value })}
              placeholder="e.g., 14.2"
            />
            <TextField
              fullWidth
              select
              label="Unit"
              value={variantFormData.unit}
              onChange={(e) => setVariantFormData({ ...variantFormData, unit: e.target.value })}
            >
              {units.map((unit) => (
                <MenuItem key={unit.id} value={unit.id}>
                  {unit.short_name} - {unit.description}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              select
              label="Variant Type"
              value={variantFormData.variant_type}
              onChange={(e) => setVariantFormData({ ...variantFormData, variant_type: e.target.value as VariantType })}
            >
              {VARIANT_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddVariantDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddVariant} variant="contained">
            Add Variant
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Variant Dialog */}
      <Dialog open={deleteVariantDialogOpen} onClose={() => setDeleteVariantDialogOpen(false)}>
        <DialogTitle>Delete Variant</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete variant "{selectedVariant?.name}"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteVariantDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteVariant} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
