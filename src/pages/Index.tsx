"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import OfferSection from "@/components/OfferSection"; // Removed the OfferSection import
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      {/* <OfferSection /> Removed the OfferSection here */}
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;