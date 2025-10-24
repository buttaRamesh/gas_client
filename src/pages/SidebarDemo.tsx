import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Divider,
  Collapse,
  Chip,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Route as RouteIcon,
  BarChart as BarChartIcon,
  History as HistoryIcon,
  Add as AddIcon,
  LocationOn as LocationIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const drawerWidth = 280;

const menuItems = [
  { 
    text: "Dashboard", 
    icon: <DashboardIcon />, 
    path: "/",
    badge: null,
  },
  { 
    text: "Routes Management", 
    icon: <RouteIcon />, 
    path: "/routes",
    badge: "12",
  },
  { 
    text: "Statistics", 
    icon: <BarChartIcon />, 
    path: "/routes/statistics",
    badge: null,
  },
  { 
    text: "History", 
    icon: <HistoryIcon />, 
    path: "/routes/history",
    badge: "New",
  },
  { 
    text: "Create Route", 
    icon: <AddIcon />, 
    path: "/routes/new",
    badge: null,
  },
  { 
    text: "Route Areas", 
    icon: <LocationIcon />, 
    path: "/route-areas",
    badge: null,
  },
];

const secondaryItems = [
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Profile", icon: <PersonIcon />, path: "/profile" },
  { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
];

export default function SidebarDemo() {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [expandedSection, setExpandedSection] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const toggleSection = () => {
    setExpandedSection(!expandedSection);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 72,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 72,
            boxSizing: "border-box",
            bgcolor: "primary.main",
            color: "white",
            borderRight: "none",
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            overflowX: "hidden",
            boxShadow: "4px 0 12px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            p: 2,
            minHeight: 64,
          }}
        >
          {open && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "white",
                letterSpacing: 0.5,
              }}
            >
              Route Manager
            </Typography>
          )}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: "white",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Main Navigation */}
        <List sx={{ px: 1, py: 2 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={toggleSection}
              sx={{
                borderRadius: 2,
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                <RouteIcon />
              </ListItemIcon>
              {open && (
                <>
                  <ListItemText primary="Routes" />
                  {expandedSection ? <ExpandLess /> : <ExpandMore />}
                </>
              )}
            </ListItemButton>
          </ListItem>

          <Collapse in={expandedSection && open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              {menuItems.map((item, index) => (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                    sx={{
                      borderRadius: 2,
                      color: "white",
                      "&.Mui-selected": {
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.25)",
                        },
                      },
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && (
                      <ListItemText 
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: "0.875rem",
                          fontWeight: selectedIndex === index ? 600 : 400,
                        }}
                      />
                    )}
                    {open && item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          height: 20,
                          bgcolor: "secondary.main",
                          color: "white",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {!open && menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                sx={{
                  borderRadius: 2,
                  color: "white",
                  justifyContent: "center",
                  "&.Mui-selected": {
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.25)",
                    },
                  },
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 0 }}>
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Navigation */}
        <List sx={{ px: 1, py: 2 }}>
          {secondaryItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  color: "white",
                  justifyContent: open ? "flex-start" : "center",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : 0 }}>
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "grey.100",
          p: 3,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            Sidebar Navigation Demo
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
              Features Demonstrated:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronLeftIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Collapsible Sidebar"
                  secondary="Click the toggle button to collapse/expand the sidebar"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RouteIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Grouped Navigation"
                  secondary="Routes section with expandable sub-menu items"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DashboardIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Active State Highlighting"
                  secondary="Selected menu items are visually highlighted"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BarChartIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Badge Indicators"
                  secondary="Show counts or status badges on menu items"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SettingsIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Bottom Sticky Items"
                  secondary="Settings, Profile, and Logout always accessible at bottom"
                />
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              p: 4,
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
              Instructions:
            </Typography>
            <Typography variant="body1" paragraph>
              1. Click the menu icon to toggle between expanded and collapsed sidebar
            </Typography>
            <Typography variant="body1" paragraph>
              2. Try clicking different menu items to see the active state
            </Typography>
            <Typography variant="body1" paragraph>
              3. Expand/collapse the Routes section to see grouped navigation
            </Typography>
            <Typography variant="body1" paragraph>
              4. Notice how badges appear next to menu items in the expanded state
            </Typography>
            <Typography variant="body1" sx={{ mt: 3, fontWeight: 600, color: "success.main" }}>
              ✓ This sidebar can be integrated into your Routes page and other pages
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
