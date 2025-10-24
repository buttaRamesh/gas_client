import { useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Badge,
  Collapse,
  Avatar,
  Chip,
  Paper,
  Container,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart,
  ExpandLess,
  ExpandMore,
  LocalShipping,
  Route,
  Person,
  Inventory,
  Dashboard,
  People,
  AddShoppingCart,
  AccountCircle,
  LocationOn,
  Assessment,
  TrendingUp,
  AttachMoney,
  Star,
  Schedule,
  Map,
  DirectionsCar,
  Category,
  Settings,
  Notifications,
  Search,
  FavoriteRounded,
  Timeline,
  BarChart,
  ShoppingBag,
  Storefront,
} from '@mui/icons-material';

const SidebarDemo = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: { [key: string]: boolean } }>({});

  const handleExpandClick = (sidebarId: string, item: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [sidebarId]: {
        ...prev[sidebarId],
        [item]: !prev[sidebarId]?.[item]
      }
    }));
  };

  const sidebars = [
    {
      title: "Modern Gradient Design",
      id: "modern-gradient",
      description: "Sleek gradient header with smooth animations",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
          <Box sx={{ 
            p: 3, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -50,
              right: -50,
              width: 150,
              height: 150,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.1)',
            }
          }}>
            <Avatar sx={{ width: 56, height: 56, mb: 2, bgcolor: 'white', color: '#667eea', boxShadow: 3 }}>
              <Dashboard />
            </Avatar>
            <Typography variant="h6" fontWeight="bold">Delivery Hub</Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>Admin Dashboard</Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('modern-gradient', 'consumers')}
              sx={{ 
                borderRadius: 2, 
                mb: 0.5,
                '&:hover': { bgcolor: 'primary.50' }
              }}
            >
              <ListItemIcon><People sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Consumers" />
              <Badge badgeContent={42} color="primary" />
              {expandedItems['modern-gradient']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['modern-gradient']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Person /></ListItemIcon>
                  <ListItemText primary="All Customers" secondary="1,234 total" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Star sx={{ color: 'warning.main' }} /></ListItemIcon>
                  <ListItemText primary="VIP Members" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><ShoppingCart /></ListItemIcon>
                  <ListItemText primary="Active Orders" secondary="89 pending" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('modern-gradient', 'routes')}
              sx={{ borderRadius: 2, mb: 0.5, '&:hover': { bgcolor: 'success.50' } }}
            >
              <ListItemIcon><Route sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Routes" />
              {expandedItems['modern-gradient']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['modern-gradient']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Active Routes" secondary="24 ongoing" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Scheduled" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Timeline /></ListItemIcon>
                  <ListItemText primary="History" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('modern-gradient', 'delivery')}
              sx={{ borderRadius: 2, mb: 0.5, '&:hover': { bgcolor: 'warning.50' } }}
            >
              <ListItemIcon><LocalShipping sx={{ color: 'warning.main' }} /></ListItemIcon>
              <ListItemText primary="Delivery Persons" />
              <Badge badgeContent={18} color="success" />
              {expandedItems['modern-gradient']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['modern-gradient']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><DirectionsCar sx={{ color: 'success.main' }} /></ListItemIcon>
                  <ListItemText primary="Active Drivers" secondary="18 online" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Assessment /></ListItemIcon>
                  <ListItemText primary="Performance" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('modern-gradient', 'products')}
              sx={{ borderRadius: 2, '&:hover': { bgcolor: 'error.50' } }}
            >
              <ListItemIcon><Inventory sx={{ color: 'error.main' }} /></ListItemIcon>
              <ListItemText primary="Products" />
              {expandedItems['modern-gradient']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['modern-gradient']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><Category /></ListItemIcon>
                  <ListItemText primary="Catalog" secondary="567 items" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2 }}>
                  <ListItemIcon><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Top Sellers" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Minimal Dark Theme",
      id: "dark-minimal",
      description: "Clean dark design with elegant spacing",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#1a1a2e', color: 'white' }}>
          <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: '#16213e', border: '2px solid #0f3460' }}>
                <Storefront sx={{ color: '#00d4ff' }} />
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight="600">DeliveryPro</Typography>
                <Chip label="Online" size="small" sx={{ bgcolor: '#00d4ff', color: '#1a1a2e', fontWeight: 600, height: 20 }} />
              </Box>
            </Stack>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('dark-minimal', 'consumers')}
              sx={{ mb: 1, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(0,212,255,0.1)' } }}
            >
              <ListItemIcon sx={{ color: '#00d4ff' }}><People /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Consumers</Typography>} 
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>1,234 registered</Typography>}
              />
              {expandedItems['dark-minimal']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['dark-minimal']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><AccountCircle fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Profiles</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><ShoppingCart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Orders</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('dark-minimal', 'routes')}
              sx={{ mb: 1, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(0,212,255,0.1)' } }}
            >
              <ListItemIcon sx={{ color: '#00d4ff' }}><Route /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>24 active</Typography>}
              />
              {expandedItems['dark-minimal']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['dark-minimal']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Map View</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Assessment fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Analytics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('dark-minimal', 'delivery')}
              sx={{ mb: 1, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(0,212,255,0.1)' } }}
            >
              <ListItemIcon sx={{ color: '#00d4ff' }}><LocalShipping /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>18 online</Typography>}
              />
              {expandedItems['dark-minimal']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['dark-minimal']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Fleet</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Ratings</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('dark-minimal', 'products')}
              sx={{ borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(0,212,255,0.1)' } }}
            >
              <ListItemIcon sx={{ color: '#00d4ff' }}><Inventory /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Products</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>567 items</Typography>}
              />
              {expandedItems['dark-minimal']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['dark-minimal']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Category fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Categories</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><BarChart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Inventory</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Colorful Cards",
      id: "colorful-cards",
      description: "Vibrant card-based navigation",
      content: (
        <Box sx={{ width: 300, height: '100%', bgcolor: '#f5f7fa', p: 2 }}>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 1.5, bgcolor: 'white', boxShadow: 2 }}>
              <Dashboard sx={{ fontSize: 36, color: 'primary.main' }} />
            </Avatar>
            <Typography variant="h6" fontWeight="bold">Control Center</Typography>
          </Box>

          <Stack spacing={1.5}>
            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'white',
                border: '2px solid #e1e8ed'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('colorful-cards', 'consumers')}
                sx={{ 
                  p: 2,
                  bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(102,126,234,0.9)' }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <People sx={{ color: 'white', fontSize: 28 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={<Typography variant="subtitle1" fontWeight="600">Consumers</Typography>}
                  secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Manage customers</Typography>}
                />
                {expandedItems['colorful-cards']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['colorful-cards']?.['consumers']} timeout="auto" unmountOnExit>
                <List sx={{ bgcolor: 'white', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Person fontSize="small" /></ListItemIcon>
                    <ListItemText primary="All Customers" />
                    <Chip label="1.2K" size="small" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Star sx={{ color: 'warning.main' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Premium" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'white',
                border: '2px solid #e1e8ed'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('colorful-cards', 'routes')}
                sx={{ 
                  p: 2,
                  background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(17,153,142,0.9)' }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Route sx={{ color: 'white', fontSize: 28 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={<Typography variant="subtitle1" fontWeight="600">Routes</Typography>}
                  secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Track deliveries</Typography>}
                />
                {expandedItems['colorful-cards']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['colorful-cards']?.['routes']} timeout="auto" unmountOnExit>
                <List sx={{ bgcolor: 'white', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Map fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Live Map" />
                    <Chip label="24" size="small" color="success" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Schedule fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Scheduled" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'white',
                border: '2px solid #e1e8ed'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('colorful-cards', 'delivery')}
                sx={{ 
                  p: 2,
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(240,147,251,0.9)' }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LocalShipping sx={{ color: 'white', fontSize: 28 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={<Typography variant="subtitle1" fontWeight="600">Delivery Persons</Typography>}
                  secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Driver management</Typography>}
                />
                {expandedItems['colorful-cards']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['colorful-cards']?.['delivery']} timeout="auto" unmountOnExit>
                <List sx={{ bgcolor: 'white', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><DirectionsCar fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Active Drivers" />
                    <Chip label="18" size="small" color="success" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Assessment fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Performance" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'white',
                border: '2px solid #e1e8ed'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('colorful-cards', 'products')}
                sx={{ 
                  p: 2,
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(250,112,154,0.9)' }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Inventory sx={{ color: 'white', fontSize: 28 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={<Typography variant="subtitle1" fontWeight="600">Products</Typography>}
                  secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Inventory control</Typography>}
                />
                {expandedItems['colorful-cards']?.['products'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['colorful-cards']?.['products']} timeout="auto" unmountOnExit>
                <List sx={{ bgcolor: 'white', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Category fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Catalog" />
                    <Chip label="567" size="small" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><TrendingUp fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Top Sellers" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>
          </Stack>
        </Box>
      ),
    },
    {
      title: "Glass Morphism",
      id: "glass-morph",
      description: "Modern frosted glass effect",
      content: (
        <Box sx={{ 
          width: 280, 
          height: '100%', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative'
        }}>
          <Box sx={{ 
            p: 3,
            bgcolor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            color: 'white'
          }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 0.5 }}>DeliveryHub</Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>Admin Panel</Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('glass-morph', 'consumers')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
              <ListItemText primary="Consumers" />
              {expandedItems['glass-morph']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['glass-morph']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2, pr: 2 }}>
                <ListItemButton sx={{ 
                  borderRadius: 1.5, 
                  mb: 0.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Person fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><ShoppingCart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Orders</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('glass-morph', 'routes')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Route /></ListItemIcon>
              <ListItemText primary="Routes" />
              {expandedItems['glass-morph']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['glass-morph']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2, pr: 2 }}>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  mb: 0.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Live Map</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Timeline fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">History</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('glass-morph', 'delivery')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><LocalShipping /></ListItemIcon>
              <ListItemText primary="Delivery Persons" />
              {expandedItems['glass-morph']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['glass-morph']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2, pr: 2 }}>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  mb: 0.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('glass-morph', 'products')}
              sx={{ 
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Inventory /></ListItemIcon>
              <ListItemText primary="Products" />
              {expandedItems['glass-morph']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['glass-morph']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2, pr: 2 }}>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  mb: 0.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Category fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ 
                  borderRadius: 1.5,
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><TrendingUp fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Analytics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Elegant Minimal",
      id: "elegant",
      description: "Clean and sophisticated design",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: 'white' }}>
          <Box sx={{ p: 3, borderBottom: '3px solid #f0f0f0' }}>
            <Typography variant="h4" fontWeight="700" sx={{ mb: 0.5, color: '#2c3e50' }}>Hub</Typography>
            <Typography variant="caption" color="text.secondary">Delivery Management</Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ pl: 2, color: 'text.secondary', fontWeight: 600 }}>
              Main Menu
            </Typography>
            
            <ListItemButton 
              onClick={() => handleExpandClick('elegant', 'consumers')}
              sx={{ 
                mt: 1,
                mb: 0.5,
                borderLeft: '3px solid transparent',
                '&:hover': { 
                  borderLeft: '3px solid #667eea',
                  bgcolor: '#f8f9ff'
                }
              }}
            >
              <ListItemIcon><People sx={{ color: '#667eea' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Consumers</Typography>}
                secondary={<Typography variant="caption">Customer base</Typography>}
              />
              {expandedItems['elegant']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['elegant']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#f8f9ff' } }}>
                  <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                  <Typography variant="caption" color="text.secondary">1,234</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#f8f9ff' } }}>
                  <ListItemText primary={<Typography variant="body2">Active Orders</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('elegant', 'routes')}
              sx={{ 
                mb: 0.5,
                borderLeft: '3px solid transparent',
                '&:hover': { 
                  borderLeft: '3px solid #11998e',
                  bgcolor: '#f0fdf9'
                }
              }}
            >
              <ListItemIcon><Route sx={{ color: '#11998e' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Routes</Typography>}
                secondary={<Typography variant="caption">Delivery paths</Typography>}
              />
              {expandedItems['elegant']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['elegant']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#f0fdf9' } }}>
                  <ListItemText primary={<Typography variant="body2">Active Routes</Typography>} />
                  <Typography variant="caption" color="text.secondary">24</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#f0fdf9' } }}>
                  <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('elegant', 'delivery')}
              sx={{ 
                mb: 0.5,
                borderLeft: '3px solid transparent',
                '&:hover': { 
                  borderLeft: '3px solid #f093fb',
                  bgcolor: '#fef3ff'
                }
              }}
            >
              <ListItemIcon><LocalShipping sx={{ color: '#f093fb' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Delivery Persons</Typography>}
                secondary={<Typography variant="caption">Driver fleet</Typography>}
              />
              {expandedItems['elegant']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['elegant']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#fef3ff' } }}>
                  <ListItemText primary={<Typography variant="body2">Online Drivers</Typography>} />
                  <Typography variant="caption" color="text.secondary">18</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#fef3ff' } }}>
                  <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('elegant', 'products')}
              sx={{ 
                borderLeft: '3px solid transparent',
                '&:hover': { 
                  borderLeft: '3px solid #fa709a',
                  bgcolor: '#fff5f7'
                }
              }}
            >
              <ListItemIcon><Inventory sx={{ color: '#fa709a' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="500">Products</Typography>}
                secondary={<Typography variant="caption">Item catalog</Typography>}
              />
              {expandedItems['elegant']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['elegant']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#fff5f7' } }}>
                  <ListItemText primary={<Typography variant="body2">All Items</Typography>} />
                  <Typography variant="caption" color="text.secondary">567</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, '&:hover': { bgcolor: '#fff5f7' } }}>
                  <ListItemText primary={<Typography variant="body2">Top Sellers</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Executive Dashboard",
      id: "executive",
      description: "Premium enterprise-grade design",
      content: (
        <Box sx={{ width: 300, height: '100%', bgcolor: '#0a0e27' }}>
          <Box sx={{ 
            p: 3, 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
            position: 'relative'
          }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{ 
                  width: 64, 
                  height: 64, 
                  bgcolor: 'white',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                }}>
                  <Dashboard sx={{ fontSize: 32, color: '#1e3a8a' }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight="700" color="white">Enterprise</Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Control Center
                  </Typography>
                </Box>
              </Stack>
              <Paper sx={{ 
                p: 1.5, 
                bgcolor: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Stack direction="row" spacing={2} justifyContent="space-around">
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="700" color="white">1.2K</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Users</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="700" color="white">24</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Routes</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="700" color="white">18</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Drivers</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('executive', 'consumers')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: 'rgba(59,130,246,0.1)',
                color: 'white',
                border: '1px solid rgba(59,130,246,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(59,130,246,0.2)',
                  borderColor: 'rgba(59,130,246,0.5)'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#60a5fa' }}><People /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Consumers</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>Customer management</Typography>}
              />
              {expandedItems['executive']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['executive']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><AccountCircle fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                  <Chip label="1,234" size="small" sx={{ bgcolor: 'rgba(59,130,246,0.3)', color: 'white' }} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Premium Members</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Assessment fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Analytics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('executive', 'routes')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: 'rgba(34,197,94,0.1)',
                color: 'white',
                border: '1px solid rgba(34,197,94,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(34,197,94,0.2)',
                  borderColor: 'rgba(34,197,94,0.5)'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#4ade80' }}><Route /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>Route optimization</Typography>}
              />
              {expandedItems['executive']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['executive']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Live Tracking</Typography>} />
                  <Chip label="24" size="small" sx={{ bgcolor: 'rgba(34,197,94,0.3)', color: 'white' }} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Timeline fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Route History</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('executive', 'delivery')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: 'rgba(251,146,60,0.1)',
                color: 'white',
                border: '1px solid rgba(251,146,60,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(251,146,60,0.2)',
                  borderColor: 'rgba(251,146,60,0.5)'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#fb923c' }}><LocalShipping /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>Fleet management</Typography>}
              />
              <Badge badgeContent={18} sx={{ '& .MuiBadge-badge': { bgcolor: '#22c55e', color: 'white' } }} />
              {expandedItems['executive']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['executive']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><BarChart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Performance Metrics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('executive', 'products')}
              sx={{ 
                borderRadius: 2,
                bgcolor: 'rgba(168,85,247,0.1)',
                color: 'white',
                border: '1px solid rgba(168,85,247,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(168,85,247,0.2)',
                  borderColor: 'rgba(168,85,247,0.5)'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#a855f7' }}><Inventory /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Products</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>Inventory system</Typography>}
              />
              {expandedItems['executive']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['executive']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><Category fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Product Catalog</Typography>} />
                  <Chip label="567" size="small" sx={{ bgcolor: 'rgba(168,85,247,0.3)', color: 'white' }} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}><TrendingUp fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Best Sellers</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Luxury Gold",
      id: "luxury-gold",
      description: "Premium gold-accented design",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#1c1917' }}>
          <Box sx={{ 
            p: 3,
            background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)',
            color: 'white',
            position: 'relative',
            borderBottom: '2px solid #d97706'
          }}>
            <Avatar sx={{ 
              width: 60, 
              height: 60, 
              mb: 2,
              bgcolor: '#fbbf24',
              color: '#78350f',
              boxShadow: '0 4px 14px rgba(251,191,36,0.5)'
            }}>
              <Storefront sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h5" fontWeight="800" sx={{ 
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 0.5
            }}>
              Elite Hub
            </Typography>
            <Typography variant="caption" sx={{ color: '#fcd34d' }}>
              Premium Management System
            </Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('luxury-gold', 'consumers')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(251,191,36,0.1)',
                color: 'white',
                border: '1px solid rgba(251,191,36,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(251,191,36,0.15)',
                  boxShadow: '0 0 20px rgba(251,191,36,0.2)'
                }
              }}
            >
              <ListItemIcon>
                <People sx={{ color: '#fbbf24' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Consumers</Typography>}
              />
              <Chip 
                label="Premium" 
                size="small" 
                sx={{ 
                  bgcolor: '#fbbf24',
                  color: '#78350f',
                  fontWeight: 700,
                  fontSize: '0.7rem'
                }} 
              />
              {expandedItems['luxury-gold']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['luxury-gold']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, mb: 1, p: 0.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><Person fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">VIP Customers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><ShoppingCart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Luxury Orders</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('luxury-gold', 'routes')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(251,191,36,0.1)',
                color: 'white',
                border: '1px solid rgba(251,191,36,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(251,191,36,0.15)',
                  boxShadow: '0 0 20px rgba(251,191,36,0.2)'
                }
              }}
            >
              <ListItemIcon><Route sx={{ color: '#fbbf24' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="600">Routes</Typography>} />
              {expandedItems['luxury-gold']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['luxury-gold']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, mb: 1, p: 0.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Express Routes</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><LocationOn fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Priority Zones</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('luxury-gold', 'delivery')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(251,191,36,0.1)',
                color: 'white',
                border: '1px solid rgba(251,191,36,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(251,191,36,0.15)',
                  boxShadow: '0 0 20px rgba(251,191,36,0.2)'
                }
              }}
            >
              <ListItemIcon><LocalShipping sx={{ color: '#fbbf24' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="600">Delivery Persons</Typography>} />
              {expandedItems['luxury-gold']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['luxury-gold']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, mb: 1, p: 0.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Elite Drivers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Premium Fleet</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('luxury-gold', 'products')}
              sx={{ 
                borderRadius: 2,
                bgcolor: 'rgba(251,191,36,0.1)',
                color: 'white',
                border: '1px solid rgba(251,191,36,0.3)',
                '&:hover': { 
                  bgcolor: 'rgba(251,191,36,0.15)',
                  boxShadow: '0 0 20px rgba(251,191,36,0.2)'
                }
              }}
            >
              <ListItemIcon><Inventory sx={{ color: '#fbbf24' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="600">Products</Typography>} />
              {expandedItems['luxury-gold']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['luxury-gold']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, p: 0.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><ShoppingBag fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Luxury Items</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#fcd34d' }}><FavoriteRounded fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Exclusive Collection</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Corporate Blue",
      id: "corporate-blue",
      description: "Professional business design",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: 'white', borderRight: '1px solid #e5e7eb' }}>
          <Box sx={{ 
            p: 3,
            bgcolor: '#1e40af',
            color: 'white'
          }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Avatar sx={{ bgcolor: 'white', color: '#1e40af', width: 48, height: 48 }}>
                <Dashboard />
              </Avatar>
              <Box>
                <Typography variant="h6" fontWeight="700">DeliveryPro</Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>Business Suite</Typography>
              </Box>
            </Stack>
            <Box sx={{ 
              display: 'flex', 
              gap: 1,
              p: 1.5,
              bgcolor: 'rgba(255,255,255,0.1)',
              borderRadius: 1
            }}>
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="700">92%</Typography>
                <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>Efficiency</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="700">4.8</Typography>
                <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>Rating</Typography>
              </Box>
            </Box>
          </Box>

          <List sx={{ p: 2 }}>
            <Typography variant="caption" sx={{ pl: 2, color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
              Operations
            </Typography>

            <ListItemButton 
              onClick={() => handleExpandClick('corporate-blue', 'consumers')}
              sx={{ 
                mt: 1,
                mb: 0.5,
                borderRadius: 1.5,
                '&:hover': { 
                  bgcolor: '#eff6ff'
                }
              }}
            >
              <ListItemIcon><People sx={{ color: '#2563eb' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="600">Consumers</Typography>}
                secondary={<Typography variant="caption" color="text.secondary">Customer base</Typography>}
              />
              {expandedItems['corporate-blue']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['corporate-blue']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#eff6ff' } }}>
                  <ListItemText 
                    primary={<Typography variant="body2">Customer Directory</Typography>}
                    secondary={<Typography variant="caption" color="text.secondary">1,234 active</Typography>}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#eff6ff' } }}>
                  <ListItemText primary={<Typography variant="body2">Order Management</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#eff6ff' } }}>
                  <ListItemText primary={<Typography variant="body2">Customer Analytics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('corporate-blue', 'routes')}
              sx={{ 
                mb: 0.5,
                borderRadius: 1.5,
                '&:hover': { 
                  bgcolor: '#ecfdf5'
                }
              }}
            >
              <ListItemIcon><Route sx={{ color: '#059669' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="600">Routes</Typography>}
                secondary={<Typography variant="caption" color="text.secondary">Delivery planning</Typography>}
              />
              {expandedItems['corporate-blue']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['corporate-blue']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#ecfdf5' } }}>
                  <ListItemText 
                    primary={<Typography variant="body2">Active Routes</Typography>}
                    secondary={<Typography variant="caption" color="text.secondary">24 ongoing</Typography>}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#ecfdf5' } }}>
                  <ListItemText primary={<Typography variant="body2">Route Optimization</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#ecfdf5' } }}>
                  <ListItemText primary={<Typography variant="body2">Schedule Manager</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('corporate-blue', 'delivery')}
              sx={{ 
                mb: 0.5,
                borderRadius: 1.5,
                '&:hover': { 
                  bgcolor: '#fef3c7'
                }
              }}
            >
              <ListItemIcon><LocalShipping sx={{ color: '#d97706' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="600">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" color="text.secondary">Fleet operations</Typography>}
              />
              <Badge badgeContent={18} color="success" />
              {expandedItems['corporate-blue']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['corporate-blue']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#fef3c7' } }}>
                  <ListItemText 
                    primary={<Typography variant="body2">Driver Management</Typography>}
                    secondary={<Typography variant="caption" color="text.secondary">18 online</Typography>}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#fef3c7' } }}>
                  <ListItemText primary={<Typography variant="body2">Performance Reviews</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#fef3c7' } }}>
                  <ListItemText primary={<Typography variant="body2">Training & Safety</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('corporate-blue', 'products')}
              sx={{ 
                borderRadius: 1.5,
                '&:hover': { 
                  bgcolor: '#fce7f3'
                }
              }}
            >
              <ListItemIcon><Inventory sx={{ color: '#be185d' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body2" fontWeight="600">Products</Typography>}
                secondary={<Typography variant="caption" color="text.secondary">Inventory control</Typography>}
              />
              {expandedItems['corporate-blue']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['corporate-blue']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#fce7f3' } }}>
                  <ListItemText 
                    primary={<Typography variant="body2">Product Catalog</Typography>}
                    secondary={<Typography variant="caption" color="text.secondary">567 items</Typography>}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#fce7f3' } }}>
                  <ListItemText primary={<Typography variant="body2">Stock Management</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 7, borderRadius: 1.5, '&:hover': { bgcolor: '#fce7f3' } }}>
                  <ListItemText primary={<Typography variant="body2">Sales Analytics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Modern Gradient Pro",
      id: "gradient-pro",
      description: "Premium multi-gradient design",
      content: (
        <Box sx={{ width: 290, height: '100%', bgcolor: '#f8fafc' }}>
          <Box sx={{ 
            p: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -100,
              right: -100,
              width: 200,
              height: 200,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.1)',
            }
          }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" fontWeight="800" sx={{ mb: 0.5 }}>
                PRO
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95, mb: 2 }}>
                Advanced Control Panel
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip 
                  label="Admin" 
                  size="small" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.25)',
                    color: 'white',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Chip 
                  label="Live" 
                  size="small" 
                  icon={<Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22c55e', ml: 1 }} />}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.25)',
                    color: 'white',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)'
                  }} 
                />
              </Stack>
            </Box>
          </Box>

          <List sx={{ p: 2 }}>
            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                overflow: 'hidden',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #667eea, #764ba2)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('gradient-pro', 'consumers')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: 'transparent',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  mr: 2,
                  width: 40,
                  height: 40
                }}>
                  <People sx={{ color: 'white' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700">Consumers</Typography>}
                  secondary={<Typography variant="caption">1,234 registered users</Typography>}
                />
                {expandedItems['gradient-pro']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['gradient-pro']?.['consumers']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#fafafa', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><Person fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">All Users</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><Star fontSize="small" sx={{ color: '#f59e0b' }} /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Premium</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                overflow: 'hidden',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #11998e, #38ef7d)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('gradient-pro', 'routes')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: 'transparent',
                  background: 'linear-gradient(135deg, #11998e, #38ef7d)',
                  mr: 2,
                  width: 40,
                  height: 40
                }}>
                  <Route sx={{ color: 'white' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700">Routes</Typography>}
                  secondary={<Typography variant="caption">24 active deliveries</Typography>}
                />
                {expandedItems['gradient-pro']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['gradient-pro']?.['routes']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#fafafa', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><Map fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Live Tracking</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><Schedule fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                overflow: 'hidden',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #f093fb, #f5576c)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('gradient-pro', 'delivery')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: 'transparent',
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  mr: 2,
                  width: 40,
                  height: 40
                }}>
                  <LocalShipping sx={{ color: 'white' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700">Delivery Persons</Typography>}
                  secondary={<Typography variant="caption">18 drivers online</Typography>}
                />
                <Badge badgeContent={18} color="success" />
                {expandedItems['gradient-pro']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['gradient-pro']?.['delivery']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#fafafa', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><DirectionsCar fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Fleet Status</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><Assessment fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 2.5,
                overflow: 'hidden',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #fa709a, #fee140)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('gradient-pro', 'products')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: 'transparent',
                  background: 'linear-gradient(135deg, #fa709a, #fee140)',
                  mr: 2,
                  width: 40,
                  height: 40
                }}>
                  <Inventory sx={{ color: 'white' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700">Products</Typography>}
                  secondary={<Typography variant="caption">567 items in stock</Typography>}
                />
                {expandedItems['gradient-pro']?.['products'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['gradient-pro']?.['products']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#fafafa', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><Category fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><TrendingUp fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Best Sellers</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>
          </List>
        </Box>
      ),
    },
    {
      title: "Neon Cyber",
      id: "neon-cyber",
      description: "Futuristic neon-accented design",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#0f0f23', position: 'relative' }}>
          <Box sx={{ 
            p: 3,
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
            borderBottom: '2px solid #00ffff',
            color: 'white',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
              animation: 'glow 3s ease-in-out infinite',
            },
            '@keyframes glow': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.5 },
            }
          }}>
            <Typography variant="h5" fontWeight="800" sx={{ 
              color: '#00ffff',
              textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
              mb: 0.5
            }}>
              CYBER HUB
            </Typography>
            <Typography variant="caption" sx={{ color: '#ff00ff' }}>
              Next-Gen Management
            </Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('neon-cyber', 'consumers')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(0,255,255,0.05)',
                color: 'white',
                border: '1px solid rgba(0,255,255,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: 'rgba(0,255,255,0.15)',
                  boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                  borderColor: '#00ffff'
                }
              }}
            >
              <ListItemIcon>
                <People sx={{ color: '#00ffff' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Consumers</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(0,255,255,0.7)' }}>User Matrix</Typography>}
              />
              {expandedItems['neon-cyber']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['neon-cyber']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(0,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#00ffff', minWidth: 36 }}><Person fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">User Database</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(0,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#00ffff', minWidth: 36 }}><Assessment fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Analytics</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('neon-cyber', 'routes')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(255,0,255,0.05)',
                color: 'white',
                border: '1px solid rgba(255,0,255,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: 'rgba(255,0,255,0.15)',
                  boxShadow: '0 0 20px rgba(255,0,255,0.3)',
                  borderColor: '#ff00ff'
                }
              }}
            >
              <ListItemIcon><Route sx={{ color: '#ff00ff' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,0,255,0.7)' }}>Path Network</Typography>}
              />
              {expandedItems['neon-cyber']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['neon-cyber']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,0,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#ff00ff', minWidth: 36 }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Neural Map</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,0,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#ff00ff', minWidth: 36 }}><Timeline fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Timeline</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('neon-cyber', 'delivery')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(0,255,100,0.05)',
                color: 'white',
                border: '1px solid rgba(0,255,100,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: 'rgba(0,255,100,0.15)',
                  boxShadow: '0 0 20px rgba(0,255,100,0.3)',
                  borderColor: '#00ff64'
                }
              }}
            >
              <ListItemIcon><LocalShipping sx={{ color: '#00ff64' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(0,255,100,0.7)' }}>Fleet System</Typography>}
              />
              {expandedItems['neon-cyber']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['neon-cyber']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(0,255,100,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#00ff64', minWidth: 36 }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Active Units</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(0,255,100,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#00ff64', minWidth: 36 }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('neon-cyber', 'products')}
              sx={{ 
                borderRadius: 2,
                bgcolor: 'rgba(255,215,0,0.05)',
                color: 'white',
                border: '1px solid rgba(255,215,0,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: 'rgba(255,215,0,0.15)',
                  boxShadow: '0 0 20px rgba(255,215,0,0.3)',
                  borderColor: '#ffd700'
                }
              }}
            >
              <ListItemIcon><Inventory sx={{ color: '#ffd700' }} /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Products</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,215,0,0.7)' }}>Inventory Grid</Typography>}
              />
              {expandedItems['neon-cyber']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['neon-cyber']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,215,0,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#ffd700', minWidth: 36 }}><Category fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Item Matrix</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,215,0,0.1)' } }}>
                  <ListItemIcon sx={{ color: '#ffd700', minWidth: 36 }}><BarChart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Stock Status</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Soft Pastel",
      id: "soft-pastel",
      description: "Gentle pastel color scheme",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#fef9f3' }}>
          <Box sx={{ 
            p: 3,
            background: 'linear-gradient(135deg, #fef9f3 0%, #f8f0e8 100%)',
            borderBottom: '3px solid #e9d5c1'
          }}>
            <Avatar sx={{ 
              width: 64, 
              height: 64, 
              mb: 2,
              background: 'linear-gradient(135deg, #ffc8dd 0%, #bde0fe 100%)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <Dashboard sx={{ fontSize: 32, color: 'white' }} />
            </Avatar>
            <Typography variant="h5" fontWeight="700" sx={{ color: '#8b7355', mb: 0.5 }}>
              Gentle Hub
            </Typography>
            <Typography variant="caption" sx={{ color: '#a68a6a' }}>
              Soft Management System
            </Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 3,
                bgcolor: '#ffc8dd15',
                border: '2px solid #ffc8dd50',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('soft-pastel', 'consumers')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ bgcolor: '#ffc8dd', mr: 2, width: 36, height: 36 }}>
                  <People sx={{ color: 'white', fontSize: 20 }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#8b7355">Consumers</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Customer care</Typography>}
                />
                {expandedItems['soft-pastel']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['soft-pastel']?.['consumers']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#ffc8dd10', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Person sx={{ color: '#ffc8dd' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Star sx={{ color: '#ffc8dd' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Favorites</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 3,
                bgcolor: '#bde0fe15',
                border: '2px solid #bde0fe50',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('soft-pastel', 'routes')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ bgcolor: '#bde0fe', mr: 2, width: 36, height: 36 }}>
                  <Route sx={{ color: '#0077b6', fontSize: 20 }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#8b7355">Routes</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Path planning</Typography>}
                />
                {expandedItems['soft-pastel']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['soft-pastel']?.['routes']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#bde0fe10', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Map sx={{ color: '#0077b6' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Active Routes</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Schedule sx={{ color: '#0077b6' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 3,
                bgcolor: '#cdb4db15',
                border: '2px solid #cdb4db50',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('soft-pastel', 'delivery')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ bgcolor: '#cdb4db', mr: 2, width: 36, height: 36 }}>
                  <LocalShipping sx={{ color: 'white', fontSize: 20 }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#8b7355">Delivery Persons</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Driver team</Typography>}
                />
                {expandedItems['soft-pastel']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['soft-pastel']?.['delivery']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#cdb4db10', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><DirectionsCar sx={{ color: '#9d4edd' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Assessment sx={{ color: '#9d4edd' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 3,
                bgcolor: '#ffd6a515',
                border: '2px solid #ffd6a550',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('soft-pastel', 'products')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ bgcolor: '#ffd6a5', mr: 2, width: 36, height: 36 }}>
                  <Inventory sx={{ color: '#f77f00', fontSize: 20 }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#8b7355">Products</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Item collection</Typography>}
                />
                {expandedItems['soft-pastel']?.['products'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['soft-pastel']?.['products']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ bgcolor: '#ffd6a510', p: 1 }}>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Category sx={{ color: '#f77f00' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><TrendingUp sx={{ color: '#f77f00' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Popular Items</Typography>} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Paper>
          </List>
        </Box>
      ),
    },
    {
      title: "Bold Vibrant",
      id: "bold-vibrant",
      description: "High-energy colorful design",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: 'white' }}>
          <Box sx={{ 
            p: 3,
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #c44569 100%)',
            color: 'white',
            boxShadow: '0 4px 20px rgba(255,107,107,0.4)'
          }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Avatar sx={{ 
                bgcolor: 'white',
                width: 56,
                height: 56,
                boxShadow: 3
              }}>
                <Dashboard sx={{ color: '#ff6b6b', fontSize: 32 }} />
              </Avatar>
              <Box>
                <Typography variant="h5" fontWeight="900">BOLD HQ</Typography>
                <Typography variant="caption" sx={{ opacity: 0.95 }}>Dynamic Control</Typography>
              </Box>
            </Stack>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('bold-vibrant', 'consumers')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                bgcolor: '#ff6b6b',
                color: 'white',
                boxShadow: '0 4px 12px rgba(255,107,107,0.3)',
                '&:hover': { 
                  bgcolor: '#ee5a6f',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Consumers</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>1.2K users</Typography>}
              />
              {expandedItems['bold-vibrant']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['bold-vibrant']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#ffe0e0' } }}>
                  <ListItemIcon><Person sx={{ color: '#ff6b6b' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Customer List</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#ffe0e0' } }}>
                  <ListItemIcon><ShoppingCart sx={{ color: '#ff6b6b' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Orders</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('bold-vibrant', 'routes')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                bgcolor: '#4ecdc4',
                color: 'white',
                boxShadow: '0 4px 12px rgba(78,205,196,0.3)',
                '&:hover': { 
                  bgcolor: '#45b7b0',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Route /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>24 active</Typography>}
              />
              {expandedItems['bold-vibrant']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['bold-vibrant']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#e0f7f6' } }}>
                  <ListItemIcon><Map sx={{ color: '#4ecdc4' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Map View</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#e0f7f6' } }}>
                  <ListItemIcon><Timeline sx={{ color: '#4ecdc4' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">History</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('bold-vibrant', 'delivery')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                bgcolor: '#ffa502',
                color: 'white',
                boxShadow: '0 4px 12px rgba(255,165,2,0.3)',
                '&:hover': { 
                  bgcolor: '#ff9100',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><LocalShipping /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>18 online</Typography>}
              />
              {expandedItems['bold-vibrant']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['bold-vibrant']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#fff4e0' } }}>
                  <ListItemIcon><DirectionsCar sx={{ color: '#ffa502' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Fleet Status</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#fff4e0' } }}>
                  <ListItemIcon><Star sx={{ color: '#ffa502' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Ratings</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('bold-vibrant', 'products')}
              sx={{ 
                borderRadius: 2.5,
                bgcolor: '#a29bfe',
                color: 'white',
                boxShadow: '0 4px 12px rgba(162,155,254,0.3)',
                '&:hover': { 
                  bgcolor: '#9189e6',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Inventory /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Products</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>567 items</Typography>}
              />
              {expandedItems['bold-vibrant']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['bold-vibrant']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#f0eeff' } }}>
                  <ListItemIcon><Category sx={{ color: '#a29bfe' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Catalog</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, '&:hover': { bgcolor: '#f0eeff' } }}>
                  <ListItemIcon><TrendingUp sx={{ color: '#a29bfe' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2" fontWeight="500">Top Sellers</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Minimalist Mono",
      id: "minimalist-mono",
      description: "Clean monochrome sophistication",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: 'white', borderRight: '1px solid #e0e0e0' }}>
          <Box sx={{ 
            p: 4,
            borderBottom: '1px solid #e0e0e0'
          }}>
            <Typography variant="h3" fontWeight="900" sx={{ color: '#000', mb: 1 }}>
              HUB
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: 2 }}>
              MINIMALIST
            </Typography>
          </Box>

          <List sx={{ p: 3 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('minimalist-mono', 'consumers')}
              sx={{ 
                mb: 2,
                p: 0,
                '&:hover': { 
                  '& .MuiListItemText-primary': {
                    color: '#000',
                    fontWeight: 700
                  }
                }
              }}
            >
              <ListItemText 
                primary={<Typography variant="h6" fontWeight="500" sx={{ transition: 'all 0.2s' }}>Consumers</Typography>}
                secondary={<Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, color: '#999' }}>Customer Management</Typography>}
              />
              {expandedItems['minimalist-mono']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['minimalist-mono']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                  <Typography variant="caption" color="text.secondary">1,234</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Active Orders</Typography>} />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('minimalist-mono', 'routes')}
              sx={{ 
                mb: 2,
                p: 0,
                '&:hover': { 
                  '& .MuiListItemText-primary': {
                    color: '#000',
                    fontWeight: 700
                  }
                }
              }}
            >
              <ListItemText 
                primary={<Typography variant="h6" fontWeight="500" sx={{ transition: 'all 0.2s' }}>Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, color: '#999' }}>Delivery Planning</Typography>}
              />
              {expandedItems['minimalist-mono']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['minimalist-mono']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Active Routes</Typography>} />
                  <Typography variant="caption" color="text.secondary">24</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('minimalist-mono', 'delivery')}
              sx={{ 
                mb: 2,
                p: 0,
                '&:hover': { 
                  '& .MuiListItemText-primary': {
                    color: '#000',
                    fontWeight: 700
                  }
                }
              }}
            >
              <ListItemText 
                primary={<Typography variant="h6" fontWeight="500" sx={{ transition: 'all 0.2s' }}>Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, color: '#999' }}>Fleet Operations</Typography>}
              />
              {expandedItems['minimalist-mono']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['minimalist-mono']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                  <Typography variant="caption" color="text.secondary">18</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('minimalist-mono', 'products')}
              sx={{ 
                p: 0,
                '&:hover': { 
                  '& .MuiListItemText-primary': {
                    color: '#000',
                    fontWeight: 700
                  }
                }
              }}
            >
              <ListItemText 
                primary={<Typography variant="h6" fontWeight="500" sx={{ transition: 'all 0.2s' }}>Products</Typography>}
                secondary={<Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, color: '#999' }}>Inventory System</Typography>}
              />
              {expandedItems['minimalist-mono']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['minimalist-mono']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                  <Typography variant="caption" color="text.secondary">567</Typography>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3, py: 1, '&:hover': { bgcolor: '#f5f5f5' } }}>
                  <ListItemText primary={<Typography variant="body2">Best Sellers</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Card Stack Pro",
      id: "card-stack",
      description: "Modern stacked card layout",
      content: (
        <Box sx={{ width: 300, height: '100%', bgcolor: '#f0f4f8', p: 2.5 }}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 3,
              mb: 3,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #2d3561 0%, #c05c7e 100%)',
              color: 'white'
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ 
                width: 60, 
                height: 60,
                borderRadius: 2,
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Dashboard sx={{ fontSize: 32, color: '#2d3561' }} />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="800">Stack Hub</Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>Management Suite</Typography>
              </Box>
            </Stack>
          </Paper>

          <Stack spacing={2}>
            <Paper 
              elevation={2}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('card-stack', 'consumers')}
                sx={{ p: 2.5, bgcolor: '#e3f2fd' }}
              >
                <Avatar sx={{ bgcolor: '#1976d2', mr: 2, width: 44, height: 44 }}>
                  <People />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" variant="h6" color="#1565c0">Consumers</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">Manage customer base</Typography>}
                />
                {expandedItems['card-stack']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['card-stack']?.['consumers']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'white', p: 2 }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><Person sx={{ color: '#1976d2' }} /></ListItemIcon>
                    <ListItemText primary="Customer Directory" />
                    <Chip label="1.2K" size="small" color="primary" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><ShoppingCart sx={{ color: '#1976d2' }} /></ListItemIcon>
                    <ListItemText primary="Order Management" />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={2}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('card-stack', 'routes')}
                sx={{ p: 2.5, bgcolor: '#e8f5e9' }}
              >
                <Avatar sx={{ bgcolor: '#2e7d32', mr: 2, width: 44, height: 44 }}>
                  <Route />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" variant="h6" color="#1b5e20">Routes</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">Optimize delivery paths</Typography>}
                />
                {expandedItems['card-stack']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['card-stack']?.['routes']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'white', p: 2 }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><Map sx={{ color: '#2e7d32' }} /></ListItemIcon>
                    <ListItemText primary="Live Routes" />
                    <Chip label="24" size="small" color="success" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Schedule sx={{ color: '#2e7d32' }} /></ListItemIcon>
                    <ListItemText primary="Schedule Manager" />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={2}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('card-stack', 'delivery')}
                sx={{ p: 2.5, bgcolor: '#fff3e0' }}
              >
                <Avatar sx={{ bgcolor: '#f57c00', mr: 2, width: 44, height: 44 }}>
                  <LocalShipping />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" variant="h6" color="#e65100">Delivery Persons</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">Fleet management</Typography>}
                />
                <Badge badgeContent={18} color="success" />
                {expandedItems['card-stack']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['card-stack']?.['delivery']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'white', p: 2 }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><DirectionsCar sx={{ color: '#f57c00' }} /></ListItemIcon>
                    <ListItemText primary="Active Drivers" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Assessment sx={{ color: '#f57c00' }} /></ListItemIcon>
                    <ListItemText primary="Performance Metrics" />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={2}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('card-stack', 'products')}
                sx={{ p: 2.5, bgcolor: '#f3e5f5' }}
              >
                <Avatar sx={{ bgcolor: '#7b1fa2', mr: 2, width: 44, height: 44 }}>
                  <Inventory />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" variant="h6" color="#4a148c">Products</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">Inventory control</Typography>}
                />
                {expandedItems['card-stack']?.['products'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['card-stack']?.['products']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'white', p: 2 }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><Category sx={{ color: '#7b1fa2' }} /></ListItemIcon>
                    <ListItemText primary="Product Catalog" />
                    <Chip label="567" size="small" sx={{ bgcolor: '#f3e5f5' }} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><TrendingUp sx={{ color: '#7b1fa2' }} /></ListItemIcon>
                    <ListItemText primary="Top Sellers" />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>
          </Stack>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Premium Sidebar Designs
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Beautiful navigation for Consumers, Routes, Delivery Persons & Products
        </Typography>
      </Box>

      <Stack spacing={4}>
        {sidebars.map((sidebar, index) => (
          <Paper key={index} elevation={4} sx={{ overflow: 'hidden', borderRadius: 3 }}>
            <Box sx={{ p: 3, bgcolor: 'grey.100', borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>{sidebar.title}</Typography>
              <Typography variant="body2" color="text.secondary">{sidebar.description}</Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              p: 4, 
              bgcolor: index % 2 === 0 ? 'grey.50' : 'white',
              minHeight: 500
            }}>
              {sidebar.content}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default SidebarDemo;
