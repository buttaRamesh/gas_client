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
