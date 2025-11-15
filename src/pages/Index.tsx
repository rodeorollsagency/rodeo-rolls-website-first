"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* Navigation Buttons Section - moved directly below HeroSection */}
      <section className="relative z-10 -mt-64 pb-20 bg-transparent text-foreground"> {/* Adjusted margin-top to move higher */}
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RouterLink to="/oferta">
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-black text-white hover:bg-dyad-accent hover:text-white transition-all duration-300 rounded-none shadow-lg border border-gray-800 hover:border-dyad-accent">
                Nasza oferta
              </Button>
            </RouterLink>
            <ScrollLink to="portfolio" smooth={true} duration={800} offset={-120}> {/* Increased offset */}
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-black text-white hover:bg-dyad-accent hover:text-white transition-all duration-300 rounded-none shadow-lg border border-gray-800 hover:border-dyad-accent">
                Portfolio
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-120}> {/* Increased offset */}
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-black text-white hover:bg-dyad-accent hover:text-white transition-all duration-300 rounded-none shadow-lg border border-gray-800 hover:border-dyad-accent">
                Kontakt
              </Button>
            </RouterLink>
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