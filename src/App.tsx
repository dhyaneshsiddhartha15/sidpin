import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { AnimatedCursor } from "./components/animated-cursor";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import ContactPage from "./pages/ContactPage";
import GetQuotePage from "./pages/GetQuotePage";
import NotFound from "./pages/NotFound";
import AppointmentPage from "./pages/AppointmentPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import MobileAppDevelopmentPage from "./pages/MobileAppDevelopmentPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import SocialMediaManagementPage from "./pages/SocialMediaManagementPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurWorkPage from "./pages/OurWorkPage";

// Import Google Fonts in index.html
if (document.head && !document.head.querySelector('link[href*="fonts.googleapis.com"]')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap';
  document.head.appendChild(link);
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen font-outfit">
            <AnimatedCursor />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/web-development" element={<WebDevelopmentPage />} />
                <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
                <Route path="/services/social-media-management" element={<SocialMediaManagementPage />} />
                <Route path="/our-work" element={<OurWorkPage />} />
                <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/get-quote" element={<GetQuotePage />} />
                <Route path="/appointment" element={<AppointmentPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
