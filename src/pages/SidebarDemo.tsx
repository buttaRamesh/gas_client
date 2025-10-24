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
  Stack,
} from '@mui/material';
import {
  ShoppingCart,
  ExpandLess,
  ExpandMore,
  LocalShipping,
  Route,
  Person,
  Inventory,
  Dashboard,
  People,
  AccountCircle,
  LocationOn,
  Assessment,
  TrendingUp,
  Star,
  Schedule,
  Map,
  DirectionsCar,
  Category,
  Timeline,
  BarChart,
  ShoppingBag,
  Storefront,
  FavoriteRounded,
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
      title: "Modern Metro",
      id: "modern-metro",
      description: "Sleek Windows Metro-inspired design",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#f3f4f6' }}>
          <Box sx={{ p: 3, bgcolor: 'white', borderBottom: '2px solid #e5e7eb' }}>
            <Typography variant="h4" fontWeight="900" sx={{ color: '#1f2937', mb: 0.5 }}>
              METRO
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280', textTransform: 'uppercase', letterSpacing: 1 }}>
              Delivery System
            </Typography>
          </Box>

          <Box sx={{ p: 2 }}>
            <Paper 
              elevation={0}
              sx={{ 
                mb: 2,
                bgcolor: '#3b82f6',
                color: 'white',
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('modern-metro', 'consumers')}
                sx={{ p: 2.5 }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <People sx={{ fontSize: 28 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="700">Consumers</Typography>
                    <Typography variant="caption">1,234 users</Typography>
                  </Box>
                  {expandedItems['modern-metro']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </ListItemButton>
              <Collapse in={expandedItems['modern-metro']?.['consumers']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'rgba(0,0,0,0.1)', p: 1.5 }}>
                  <ListItemButton sx={{ borderRadius: 1, mb: 0.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Person fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Directory</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><ShoppingCart fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Orders</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 2,
                bgcolor: '#10b981',
                color: 'white',
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('modern-metro', 'routes')}
                sx={{ p: 2.5 }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Route sx={{ fontSize: 28 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="700">Routes</Typography>
                    <Typography variant="caption">24 active</Typography>
                  </Box>
                  {expandedItems['modern-metro']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </ListItemButton>
              <Collapse in={expandedItems['modern-metro']?.['routes']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'rgba(0,0,0,0.1)', p: 1.5 }}>
                  <ListItemButton sx={{ borderRadius: 1, mb: 0.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Map fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Live Map</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Schedule fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 2,
                bgcolor: '#f59e0b',
                color: 'white',
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('modern-metro', 'delivery')}
                sx={{ p: 2.5 }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <LocalShipping sx={{ fontSize: 28 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="700">Delivery</Typography>
                    <Typography variant="caption">18 online</Typography>
                  </Box>
                  {expandedItems['modern-metro']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </ListItemButton>
              <Collapse in={expandedItems['modern-metro']?.['delivery']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'rgba(0,0,0,0.1)', p: 1.5 }}>
                  <ListItemButton sx={{ borderRadius: 1, mb: 0.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><DirectionsCar fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Fleet</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Star fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                bgcolor: '#8b5cf6',
                color: 'white',
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('modern-metro', 'products')}
                sx={{ p: 2.5 }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Inventory sx={{ fontSize: 28 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="700">Products</Typography>
                    <Typography variant="caption">567 items</Typography>
                  </Box>
                  {expandedItems['modern-metro']?.['products'] ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </ListItemButton>
              <Collapse in={expandedItems['modern-metro']?.['products']} timeout="auto" unmountOnExit>
                <Box sx={{ bgcolor: 'rgba(0,0,0,0.1)', p: 1.5 }}>
                  <ListItemButton sx={{ borderRadius: 1, mb: 0.5, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Category fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><TrendingUp fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Trending</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>
          </Box>
        </Box>
      ),
    },
    {
      title: "Oceanic Gradient",
      id: "oceanic",
      description: "Calming ocean-themed design",
      content: (
        <Box sx={{ width: 280, height: '100%', background: 'linear-gradient(180deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)' }}>
          <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
            <Avatar sx={{ 
              width: 64, 
              height: 64, 
              mb: 2,
              bgcolor: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              <Dashboard sx={{ fontSize: 32, color: 'white' }} />
            </Avatar>
            <Typography variant="h5" fontWeight="800">Ocean Hub</Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>Delivery Management</Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('oceanic', 'consumers')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Consumers</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Customer base</Typography>}
              />
              {expandedItems['oceanic']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['oceanic']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Person fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">VIP</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('oceanic', 'routes')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Route /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Delivery paths</Typography>}
              />
              {expandedItems['oceanic']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['oceanic']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Map View</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Timeline fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">History</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('oceanic', 'delivery')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><LocalShipping /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Fleet team</Typography>}
              />
              {expandedItems['oceanic']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['oceanic']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Assessment fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Stats</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('oceanic', 'products')}
              sx={{ 
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Inventory /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="600">Products</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>Inventory</Typography>}
              />
              {expandedItems['oceanic']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['oceanic']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Category fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 1.5, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><TrendingUp fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Best Sellers</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Neumorphic Light",
      id: "neumorphic",
      description: "Soft shadows and depth",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#e8eaf6', p: 2 }}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3,
              mb: 3,
              borderRadius: 4,
              bgcolor: '#e8eaf6',
              boxShadow: '8px 8px 16px #bebfc7, -8px -8px 16px #ffffff'
            }}
          >
            <Typography variant="h5" fontWeight="800" sx={{ color: '#5c6bc0', mb: 0.5 }}>
              Neuro Hub
            </Typography>
            <Typography variant="caption" sx={{ color: '#7986cb' }}>
              Soft Interface
            </Typography>
          </Paper>

          <Stack spacing={2}>
            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 3,
                bgcolor: '#e8eaf6',
                boxShadow: '6px 6px 12px #bebfc7, -6px -6px 12px #ffffff',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('neumorphic', 'consumers')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: '#e8eaf6',
                  boxShadow: '4px 4px 8px #bebfc7, -4px -4px 8px #ffffff',
                  mr: 2
                }}>
                  <People sx={{ color: '#5c6bc0' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" color="#3f51b5">Consumers</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">1.2K users</Typography>}
                />
                {expandedItems['neumorphic']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['neumorphic']?.['consumers']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#f0f1f9' }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><Person sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Directory</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><ShoppingCart sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Orders</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 3,
                bgcolor: '#e8eaf6',
                boxShadow: '6px 6px 12px #bebfc7, -6px -6px 12px #ffffff',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('neumorphic', 'routes')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: '#e8eaf6',
                  boxShadow: '4px 4px 8px #bebfc7, -4px -4px 8px #ffffff',
                  mr: 2
                }}>
                  <Route sx={{ color: '#5c6bc0' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" color="#3f51b5">Routes</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">24 active</Typography>}
                />
                {expandedItems['neumorphic']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['neumorphic']?.['routes']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#f0f1f9' }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><Map sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Live Map</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Schedule sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 3,
                bgcolor: '#e8eaf6',
                boxShadow: '6px 6px 12px #bebfc7, -6px -6px 12px #ffffff',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('neumorphic', 'delivery')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: '#e8eaf6',
                  boxShadow: '4px 4px 8px #bebfc7, -4px -4px 8px #ffffff',
                  mr: 2
                }}>
                  <LocalShipping sx={{ color: '#5c6bc0' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" color="#3f51b5">Delivery Persons</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">18 online</Typography>}
                />
                {expandedItems['neumorphic']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['neumorphic']?.['delivery']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#f0f1f9' }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><DirectionsCar sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Fleet</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><Star sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 3,
                bgcolor: '#e8eaf6',
                boxShadow: '6px 6px 12px #bebfc7, -6px -6px 12px #ffffff',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('neumorphic', 'products')}
                sx={{ p: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: '#e8eaf6',
                  boxShadow: '4px 4px 8px #bebfc7, -4px -4px 8px #ffffff',
                  mr: 2
                }}>
                  <Inventory sx={{ color: '#5c6bc0' }} />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="700" color="#3f51b5">Products</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">567 items</Typography>}
                />
                {expandedItems['neumorphic']?.['products'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['neumorphic']?.['products']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#f0f1f9' }}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
                    <ListItemIcon><Category sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 2 }}>
                    <ListItemIcon><TrendingUp sx={{ color: '#5c6bc0' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Best Sellers</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>
          </Stack>
        </Box>
      ),
    },
    {
      title: "Sunset Gradient",
      id: "sunset",
      description: "Warm sunset-inspired colors",
      content: (
        <Box sx={{ width: 280, height: '100%', background: 'linear-gradient(180deg, #ff6b6b 0%, #ee5a6f 25%, #c44569 50%, #8b5cf6 75%, #5c6bc0 100%)' }}>
          <Box sx={{ p: 3, color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{ 
                width: 56, 
                height: 56, 
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <Dashboard sx={{ fontSize: 32 }} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="800">Sunset</Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>Delivery System</Typography>
              </Box>
            </Stack>
          </Box>

          <List sx={{ p: 2 }}>
            <ListItemButton 
              onClick={() => handleExpandClick('sunset', 'consumers')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><People /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Consumers</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Customer management</Typography>}
              />
              {expandedItems['sunset']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['sunset']?.['consumers']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Person fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">All Customers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><ShoppingCart fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Orders</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('sunset', 'routes')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Route /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Routes</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Delivery planning</Typography>}
              />
              {expandedItems['sunset']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['sunset']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Map fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Live Tracking</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Timeline fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">History</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('sunset', 'delivery')}
              sx={{ 
                mb: 1.5,
                borderRadius: 2.5,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><LocalShipping /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Delivery Persons</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Fleet operations</Typography>}
              />
              {expandedItems['sunset']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['sunset']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><DirectionsCar fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Star fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Performance</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton 
              onClick={() => handleExpandClick('sunset', 'products')}
              sx={{ 
                borderRadius: 2.5,
                bgcolor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}><Inventory /></ListItemIcon>
              <ListItemText 
                primary={<Typography fontWeight="700">Products</Typography>}
                secondary={<Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Inventory control</Typography>}
              />
              {expandedItems['sunset']?.['products'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['sunset']?.['products']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><Category fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, borderRadius: 2, color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 36 }}><TrendingUp fontSize="small" /></ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">Trending</Typography>} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "Material Design 3",
      id: "material-3",
      description: "Google's Material Design 3 style",
      content: (
        <Box sx={{ width: 280, height: '100%', bgcolor: '#fef7ff' }}>
          <Box sx={{ 
            p: 3,
            bgcolor: '#6750a4',
            color: 'white',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24
          }}>
            <Typography variant="h5" fontWeight="700" sx={{ mb: 0.5 }}>
              Material Hub
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              Modern Design System
            </Typography>
          </Box>

          <List sx={{ p: 2 }}>
            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 4,
                bgcolor: '#e8def8',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('material-3', 'consumers')}
                sx={{ p: 2.5 }}
              >
                <Avatar sx={{ bgcolor: '#6750a4', mr: 2 }}>
                  <People />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#1c1b1f">Consumers</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Manage customers</Typography>}
                />
                {expandedItems['material-3']?.['consumers'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['material-3']?.['consumers']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#d0bcff20' }}>
                  <ListItemButton sx={{ borderRadius: 3, mb: 0.5 }}>
                    <ListItemIcon><Person sx={{ color: '#6750a4' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Customer List</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 3 }}>
                    <ListItemIcon><ShoppingCart sx={{ color: '#6750a4' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Orders</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 4,
                bgcolor: '#d0e8ff',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('material-3', 'routes')}
                sx={{ p: 2.5 }}
              >
                <Avatar sx={{ bgcolor: '#0061a4', mr: 2 }}>
                  <Route />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#1c1b1f">Routes</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Route planning</Typography>}
                />
                {expandedItems['material-3']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['material-3']?.['routes']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#0061a420' }}>
                  <ListItemButton sx={{ borderRadius: 3, mb: 0.5 }}>
                    <ListItemIcon><Map sx={{ color: '#0061a4' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Map View</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 3 }}>
                    <ListItemIcon><Schedule sx={{ color: '#0061a4' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Scheduled</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                mb: 1.5,
                borderRadius: 4,
                bgcolor: '#ffddb3',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('material-3', 'delivery')}
                sx={{ p: 2.5 }}
              >
                <Avatar sx={{ bgcolor: '#8d4e00', mr: 2 }}>
                  <LocalShipping />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#1c1b1f">Delivery Persons</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Fleet management</Typography>}
                />
                {expandedItems['material-3']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['material-3']?.['delivery']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#8d4e0020' }}>
                  <ListItemButton sx={{ borderRadius: 3, mb: 0.5 }}>
                    <ListItemIcon><DirectionsCar sx={{ color: '#8d4e00' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Active Drivers</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 3 }}>
                    <ListItemIcon><Assessment sx={{ color: '#8d4e00' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Stats</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                borderRadius: 4,
                bgcolor: '#b3f5d1',
                overflow: 'hidden'
              }}
            >
              <ListItemButton 
                onClick={() => handleExpandClick('material-3', 'products')}
                sx={{ p: 2.5 }}
              >
                <Avatar sx={{ bgcolor: '#006e26', mr: 2 }}>
                  <Inventory />
                </Avatar>
                <ListItemText 
                  primary={<Typography fontWeight="600" color="#1c1b1f">Products</Typography>}
                  secondary={<Typography variant="caption" color="text.secondary">Inventory system</Typography>}
                />
                {expandedItems['material-3']?.['products'] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expandedItems['material-3']?.['products']} timeout="auto" unmountOnExit>
                <Box sx={{ p: 1.5, bgcolor: '#006e2620' }}>
                  <ListItemButton sx={{ borderRadius: 3, mb: 0.5 }}>
                    <ListItemIcon><Category sx={{ color: '#006e26' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Catalog</Typography>} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: 3 }}>
                    <ListItemIcon><TrendingUp sx={{ color: '#006e26' }} fontSize="small" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body2">Best Sellers</Typography>} />
                  </ListItemButton>
                </Box>
              </Collapse>
            </Paper>
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
