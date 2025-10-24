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
  Paper,
  Avatar,
  Badge,
  Tooltip,
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
  Notifications as NotificationsIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  Circle as CircleIcon,
} from "@mui/icons-material";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, badge: null },
  { text: "Routes", icon: <RouteIcon />, badge: "12" },
  { text: "Statistics", icon: <BarChartIcon />, badge: null },
  { text: "History", icon: <HistoryIcon />, badge: "New" },
  { text: "Create", icon: <AddIcon />, badge: null },
  { text: "Areas", icon: <LocationIcon />, badge: "5" },
];

interface SidebarDemoProps {
  variant: number;
  title: string;
  description: string;
}

function SidebarVariant({ variant, title, description }: SidebarDemoProps) {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(1);
  const [expanded, setExpanded] = useState(true);
  const drawerWidth = variant === 10 ? 320 : variant === 9 ? 240 : 280;

  // Variant 1: Classic Primary Sidebar
  if (variant === 1) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              bgcolor: "primary.main",
              color: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {open && <Typography variant="h6" sx={{ fontWeight: 700 }}>RouteApp</Typography>}
              <IconButton size="small" onClick={() => setOpen(!open)} sx={{ color: "white" }}>
                {open ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
            <List sx={{ px: 1, flex: 1 }}>
              {menuItems.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      borderRadius: 2,
                      "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                      justifyContent: open ? "flex-start" : "center",
                    }}
                  >
                    <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.text} />}
                    {open && item.badge && (
                      <Chip label={item.badge} size="small" sx={{ height: 20, bgcolor: "secondary.main" }} />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.100" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 2: Gradient Sidebar with Icons
  if (variant === 2) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              background: "linear-gradient(180deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)",
              color: "white",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
            }}
          >
            <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "secondary.main", width: 40, height: 40 }}>RM</Avatar>
              {open && (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Route Manager</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>Admin Panel</Typography>
                </Box>
              )}
              <IconButton size="small" onClick={() => setOpen(!open)} sx={{ color: "white" }}>
                {open ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
            <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />
            <List sx={{ px: 1, flex: 1, py: 2 }}>
              {menuItems.map((item, idx) => (
                <Tooltip key={idx} title={!open ? item.text : ""} placement="right">
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      selected={selected === idx}
                      onClick={() => setSelected(idx)}
                      sx={{
                        borderRadius: 2,
                        minHeight: 48,
                        "&.Mui-selected": {
                          bgcolor: "rgba(255,255,255,0.25)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        },
                        "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
                        justifyContent: open ? "flex-start" : "center",
                      }}
                    >
                      <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : 0 }}>
                        {item.icon}
                      </ListItemIcon>
                      {open && <ListItemText primary={item.text} />}
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.100" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 3: Dark Modern Sidebar
  if (variant === 3) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              bgcolor: "#1a1a2e",
              color: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {open && (
                <Typography variant="h6" sx={{ fontWeight: 800, background: "linear-gradient(45deg, #00d4ff, #00ff88)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  ROUTES
                </Typography>
              )}
              <IconButton size="small" onClick={() => setOpen(!open)} sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}>
                <MenuIcon />
              </IconButton>
            </Box>
            <List sx={{ px: 1, flex: 1 }}>
              {menuItems.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      borderRadius: 2,
                      border: "1px solid transparent",
                      "&.Mui-selected": {
                        bgcolor: "rgba(0, 212, 255, 0.1)",
                        borderColor: "#00d4ff",
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                      },
                      "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
                      justifyContent: open ? "flex-start" : "center",
                    }}
                  >
                    <ListItemIcon sx={{ color: selected === idx ? "#00d4ff" : "white", minWidth: open ? 40 : 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.text} />}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "#f5f5f5" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 4: Light Minimal Sidebar
  if (variant === 4) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              bgcolor: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
              borderRight: "2px solid",
              borderColor: "grey.200",
            }}
          >
            <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {open && <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>Routes</Typography>}
              <IconButton size="small" onClick={() => setOpen(!open)} sx={{ color: "primary.main" }}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Divider />
            <List sx={{ px: 1, flex: 1, py: 2 }}>
              {menuItems.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      borderRadius: 3,
                      "&.Mui-selected": {
                        bgcolor: "primary.light",
                        color: "primary.main",
                        fontWeight: 600,
                      },
                      "&:hover": { bgcolor: "grey.100" },
                      justifyContent: open ? "flex-start" : "center",
                    }}
                  >
                    <ListItemIcon sx={{ color: selected === idx ? "primary.main" : "text.secondary", minWidth: open ? 40 : 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: selected === idx ? 600 : 400 }} />}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.50" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 5: Colorful Pills Sidebar
  if (variant === 5) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              bgcolor: "#f8f9fa",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid",
              borderColor: "grey.300",
            }}
          >
            <Box sx={{ p: 2 }}>
              {open && <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main", mb: 1 }}>Dashboard</Typography>}
              <IconButton size="small" onClick={() => setOpen(!open)} sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" } }}>
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>
            <List sx={{ px: 2, flex: 1 }}>
              {menuItems.map((item, idx) => {
                const colors = ["#e3f2fd", "#f3e5f5", "#e8f5e9", "#fff3e0", "#fce4ec", "#e0f2f1"];
                const textColors = ["#1976d2", "#7b1fa2", "#388e3c", "#f57c00", "#c2185b", "#00796b"];
                return (
                  <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      selected={selected === idx}
                      onClick={() => setSelected(idx)}
                      sx={{
                        borderRadius: 5,
                        bgcolor: selected === idx ? textColors[idx % 6] : colors[idx % 6],
                        color: selected === idx ? "white" : textColors[idx % 6],
                        "&:hover": { bgcolor: selected === idx ? textColors[idx % 6] : colors[idx % 6], opacity: 0.8 },
                        justifyContent: open ? "flex-start" : "center",
                        px: 2,
                      }}
                    >
                      <ListItemIcon sx={{ color: "inherit", minWidth: open ? 40 : 0 }}>
                        {item.icon}
                      </ListItemIcon>
                      {open && <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 600 }} />}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "white" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 6: Floating Sidebar
  if (variant === 6) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative", bgcolor: "grey.100" }}>
        <Box sx={{ display: "flex", height: "100%", p: 2 }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              bgcolor: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              mr: 2,
            }}
          >
            <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {open && <Typography variant="h6" sx={{ fontWeight: 700 }}>Menu</Typography>}
              <IconButton size="small" onClick={() => setOpen(!open)} sx={{ bgcolor: "primary.light" }}>
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>
            <List sx={{ px: 2, flex: 1 }}>
              {menuItems.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      borderRadius: 2,
                      "&.Mui-selected": {
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": { bgcolor: "primary.dark" },
                      },
                      justifyContent: open ? "flex-start" : "center",
                    }}
                  >
                    <ListItemIcon sx={{ color: selected === idx ? "white" : "text.secondary", minWidth: open ? 40 : 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.text} />}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, bgcolor: "white", borderRadius: 3, p: 2, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 7: Sidebar with Expandable Groups
  if (variant === 7) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? drawerWidth : 72,
              bgcolor: "primary.dark",
              color: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: 2 }}>
              <IconButton onClick={() => setOpen(!open)} sx={{ color: "white", float: "right" }}>
                <MenuIcon />
              </IconButton>
              {open && <Typography variant="h6" sx={{ fontWeight: 700, pt: 1 }}>Navigation</Typography>}
            </Box>
            <List sx={{ px: 1, flex: 1 }}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setExpanded(!expanded)} sx={{ borderRadius: 2 }}>
                  <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : 0 }}>
                    <RouteIcon />
                  </ListItemIcon>
                  {open && (
                    <>
                      <ListItemText primary="Routes" />
                      {expanded ? <ExpandLess /> : <ExpandMore />}
                    </>
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse in={expanded && open} timeout="auto">
                <List component="div" disablePadding sx={{ pl: 2 }}>
                  {menuItems.map((item, idx) => (
                    <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        selected={selected === idx}
                        onClick={() => setSelected(idx)}
                        sx={{
                          borderRadius: 2,
                          "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.2)" },
                        }}
                      >
                        <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                          <CircleIcon sx={{ fontSize: 8 }} />
                        </ListItemIcon>
                        <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "0.875rem" }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.100" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 8: Icon Bar with Tooltips
  if (variant === 8) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: 72,
              bgcolor: "#263238",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: 2,
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main", mb: 3, width: 48, height: 48 }}>R</Avatar>
            <List sx={{ width: "100%" }}>
              {menuItems.map((item, idx) => (
                <Tooltip key={idx} title={item.text} placement="right">
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      selected={selected === idx}
                      onClick={() => setSelected(idx)}
                      sx={{
                        justifyContent: "center",
                        py: 1.5,
                        borderLeft: selected === idx ? "4px solid" : "4px solid transparent",
                        borderColor: "secondary.main",
                        "&.Mui-selected": {
                          bgcolor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      <Badge badgeContent={item.badge} color="error">
                        <Box sx={{ color: selected === idx ? "secondary.main" : "white" }}>
                          {item.icon}
                        </Box>
                      </Badge>
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              ))}
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton sx={{ color: "white" }}>
              <SettingsIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.100" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 9: Compact Material Design
  if (variant === 9) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? 240 : 72,
              bgcolor: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={() => setOpen(!open)} size="small">
                <MenuIcon />
              </IconButton>
              {open && <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Routes Pro</Typography>}
            </Box>
            <Divider />
            <List dense sx={{ px: 1, flex: 1, py: 1 }}>
              {menuItems.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      borderRadius: 1,
                      minHeight: 40,
                      "&.Mui-selected": {
                        bgcolor: "action.selected",
                        borderLeft: "3px solid",
                        borderColor: "primary.main",
                      },
                      justifyContent: open ? "flex-start" : "center",
                    }}
                  >
                    <ListItemIcon sx={{ color: selected === idx ? "primary.main" : "action.active", minWidth: open ? 36 : 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && (
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{ fontSize: "0.875rem", fontWeight: selected === idx ? 600 : 400 }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.50" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Variant 10: Premium Sidebar with Profile
  if (variant === 10) {
    return (
      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", position: "relative" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              width: open ? 320 : 72,
              background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              transition: "width 0.3s",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={<Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "success.main", border: "2px solid white" }} />}
                >
                  <Avatar sx={{ width: 48, height: 48 }}>JD</Avatar>
                </Badge>
                {open && (
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>John Doe</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>john@routes.com</Typography>
                  </Box>
                )}
                <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
                  {open ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />
            <List sx={{ px: 2, flex: 1, py: 2 }}>
              {menuItems.map((item, idx) => (
                <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    selected={selected === idx}
                    onClick={() => setSelected(idx)}
                    sx={{
                      borderRadius: 2,
                      "&.Mui-selected": {
                        bgcolor: "rgba(255,255,255,0.25)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      },
                      "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
                      justifyContent: open ? "flex-start" : "center",
                    }}
                  >
                    <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : 0 }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && (
                      <>
                        <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: selected === idx ? 600 : 400 }} />
                        {item.badge && (
                          <Chip
                            label={item.badge}
                            size="small"
                            sx={{
                              height: 22,
                              bgcolor: "white",
                              color: "primary.main",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                            }}
                          />
                        )}
                      </>
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />
            <Box sx={{ p: 2 }}>
              <ListItemButton sx={{ borderRadius: 2, "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                <ListItemIcon sx={{ color: "white", minWidth: open ? 40 : 0 }}>
                  <SettingsIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Settings" />}
              </ListItemButton>
            </Box>
          </Box>
          <Box sx={{ flex: 1, p: 2, bgcolor: "grey.100" }}>
            <Typography variant="subtitle2" color="text.secondary">Preview Area</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }

  return null;
}

export default function SidebarDemo() {
  const demos = [
    { variant: 1, title: "Classic Primary", description: "Traditional sidebar with primary color theme and collapsible menu" },
    { variant: 2, title: "Gradient with Avatar", description: "Modern gradient background with user profile section" },
    { variant: 3, title: "Dark Modern", description: "Dark theme with neon accents and glow effects" },
    { variant: 4, title: "Light Minimal", description: "Clean white design with subtle hover states" },
    { variant: 5, title: "Colorful Pills", description: "Vibrant colored pill-shaped menu items" },
    { variant: 6, title: "Floating Cards", description: "Card-style floating sidebar with rounded corners" },
    { variant: 7, title: "Expandable Groups", description: "Collapsible menu groups with nested navigation" },
    { variant: 8, title: "Icon Bar", description: "Compact icon-only bar with tooltips and badges" },
    { variant: 9, title: "Material Compact", description: "Dense Material Design with left border indicators" },
    { variant: 10, title: "Premium Profile", description: "Rich sidebar with user profile and gradient background" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.50", py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: "primary.main" }}>
            10 Best Sidebar Navigation Examples
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: "auto" }}>
            Choose your favorite sidebar design. Each demo is fully interactive - try collapsing/expanding and clicking menu items.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          {demos.map((demo) => (
            <Box key={demo.variant}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                {demo.variant}. {demo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {demo.description}
              </Typography>
              <SidebarVariant variant={demo.variant} title={demo.title} description={demo.description} />
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 6, p: 4, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: "primary.main" }}>
            🎯 Which Style Works Best?
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>✨ Most Popular:</Typography>
              <Typography variant="body2" color="text.secondary">
                • #1 Classic Primary - Best for traditional apps<br />
                • #10 Premium Profile - Best for user-focused apps<br />
                • #2 Gradient Avatar - Best for modern SaaS
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>🚀 Best Features:</Typography>
              <Typography variant="body2" color="text.secondary">
                • #7 Expandable Groups - Best for complex navigation<br />
                • #8 Icon Bar - Best for space-saving<br />
                • #5 Colorful Pills - Best for visual appeal
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3, p: 2, bgcolor: "primary.light", borderRadius: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "primary.main" }}>
              💡 Next Step: Tell me which variant you prefer (1-10), and I'll integrate it into your Routes page!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
