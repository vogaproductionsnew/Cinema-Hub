import { Switch, Route, Router as WouterRouter } from "wouter";
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Cursor from './components/Cursor';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import PartnersSection from './components/sections/PartnersSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import NotFound from "@/pages/not-found";

function VogaHome() {
  useSmoothScroll();
  return (
    <div style={{ background: '#0a0a0a', color: '#f0ead6', fontFamily: "'Overused Grotesk', Arial, sans-serif" }}>
      <Cursor />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={VogaHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
