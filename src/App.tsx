import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { AppLayout } from "./components/AppLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LayoutDemo from "./pages/LayoutDemo";
import RoutesPage from "./pages/Routes";
import RouteDetail from "./pages/RouteDetail";
import RouteEdit from "./pages/RouteEdit";
import RouteCreate from "./pages/RouteCreate";
import RouteAreas from "./pages/RouteAreas";
import RouteAreaCreate from "./pages/RouteAreaCreate";
import RouteStatistics from "./pages/RouteStatistics";
import RouteHistory from "./pages/RouteHistory";
import RouteCardColorDemo from "./pages/RouteCardColorDemo";
import Settings from "./pages/Settings";
import SidebarDemo from "./pages/SidebarDemo";
import DeliveryPersons from "./pages/DeliveryPersons";
import DeliveryPersonCreate from "./pages/DeliveryPersonCreate";
import DeliveryPersonDetail from "./pages/DeliveryPersonDetail";
import DeliveryPersonStatistics from "./pages/DeliveryPersonStatistics";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            {/* Main dashboard - full screen without sidebar */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Full-screen demo pages */}
            <Route path="/demo" element={<LayoutDemo />} />
            <Route path="/sidebar-demo" element={<SidebarDemo />} />
            
            {/* Pages with sidebar layout */}
            <Route path="/routes" element={<AppLayout><RoutesPage /></AppLayout>} />
            <Route path="/routes/statistics" element={<AppLayout><RouteStatistics /></AppLayout>} />
            <Route path="/routes/history" element={<AppLayout><RouteHistory /></AppLayout>} />
            <Route path="/routes/color-demo" element={<AppLayout><RouteCardColorDemo /></AppLayout>} />
            <Route path="/routes/new" element={<AppLayout><RouteCreate /></AppLayout>} />
            <Route path="/routes/:id" element={<AppLayout><RouteDetail /></AppLayout>} />
            <Route path="/routes/:id/edit" element={<AppLayout><RouteEdit /></AppLayout>} />
            <Route path="/route-areas" element={<AppLayout><RouteAreas /></AppLayout>} />
            <Route path="/route-areas/new" element={<AppLayout><RouteAreaCreate /></AppLayout>} />
            <Route path="/delivery-persons" element={<AppLayout><DeliveryPersons /></AppLayout>} />
            <Route path="/delivery-persons/create" element={<AppLayout><DeliveryPersonCreate /></AppLayout>} />
            <Route path="/delivery-persons/statistics" element={<AppLayout><DeliveryPersonStatistics /></AppLayout>} />
            <Route path="/delivery-persons/:id" element={<AppLayout><DeliveryPersonDetail /></AppLayout>} />
            <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
