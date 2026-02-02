import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import SpecialOffers from "./pages/SpecialOffers";
import TravelTips from "./pages/TravelTips";
import Safety from "./pages/Safety";
import Sustainability from "./pages/Sustainability";
import Emergency from "./pages/Emergency";
import Payment from "./pages/Payment";
import Events from "./pages/Events";
import Feedback from "./pages/Feedback";
import AddisAbaba from "./pages/AddisAbaba";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import EventBooking from "./pages/EventBooking";
import NotFound from "./pages/NotFound";
import AddisAbabaPackages from "./pages/packages/AddisAbabaPackages";
import NatureAdventurePackages from "./pages/packages/NatureAdventurePackages";
import HistoricalCulturalPackages from "./pages/packages/HistoricalCulturalPackages";
import EventsHolidaysPackages from "./pages/packages/EventsHolidaysPackages";
import UnescoSitesPackages from "./pages/packages/UnescoSitesPackages";
import DiscoverDirectionPackages from "./pages/packages/DiscoverDirectionPackages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/offers" element={<SpecialOffers />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-booking" element={<EventBooking />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/addis-ababa" element={<AddisAbaba />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/packages/addis-ababa"
            element={<AddisAbabaPackages />}
          />
          <Route
            path="/packages/nature-adventure"
            element={<NatureAdventurePackages />}
          />
          <Route
            path="/packages/historical-cultural"
            element={<HistoricalCulturalPackages />}
          />
          <Route
            path="/packages/events-holidays"
            element={<EventsHolidaysPackages />}
          />
          <Route
            path="/packages/unesco-sites"
            element={<UnescoSitesPackages />}
          />
          <Route
            path="/packages/discover-direction"
            element={<DiscoverDirectionPackages />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
