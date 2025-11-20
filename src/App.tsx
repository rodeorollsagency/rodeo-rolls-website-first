import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OfferPage from "./pages/OfferPage";
import CreatorOfferPage from "./pages/CreatorOfferPage";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import the new PrivacyPolicy page
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent"; // Import the new CookieConsent component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oferta" element={<OfferPage />} />
          <Route path="/oferta-tworcow" element={<CreatorOfferPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add the new route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent /> {/* Render the CookieConsent component */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;