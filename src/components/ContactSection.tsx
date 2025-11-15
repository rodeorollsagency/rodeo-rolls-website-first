"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react'; // Added Instagram and Facebook

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-black text-foreground overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/rrtlo.jpg)', backgroundAttachment: 'fixed' }}
      ></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-12 text-dyad-accent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Kontakt
        </motion.h2>

        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="mailto:kontakt@rolls.rodeo"
            className="flex items-center text-2xl text-foreground hover:text-dyad-accent transition-colors group"
          >
            <Mail size={32} className="mr-4 text-dyad-accent group-hover:scale-110 transition-transform" />
            kontakt@rolls.rodeo
          </a>
          <a
            href="tel:+48796172745"
            className="flex items-center text-2xl text-foreground hover:text-dyad-accent transition-colors group"
          >
            <Phone size={32} className="mr-4 text-dyad-accent group-hover:scale-110 transition-transform" />
            +48 796172745
          </a>
          <div className="flex space-x-8 mt-8"> {/* Added social media links */}
            <a
              href="https://www.instagram.com/rodeorolls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dyad-accent hover:text-foreground transition-colors group"
              aria-label="Instagram"
            >
              <Instagram size={32} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/RodeoRollsCreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dyad-accent hover:text-foreground transition-colors group"
              aria-label="Facebook"
            >
              <Facebook size={32} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;