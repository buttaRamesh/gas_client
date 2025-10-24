import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Home,
  LocalShipping,
  ExpandLess,
  ExpandMore,
  Route,
  LocationOn,
  Settings,
  BarChart,
  History,
  Add,
  Map,
  ViewModule,
  Menu as MenuIcon,
  Storefront,
  Person,
  Group,
} from '@mui/icons-material';

interface AppSidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function AppSidebar({ collapsed = false, onToggleCollapse }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>(() => ({
    routes: location.pathname.startsWith('/routes'),
    routeAreas: location.pathname.startsWith('/route-areas'),
    deliveryPersons: location.pathname.startsWith('/delivery-persons'),
  }));

  const handleExpandClick = (item: string) => {
    setExpandedItems(prev => {
      const isCurrentlyExpanded = prev[item];
      // Close all groups and only open the clicked one
      return {
        routes: item === 'routes' && !isCurrentlyExpanded,
        routeAreas: item === 'routeAreas' && !isCurrentlyExpanded,
        deliveryPersons: item === 'deliveryPersons' && !isCurrentlyExpanded,
      };
    });
  };

  const isActive = (path: string) => location.pathname === path;
  const isRouteActive = () => location.pathname.startsWith('/routes');
  const isRouteAreaActive = () => location.pathname.startsWith('/route-areas');
  const isDeliveryPersonActive = () => location.pathname.startsWith('/delivery-persons');

  return (
    <Box sx={{ 
      width: collapsed ? 80 : 280, 
      height: '100vh', 
      bgcolor: 'hsl(var(--sidebar-background))',
      position: 'fixed',
      left: 0,
      top: 0,
      transition: 'width 0.3s ease',
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: 1200,
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        bgcolor: 'rgba(0,0,0,0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        bgcolor: 'hsl(var(--sidebar-primary))',
        borderRadius: '4px',
      },
    }}>
      <Box sx={{ 
        p: 3,
        background: 'linear-gradient(135deg, hsl(var(--sidebar-accent)) 0%, hsl(var(--sidebar-background)) 100%)',
        color: 'hsl(var(--sidebar-foreground))',
        position: 'relative',
        borderBottom: '2px solid hsl(var(--sidebar-primary))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: collapsed ? 'center' : 'flex-start',
      }}>
        {!collapsed && (
          <>
            <Avatar sx={{ 
              width: 60, 
              height: 60, 
              mb: 2,
              bgcolor: 'hsl(var(--sidebar-primary))',
              color: 'hsl(var(--sidebar-primary-foreground))',
              boxShadow: '0 4px 14px hsla(var(--sidebar-primary), 0.5)'
            }}>
              <Storefront sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h5" fontWeight="800" sx={{ 
              background: 'linear-gradient(135deg, hsl(var(--sidebar-primary)) 0%, hsl(var(--primary-light)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 0.5
            }}>
              UKB Gas Agency
            </Typography>
            <Typography variant="caption" sx={{ color: 'hsl(var(--primary-light))' }}>
              Gas Cylinder Management
            </Typography>
          </>
        )}
        {collapsed && (
          <Avatar sx={{ 
            width: 48, 
            height: 48,
            bgcolor: 'hsl(var(--sidebar-primary))',
            color: 'hsl(var(--sidebar-primary-foreground))',
            boxShadow: '0 4px 14px hsla(var(--sidebar-primary), 0.5)'
          }}>
            <Storefront sx={{ fontSize: 28 }} />
          </Avatar>
        )}
      </Box>

      <Box sx={{ 
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
      }}>
        <ListItemButton
          onClick={onToggleCollapse}
          sx={{
            minHeight: 40,
            width: 40,
            borderRadius: 1,
            bgcolor: 'hsla(var(--sidebar-primary), 0.1)',
            color: 'hsl(var(--sidebar-primary))',
            '&:hover': {
              bgcolor: 'hsla(var(--sidebar-primary), 0.2)',
            }
          }}
        >
          <MenuIcon />
        </ListItemButton>
      </Box>

      <List sx={{ p: 2 }}>
        <ListItemButton 
          onClick={() => navigate('/')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isActive('/') ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.1)',
            color: 'hsl(var(--sidebar-foreground))',
            border: '1px solid hsla(var(--sidebar-primary), 0.3)',
            '&:hover': { 
              bgcolor: 'hsla(var(--sidebar-primary), 0.15)',
              boxShadow: '0 0 20px hsla(var(--sidebar-primary), 0.2)'
            }
          }}
        >
          <ListItemIcon><Home sx={{ color: 'hsl(var(--sidebar-primary))' }} /></ListItemIcon>
          {!collapsed && <ListItemText primary={<Typography fontWeight="600">Dashboard</Typography>} />}
        </ListItemButton>

        <ListItemButton 
          onClick={() => handleExpandClick('routes')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isRouteActive() ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.1)',
            color: 'hsl(var(--sidebar-foreground))',
            border: '1px solid hsla(var(--sidebar-primary), 0.3)',
            '&:hover': { 
              bgcolor: 'hsla(var(--sidebar-primary), 0.15)',
              boxShadow: '0 0 20px hsla(var(--sidebar-primary), 0.2)'
            }
          }}
        >
          <ListItemIcon>
            <LocalShipping sx={{ color: 'hsl(var(--sidebar-primary))' }} />
          </ListItemIcon>
          {!collapsed && (
            <>
              <ListItemText 
                primary={<Typography fontWeight="600">Routes</Typography>}
              />
              <Chip 
                label="Main" 
                size="small" 
                sx={{ 
                  bgcolor: 'hsl(var(--sidebar-primary))',
                  color: 'hsl(var(--sidebar-primary-foreground))',
                  fontWeight: 700,
                  fontSize: '0.7rem'
                }} 
              />
              {expandedItems['routes'] ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        {!collapsed && (
          <Collapse in={expandedItems['routes']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, mb: 1, p: 0.5 }}>
              <ListItemButton 
                onClick={() => navigate('/routes')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/routes') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><Route fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">All Routes</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/routes/new')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/routes/new') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><Add fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Create Route</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/routes/statistics')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/routes/statistics') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><BarChart fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Statistics</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/routes/history')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/routes/history') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><History fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">History</Typography>} />
              </ListItemButton>
            </List>
          </Collapse>
        )}

        <ListItemButton 
          onClick={() => handleExpandClick('routeAreas')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isRouteAreaActive() ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.1)',
            color: 'hsl(var(--sidebar-foreground))',
            border: '1px solid hsla(var(--sidebar-primary), 0.3)',
            '&:hover': { 
              bgcolor: 'hsla(var(--sidebar-primary), 0.15)',
              boxShadow: '0 0 20px hsla(var(--sidebar-primary), 0.2)'
            }
          }}
        >
          <ListItemIcon><LocationOn sx={{ color: 'hsl(var(--sidebar-primary))' }} /></ListItemIcon>
          {!collapsed && (
            <>
              <ListItemText primary={<Typography fontWeight="600">Route Areas</Typography>} />
              {expandedItems['routeAreas'] ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        {!collapsed && (
          <Collapse in={expandedItems['routeAreas']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, mb: 1, p: 0.5 }}>
              <ListItemButton 
                onClick={() => navigate('/route-areas')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/route-areas') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><Map fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">All Route Areas</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/route-areas/new')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/route-areas/new') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><Add fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Create Route Area</Typography>} />
              </ListItemButton>
            </List>
          </Collapse>
        )}

        <ListItemButton 
          onClick={() => handleExpandClick('deliveryPersons')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isDeliveryPersonActive() ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.1)',
            color: 'hsl(var(--sidebar-foreground))',
            border: '1px solid hsla(var(--sidebar-primary), 0.3)',
            '&:hover': { 
              bgcolor: 'hsla(var(--sidebar-primary), 0.15)',
              boxShadow: '0 0 20px hsla(var(--sidebar-primary), 0.2)'
            }
          }}
        >
          <ListItemIcon><Group sx={{ color: 'hsl(var(--sidebar-primary))' }} /></ListItemIcon>
          {!collapsed && (
            <>
              <ListItemText primary={<Typography fontWeight="600">Delivery Persons</Typography>} />
              {expandedItems['deliveryPersons'] ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemButton>
        {!collapsed && (
          <Collapse in={expandedItems['deliveryPersons']} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2, mb: 1, p: 0.5 }}>
              <ListItemButton 
                onClick={() => navigate('/delivery-persons')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/delivery-persons') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><Group fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">All Delivery Persons</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/delivery-persons/create')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'hsl(var(--sidebar-foreground))',
                  bgcolor: isActive('/delivery-persons/create') ? 'hsla(var(--sidebar-primary), 0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'hsla(var(--sidebar-primary), 0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: 'hsl(var(--primary-light))' }}><Add fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Add Delivery Person</Typography>} />
              </ListItemButton>
            </List>
          </Collapse>
        )}

        <ListItemButton 
          onClick={() => navigate('/settings')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isActive('/settings') ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.1)',
            color: 'hsl(var(--sidebar-foreground))',
            border: '1px solid hsla(var(--sidebar-primary), 0.3)',
            '&:hover': { 
              bgcolor: 'hsla(var(--sidebar-primary), 0.15)',
              boxShadow: '0 0 20px hsla(var(--sidebar-primary), 0.2)'
            }
          }}
        >
          <ListItemIcon><Settings sx={{ color: 'hsl(var(--sidebar-primary))' }} /></ListItemIcon>
          {!collapsed && <ListItemText primary={<Typography fontWeight="600">Settings</Typography>} />}
        </ListItemButton>

        {!collapsed && (
          <>
            <Box sx={{ my: 2, px: 2 }}>
              <Typography variant="caption" sx={{ color: 'hsl(var(--primary-light))', opacity: 0.7 }}>
                DEMO PAGES
              </Typography>
            </Box>

            <ListItemButton 
              onClick={() => navigate('/demo')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: isActive('/demo') ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.05)',
                color: 'hsl(var(--sidebar-foreground))',
                border: '1px solid hsla(var(--sidebar-primary), 0.2)',
                '&:hover': { 
                  bgcolor: 'hsla(var(--sidebar-primary), 0.1)',
                }
              }}
            >
              <ListItemIcon><ViewModule sx={{ color: 'hsl(var(--sidebar-primary))' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="500">Layout Demo</Typography>} />
            </ListItemButton>

            <ListItemButton 
              onClick={() => navigate('/sidebar-demo')}
              sx={{ 
                borderRadius: 2,
                bgcolor: isActive('/sidebar-demo') ? 'hsla(var(--sidebar-primary), 0.15)' : 'hsla(var(--sidebar-primary), 0.05)',
                color: 'hsl(var(--sidebar-foreground))',
                border: '1px solid hsla(var(--sidebar-primary), 0.2)',
                '&:hover': { 
                  bgcolor: 'hsla(var(--sidebar-primary), 0.1)',
                }
              }}
            >
              <ListItemIcon><Map sx={{ color: 'hsl(var(--sidebar-primary))' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="500">Sidebar Demo</Typography>} />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
}