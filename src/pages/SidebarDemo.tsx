import { useState } from 'react';
import {
  Box,
  List,
  ListItem,
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
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart,
  ExpandLess,
  ExpandMore,
  LocalShipping,
  Route,
  Person,
  History,
  Analytics,
  Payment,
  Star,
  RateReview,
  Support,
  Security,
  AccountCircle,
  LocationOn,
  Schedule,
  Assignment,
  AttachMoney,
  Inventory,
  TrendingUp,
  Group,
  DirectionsCar,
  Map,
  Assessment,
  Folder,
  Add,
  Notifications,
  Dashboard,
  Settings,
} from '@mui/icons-material';

const SidebarDemo = () => {
  const [openDrawer, setOpenDrawer] = useState<number | null>(null);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: { [key: string]: boolean } }>({});

  const handleDrawerToggle = (index: number) => {
    setOpenDrawer(openDrawer === index ? null : index);
  };

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
      title: "1. Consumer Dashboard Pro",
      id: "consumer-pro",
      content: (
        <Box sx={{ width: 280 }}>
          <Box sx={{ p: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: 'white', color: 'primary.main' }}>
              <Person />
            </Avatar>
            <Typography variant="h6">John Consumer</Typography>
            <Chip label="Premium" size="small" sx={{ mt: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('consumer-pro', 'orders')}>
              <ListItemIcon><ShoppingCart sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="My Orders" />
              {expandedItems['consumer-pro']?.['orders'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-pro']?.['orders']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Active Orders" secondary="3 in progress" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText primary="Order History" />
                </ListItemButton>
              </List>
            </Collapse>
            
            <ListItemButton onClick={() => handleExpandClick('consumer-pro', 'tracking')}>
              <ListItemIcon><LocationOn sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Live Tracking" />
              {expandedItems['consumer-pro']?.['tracking'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-pro']?.['tracking']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Track Delivery" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><DirectionsCar /></ListItemIcon>
                  <ListItemText primary="Driver Location" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-pro', 'account')}>
              <ListItemIcon><AccountCircle /></ListItemIcon>
              <ListItemText primary="Account" />
              {expandedItems['consumer-pro']?.['account'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-pro']?.['account']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Payment /></ListItemIcon>
                  <ListItemText primary="Payment Methods" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Star /></ListItemIcon>
                  <ListItemText primary="Favorites" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Support /></ListItemIcon>
                  <ListItemText primary="Support" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "2. Delivery Person Elite",
      id: "driver-elite",
      content: (
        <Box sx={{ width: 280 }}>
          <Box sx={{ p: 3, bgcolor: 'success.main', color: 'white' }}>
            <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: 'white', color: 'success.main' }}>
              <LocalShipping />
            </Avatar>
            <Typography variant="h6">Driver Mike</Typography>
            <Typography variant="caption">5.0 ★ Rating • 1,234 deliveries</Typography>
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('driver-elite', 'deliveries')}>
              <ListItemIcon><Assignment sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Deliveries" />
              <Badge badgeContent={5} color="error" />
              {expandedItems['driver-elite']?.['deliveries'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-elite']?.['deliveries']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Add /></ListItemIcon>
                  <ListItemText primary="New Assignments" secondary="5 pending" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Active Routes" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText primary="Completed" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('driver-elite', 'navigation')}>
              <ListItemIcon><Map sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Navigation" />
              {expandedItems['driver-elite']?.['navigation'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-elite']?.['navigation']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Route /></ListItemIcon>
                  <ListItemText primary="Optimize Route" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><LocationOn /></ListItemIcon>
                  <ListItemText primary="Current Location" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('driver-elite', 'earnings')}>
              <ListItemIcon><AttachMoney sx={{ color: 'warning.main' }} /></ListItemIcon>
              <ListItemText primary="Earnings" />
              {expandedItems['driver-elite']?.['earnings'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-elite']?.['earnings']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Daily Stats" secondary="$234 today" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Payment /></ListItemIcon>
                  <ListItemText primary="Payouts" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "3. Route Manager Advanced",
      id: "route-manager",
      content: (
        <Box sx={{ width: 280 }}>
          <Box sx={{ p: 3, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <Typography variant="h5" fontWeight="bold">Route Control</Typography>
            <Typography variant="caption">Admin Panel</Typography>
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('route-manager', 'routes')}>
              <ListItemIcon><Route sx={{ color: 'error.main' }} /></ListItemIcon>
              <ListItemText primary="Routes" />
              {expandedItems['route-manager']?.['routes'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-manager']?.['routes']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Add /></ListItemIcon>
                  <ListItemText primary="Create Route" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Active Routes" secondary="12 active" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Folder /></ListItemIcon>
                  <ListItemText primary="Route Areas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText primary="History" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('route-manager', 'fleet')}>
              <ListItemIcon><LocalShipping sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Fleet Management" />
              {expandedItems['route-manager']?.['fleet'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-manager']?.['fleet']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><DirectionsCar /></ListItemIcon>
                  <ListItemText primary="Vehicles" secondary="24 active" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Group /></ListItemIcon>
                  <ListItemText primary="Drivers" secondary="18 online" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Live Map" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('route-manager', 'analytics')}>
              <ListItemIcon><Analytics sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Analytics" />
              {expandedItems['route-manager']?.['analytics'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-manager']?.['analytics']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Assessment /></ListItemIcon>
                  <ListItemText primary="Performance" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Statistics" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "4. Consumer Luxury",
      id: "consumer-luxury",
      content: (
        <Box sx={{ width: 280 }}>
          <Paper elevation={3} sx={{ p: 3, m: 2, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Avatar sx={{ width: 64, height: 64, mb: 2, bgcolor: 'white', color: 'primary.main' }}>JD</Avatar>
            <Typography variant="h6">Jane Doe</Typography>
            <Typography variant="caption">Premium Member</Typography>
            <Chip label="VIP" size="small" sx={{ mt: 1, bgcolor: 'gold', color: 'black', fontWeight: 'bold' }} />
          </Paper>
          <List>
            <ListItemButton onClick={() => handleExpandClick('consumer-luxury', 'shopping')}>
              <ListItemIcon><ShoppingCart sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Shopping" />
              {expandedItems['consumer-luxury']?.['shopping'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-luxury']?.['shopping']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Star /></ListItemIcon>
                  <ListItemText primary="Premium Products" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Inventory /></ListItemIcon>
                  <ListItemText primary="My Cart" secondary="3 items" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-luxury', 'concierge')}>
              <ListItemIcon><Support sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Concierge Service" />
              {expandedItems['consumer-luxury']?.['concierge'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-luxury']?.['concierge']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Person /></ListItemIcon>
                  <ListItemText primary="Personal Assistant" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Priority Delivery" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-luxury', 'rewards')}>
              <ListItemIcon><Star sx={{ color: 'warning.main' }} /></ListItemIcon>
              <ListItemText primary="Rewards & Benefits" />
              {expandedItems['consumer-luxury']?.['rewards'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-luxury']?.['rewards']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Points: 12,450" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><RateReview /></ListItemIcon>
                  <ListItemText primary="Exclusive Offers" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "5. Driver Performance Pro",
      id: "driver-performance",
      content: (
        <Box sx={{ width: 280, bgcolor: '#1e293b', color: 'white', height: '100%' }}>
          <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'success.main' }}>DM</Avatar>
              <Box>
                <Typography variant="subtitle1">Driver Mike</Typography>
                <Chip label="Online" size="small" sx={{ bgcolor: 'success.main', color: 'white' }} />
              </Box>
            </Box>
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('driver-performance', 'metrics')}>
              <ListItemIcon sx={{ color: 'white' }}><Assessment /></ListItemIcon>
              <ListItemText primary="Performance" />
              {expandedItems['driver-performance']?.['metrics'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-performance']?.['metrics']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><Star /></ListItemIcon>
                  <ListItemText primary="Rating: 4.9/5.0" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Efficiency Score" secondary="95%" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><Schedule /></ListItemIcon>
                  <ListItemText primary="On-Time Rate" secondary="98%" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('driver-performance', 'tasks')}>
              <ListItemIcon sx={{ color: 'white' }}><Assignment /></ListItemIcon>
              <ListItemText primary="Tasks" />
              <Badge badgeContent={8} color="error" />
              {expandedItems['driver-performance']?.['tasks'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-performance']?.['tasks']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><Schedule /></ListItemIcon>
                  <ListItemText primary="Today's Routes" secondary="8 pending" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><History /></ListItemIcon>
                  <ListItemText primary="Completed Today" secondary="12 done" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('driver-performance', 'training')}>
              <ListItemIcon sx={{ color: 'white' }}><Star /></ListItemIcon>
              <ListItemText primary="Training & Badges" />
              {expandedItems['driver-performance']?.['training'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-performance']?.['training']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'gold' }}><Star /></ListItemIcon>
                  <ListItemText primary="Pro Driver Badge" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><Security /></ListItemIcon>
                  <ListItemText primary="Safety Certified" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "6. Route Optimizer Executive",
      id: "route-executive",
      content: (
        <Box sx={{ width: 300 }}>
          <Paper elevation={2} sx={{ m: 2, p: 2, background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white' }}>
            <Typography variant="h5" fontWeight="bold">Route HQ</Typography>
            <Typography variant="caption">Enterprise Dashboard</Typography>
          </Paper>
          <List>
            <ListItemButton onClick={() => handleExpandClick('route-executive', 'operations')}>
              <ListItemIcon><Dashboard sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Operations" />
              {expandedItems['route-executive']?.['operations'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-executive']?.['operations']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Assessment /></ListItemIcon>
                  <ListItemText primary="Live Dashboard" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Fleet View" secondary="24 active vehicles" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Analytics /></ListItemIcon>
                  <ListItemText primary="Real-time Analytics" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('route-executive', 'planning')}>
              <ListItemIcon><Route sx={{ color: 'error.main' }} /></ListItemIcon>
              <ListItemText primary="Route Planning" />
              {expandedItems['route-executive']?.['planning'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-executive']?.['planning']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Add /></ListItemIcon>
                  <ListItemText primary="AI Route Optimizer" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Schedule Manager" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><LocationOn /></ListItemIcon>
                  <ListItemText primary="Zone Management" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('route-executive', 'team')}>
              <ListItemIcon><Group sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Team Management" />
              {expandedItems['route-executive']?.['team'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-executive']?.['team']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Group /></ListItemIcon>
                  <ListItemText primary="Driver Management" secondary="18 drivers" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Assessment /></ListItemIcon>
                  <ListItemText primary="Performance Review" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "7. Consumer Smart Hub",
      id: "consumer-hub",
      content: (
        <Box sx={{ width: 280, bgcolor: '#f8f9fa' }}>
          <Box sx={{ p: 3, bgcolor: 'white', borderBottom: '2px solid #e9ecef' }}>
            <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: 'info.main' }}>CS</Avatar>
            <Typography variant="h6">Smart Shopper</Typography>
            <Chip label="Connected" size="small" color="success" sx={{ mt: 1 }} />
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('consumer-hub', 'shopping')}>
              <ListItemIcon><ShoppingCart sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Smart Shopping" />
              {expandedItems['consumer-hub']?.['shopping'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-hub']?.['shopping']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Star /></ListItemIcon>
                  <ListItemText primary="Recommended" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText primary="Buy Again" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Trending Now" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-hub', 'delivery')}>
              <ListItemIcon><LocalShipping sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Delivery Options" />
              {expandedItems['consumer-hub']?.['delivery'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-hub']?.['delivery']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Schedule Delivery" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><LocationOn /></ListItemIcon>
                  <ListItemText primary="Track Order" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Saved Addresses" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-hub', 'preferences')}>
              <ListItemIcon><Settings sx={{ color: 'warning.main' }} /></ListItemIcon>
              <ListItemText primary="Preferences" />
              {expandedItems['consumer-hub']?.['preferences'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-hub']?.['preferences']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Notifications /></ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Payment /></ListItemIcon>
                  <ListItemText primary="Payment Settings" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "8. Driver Gamification",
      id: "driver-game",
      content: (
        <Box sx={{ width: 280, background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)', color: 'white', height: '100%' }}>
          <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar sx={{ width: 64, height: 64, bgcolor: 'gold', color: 'black', fontSize: '1.5rem', fontWeight: 'bold' }}>
                DG
              </Avatar>
              <Box>
                <Typography variant="h6">Driver Gold</Typography>
                <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                  <Star sx={{ color: 'gold', fontSize: 16 }} />
                  <Star sx={{ color: 'gold', fontSize: 16 }} />
                  <Star sx={{ color: 'gold', fontSize: 16 }} />
                </Box>
              </Box>
            </Box>
            <Paper sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
              <Typography variant="caption" color="white">Level 12 - Elite Driver</Typography>
              <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="white">XP: 8,450</Typography>
                <Typography variant="body2" color="white">Next: 10,000</Typography>
              </Box>
            </Paper>
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('driver-game', 'challenges')}>
              <ListItemIcon sx={{ color: 'white' }}><Star /></ListItemIcon>
              <ListItemText primary="Daily Challenges" />
              {expandedItems['driver-game']?.['challenges'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-game']?.['challenges']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'gold' }}><Star /></ListItemIcon>
                  <ListItemText primary="Speed Demon" secondary="Complete 20 deliveries" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Perfect Week" secondary="7 days streak" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('driver-game', 'achievements')}>
              <ListItemIcon sx={{ color: 'white' }}><Star /></ListItemIcon>
              <ListItemText primary="Achievements" />
              <Badge badgeContent={3} color="error" />
              {expandedItems['driver-game']?.['achievements'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-game']?.['achievements']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'gold' }}><Star /></ListItemIcon>
                  <ListItemText primary="1000 Deliveries" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'silver' }}><Star /></ListItemIcon>
                  <ListItemText primary="5-Star Rating" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('driver-game', 'leaderboard')}>
              <ListItemIcon sx={{ color: 'white' }}><TrendingUp /></ListItemIcon>
              <ListItemText primary="Leaderboard" />
              {expandedItems['driver-game']?.['leaderboard'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['driver-game']?.['leaderboard']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'gold' }}><Star /></ListItemIcon>
                  <ListItemText primary="Weekly Rank: #5" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'white' }}><Group /></ListItemIcon>
                  <ListItemText primary="Team Standing" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "9. Route Analytics Premium",
      id: "route-analytics",
      content: (
        <Box sx={{ width: 300, bgcolor: 'white' }}>
          <Paper elevation={3} sx={{ m: 2, p: 3, background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
            <Typography variant="h5" fontWeight="bold">Analytics</Typography>
            <Typography variant="caption">Business Intelligence</Typography>
          </Paper>
          <List>
            <ListItemButton onClick={() => handleExpandClick('route-analytics', 'realtime')}>
              <ListItemIcon><TrendingUp sx={{ color: 'success.main' }} /></ListItemIcon>
              <ListItemText primary="Real-time Metrics" />
              {expandedItems['route-analytics']?.['realtime'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-analytics']?.['realtime']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Assessment /></ListItemIcon>
                  <ListItemText primary="Live Dashboard" secondary="24 active routes" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><DirectionsCar /></ListItemIcon>
                  <ListItemText primary="Fleet Status" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Heat Map" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('route-analytics', 'reports')}>
              <ListItemIcon><Analytics sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Reports" />
              {expandedItems['route-analytics']?.['reports'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-analytics']?.['reports']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="Daily Reports" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><TrendingUp /></ListItemIcon>
                  <ListItemText primary="Performance Trends" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><AttachMoney /></ListItemIcon>
                  <ListItemText primary="Cost Analysis" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('route-analytics', 'optimization')}>
              <ListItemIcon><Route sx={{ color: 'warning.main' }} /></ListItemIcon>
              <ListItemText primary="Optimization" />
              {expandedItems['route-analytics']?.['optimization'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['route-analytics']?.['optimization']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Assessment /></ListItemIcon>
                  <ListItemText primary="AI Suggestions" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><LocationOn /></ListItemIcon>
                  <ListItemText primary="Zone Efficiency" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      ),
    },
    {
      title: "10. Consumer Express",
      id: "consumer-express",
      content: (
        <Box sx={{ width: 280, bgcolor: '#fef3c7' }}>
          <Box sx={{ p: 3, bgcolor: '#fbbf24', color: 'black' }}>
            <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: 'white', color: 'warning.main' }}>
              <ShoppingCart />
            </Avatar>
            <Typography variant="h6" fontWeight="bold">Quick Order</Typography>
            <Chip label="Express Member" size="small" sx={{ mt: 1, bgcolor: 'white', fontWeight: 'bold' }} />
          </Box>
          <List>
            <ListItemButton onClick={() => handleExpandClick('consumer-express', 'express')}>
              <ListItemIcon><LocalShipping sx={{ color: 'warning.main' }} /></ListItemIcon>
              <ListItemText primary="Express Delivery" />
              {expandedItems['consumer-express']?.['express'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-express']?.['express']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Schedule /></ListItemIcon>
                  <ListItemText primary="30-Min Delivery" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Star /></ListItemIcon>
                  <ListItemText primary="Priority Orders" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-express', 'quick')}>
              <ListItemIcon><ShoppingCart sx={{ color: 'primary.main' }} /></ListItemIcon>
              <ListItemText primary="Quick Reorder" />
              {expandedItems['consumer-express']?.['quick'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-express']?.['quick']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText primary="Recent Orders" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Star /></ListItemIcon>
                  <ListItemText primary="Saved Lists" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => handleExpandClick('consumer-express', 'live')}>
              <ListItemIcon><LocationOn sx={{ color: 'error.main' }} /></ListItemIcon>
              <ListItemText primary="Live Updates" />
              {expandedItems['consumer-express']?.['live'] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expandedItems['consumer-express']?.['live']} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Map /></ListItemIcon>
                  <ListItemText primary="Track Live" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><Notifications /></ListItemIcon>
                  <ListItemText primary="Notifications" />
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
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Premium Sidebar Navigation Demos
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          10 Premium profiles with expandable groups for Consumers, Routes, and Delivery Persons
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        {sidebars.map((sidebar, index) => (
          <Paper key={index} elevation={3} sx={{ overflow: 'hidden' }}>
            <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold">{sidebar.title}</Typography>
              <IconButton
                onClick={() => handleDrawerToggle(index)}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ height: 400, overflow: 'auto', bgcolor: 'grey.50' }}>
              {sidebar.content}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default SidebarDemo;