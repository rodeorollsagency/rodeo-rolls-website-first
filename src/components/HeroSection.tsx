"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Removed ChevronDown import as it's no longer needed
// Removed ScrollLink import as it's no longer needed

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/rrtlo.jpg)', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <motion.img
        src="/images/rr.png"
        alt="Rodeo Rolls Logo"
        className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.h1
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Dziki Zachód Cyfrowej Kreacji
      </motion.h1>
      <motion.p
        className="relative z-10 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Tworzymy legendy, które podbijają rynek.
      </motion.p>

      {/* Scroll Down Button removed */}
    </section>
  );
};

export default HeroSection;