import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationHandler from "./components/NavigationHandler";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Apps from "./pages/Apps";
import DealSnap from "./pages/DealSnap";
import ScratchAndWin from "./pages/ScratchAndWin";
import ServicesPage from "./pages/ServicesPage";
import NewBuilds from "./pages/NewBuilds";
import Maintenance from "./pages/Maintenance";
import Components from "./pages/Components";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavigationHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/dealsnap" element={<DealSnap />} />
          <Route path="/apps/scratch-and-win" element={<ScratchAndWin />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/new-builds" element={<NewBuilds />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/components" element={<Components />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
