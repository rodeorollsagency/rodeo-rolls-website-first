"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@/components/ui/button"; // Assuming shadcn Button is suitable or will be styled

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* New Navigation Buttons Section */}
      <section className="py-20 bg-gray-950 text-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RouterLink to="/oferta">
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-gray-800 text-foreground hover:bg-dyad-accent hover:text-white transition-all duration-300 rounded-lg shadow-lg">
                Nasza oferta
              </Button>
            </RouterLink>
            <ScrollLink to="portfolio" smooth={true} duration={800} offset={-80}>
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-gray-800 text-foreground hover:bg-dyad-accent hover:text-white transition-all duration-300 rounded-lg shadow-lg">
                Portfolio
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-80}>
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-gray-800 text-foreground hover:bg-dyad-accent hover:text-white transition-all duration-300 rounded-lg shadow-lg">
                Kontakt
              </Button>
            </ScrollLink>
          </motion.div>
        </div>
      </section>

      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;