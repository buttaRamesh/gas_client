import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import Index from "./pages/Index";
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
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<LayoutDemo />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/routes/statistics" element={<RouteStatistics />} />
            <Route path="/routes/history" element={<RouteHistory />} />
            <Route path="/routes/new" element={<RouteCreate />} />
            <Route path="/routes/:id" element={<RouteDetail />} />
            <Route path="/routes/:id/edit" element={<RouteEdit />} />
            <Route path="/route-areas" element={<RouteAreas />} />
            <Route path="/route-areas/new" element={<RouteAreaCreate />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
