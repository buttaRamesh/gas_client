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
} from '@mui/icons-material';

interface AppSidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function AppSidebar({ collapsed = false, onToggleCollapse }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
    routes: true,
    routeAreas: true,
  });

  const handleExpandClick = (item: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const isActive = (path: string) => location.pathname === path;
  const isRouteActive = () => location.pathname.startsWith('/routes');
  const isRouteAreaActive = () => location.pathname.startsWith('/route-areas');

  return (
    <Box sx={{ 
      width: collapsed ? 80 : 280, 
      height: '100vh', 
      bgcolor: '#1c1917',
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
        bgcolor: '#fbbf24',
        borderRadius: '4px',
      },
    }}>
      <Box sx={{ 
        p: 3,
        background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)',
        color: 'white',
        position: 'relative',
        borderBottom: '2px solid #d97706',
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
              EnergyPath
            </Typography>
            <Typography variant="caption" sx={{ color: '#fcd34d' }}>
              Gas Cylinder Management
            </Typography>
          </>
        )}
        {collapsed && (
          <Avatar sx={{ 
            width: 48, 
            height: 48,
            bgcolor: '#fbbf24',
            color: '#78350f',
            boxShadow: '0 4px 14px rgba(251,191,36,0.5)'
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
            bgcolor: 'rgba(251,191,36,0.1)',
            color: '#fbbf24',
            '&:hover': {
              bgcolor: 'rgba(251,191,36,0.2)',
            }
          }}
        >
          <MenuIcon />
        </ListItemButton>
      </Box>

      <List sx={{ p: 2 }}>
        <ListItemButton 
          onClick={() => handleExpandClick('routes')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isRouteActive() ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.1)',
            color: 'white',
            border: '1px solid rgba(251,191,36,0.3)',
            '&:hover': { 
              bgcolor: 'rgba(251,191,36,0.15)',
              boxShadow: '0 0 20px rgba(251,191,36,0.2)'
            }
          }}
        >
          <ListItemIcon>
            <LocalShipping sx={{ color: '#fbbf24' }} />
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
                  bgcolor: '#fbbf24',
                  color: '#78350f',
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
                  color: 'white',
                  bgcolor: isActive('/routes') ? 'rgba(251,191,36,0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: '#fcd34d' }}><Route fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">All Routes</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/routes/new')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'white',
                  bgcolor: isActive('/routes/new') ? 'rgba(251,191,36,0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: '#fcd34d' }}><Add fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Create Route</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/routes/statistics')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'white',
                  bgcolor: isActive('/routes/statistics') ? 'rgba(251,191,36,0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: '#fcd34d' }}><BarChart fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Statistics</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/routes/history')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'white',
                  bgcolor: isActive('/routes/history') ? 'rgba(251,191,36,0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: '#fcd34d' }}><History fontSize="small" /></ListItemIcon>
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
            bgcolor: isRouteAreaActive() ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.1)',
            color: 'white',
            border: '1px solid rgba(251,191,36,0.3)',
            '&:hover': { 
              bgcolor: 'rgba(251,191,36,0.15)',
              boxShadow: '0 0 20px rgba(251,191,36,0.2)'
            }
          }}
        >
          <ListItemIcon><LocationOn sx={{ color: '#fbbf24' }} /></ListItemIcon>
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
                  color: 'white',
                  bgcolor: isActive('/route-areas') ? 'rgba(251,191,36,0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: '#fcd34d' }}><Map fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">All Route Areas</Typography>} />
              </ListItemButton>
              <ListItemButton 
                onClick={() => navigate('/route-areas/new')}
                sx={{ 
                  pl: 4, 
                  borderRadius: 1.5, 
                  color: 'white',
                  bgcolor: isActive('/route-areas/new') ? 'rgba(251,191,36,0.1)' : 'transparent',
                  '&:hover': { bgcolor: 'rgba(251,191,36,0.1)' } 
                }}
              >
                <ListItemIcon sx={{ color: '#fcd34d' }}><Add fontSize="small" /></ListItemIcon>
                <ListItemText primary={<Typography variant="body2">Create Route Area</Typography>} />
              </ListItemButton>
            </List>
          </Collapse>
        )}

        <ListItemButton 
          onClick={() => navigate('/settings')}
          sx={{ 
            mb: 1.5,
            borderRadius: 2,
            bgcolor: isActive('/settings') ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.1)',
            color: 'white',
            border: '1px solid rgba(251,191,36,0.3)',
            '&:hover': { 
              bgcolor: 'rgba(251,191,36,0.15)',
              boxShadow: '0 0 20px rgba(251,191,36,0.2)'
            }
          }}
        >
          <ListItemIcon><Settings sx={{ color: '#fbbf24' }} /></ListItemIcon>
          {!collapsed && <ListItemText primary={<Typography fontWeight="600">Settings</Typography>} />}
        </ListItemButton>

        {!collapsed && (
          <>
            <Box sx={{ my: 2, px: 2 }}>
              <Typography variant="caption" sx={{ color: '#fcd34d', opacity: 0.7 }}>
                DEMO PAGES
              </Typography>
            </Box>

            <ListItemButton 
              onClick={() => navigate('/demo')}
              sx={{ 
                mb: 1,
                borderRadius: 2,
                bgcolor: isActive('/demo') ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.05)',
                color: 'white',
                border: '1px solid rgba(251,191,36,0.2)',
                '&:hover': { 
                  bgcolor: 'rgba(251,191,36,0.1)',
                }
              }}
            >
              <ListItemIcon><ViewModule sx={{ color: '#fbbf24' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="500">Layout Demo</Typography>} />
            </ListItemButton>

            <ListItemButton 
              onClick={() => navigate('/sidebar-demo')}
              sx={{ 
                borderRadius: 2,
                bgcolor: isActive('/sidebar-demo') ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.05)',
                color: 'white',
                border: '1px solid rgba(251,191,36,0.2)',
                '&:hover': { 
                  bgcolor: 'rgba(251,191,36,0.1)',
                }
              }}
            >
              <ListItemIcon><Map sx={{ color: '#fbbf24' }} /></ListItemIcon>
              <ListItemText primary={<Typography fontWeight="500">Sidebar Demo</Typography>} />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
}