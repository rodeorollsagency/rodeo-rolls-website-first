"use client";

import React, { useState } => {
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  src: string;
  alt: string;
  category: 'Branding' | 'Web Design' | 'Druk i Fizyczne'; // Updated categories
  caption: string;
}

const portfolioItems: PortfolioItem[] = [
  { src: '/images/rodeo-rolls-branding.png', alt: 'Rodeo Rolls Branding', category: 'Branding', caption: 'Identyfikacja Wizualna Rodeo Rolls' },
  { src: '/images/rodeo-rolls-business-cards.jpg', alt: 'Rodeo Rolls Business Cards', category: 'Branding', caption: 'Wizytówki Rodeo Rolls' },
  { src: '/images/syriusz-wizytowka.png', alt: 'Syriusz Business Card', category: 'Branding', caption: 'Wizytówka Syriusz' },
  { src: '/images/naklejka-na-drzwi.jpg', alt: 'Door Sticker', category: 'Druk i Fizyczne', caption: 'Naklejka na Drzwi' },
  { src: '/images/masaze-voucher.png', alt: 'Massage Voucher', category: 'Druk i Fizyczne', caption: 'Voucher na Masaż' },
  { src: '/images/babie-lato-website.png', alt: 'Babie Lato Website', category: 'Web Design', caption: 'Projekt Strony Babie Lato' },
  { src: '/images/syriusz-website.png', alt: 'Syriusz Website', category: 'Web Design', caption: 'Projekt Strony Syriusz' },
  { src: '/images/plakaty.png', alt: 'Posters', category: 'Druk i Fizyczne', caption: 'Projekty Plakatów' },
  { src: '/images/okladka-ksiazki.png', alt: 'Book Cover', category: 'Druk i Fizyczne', caption: 'Okładka Książki' },
  { src: '/images/masaz-tydek.png', alt: 'Massage Tydek', category: 'Druk i Fizyczne', caption: 'Grafika Masaż Tydek' },
];

const categories = ['Wszystkie', 'Branding', 'Web Design', 'Druk i Fizyczne']; // Updated categories

const PortfolioSection = () => {
  const [filter, setFilter] = useState('Wszystkie');

  const filteredItems = filter === 'Wszystkie'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 text-foreground">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-dyad-accent pt-16" // Added pt-16 for spacing
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Nasze prace
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-none text-lg font-medium transition-all duration-300", // Changed to rounded-none
                filter === cat
                  ? "bg-dyad-accent text-white shadow-lg"
                  : "bg-gray-800 text-muted-foreground hover:bg-gray-700 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" // Adjusted grid columns for larger images
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-none shadow-xl bg-gray-800" // Changed to rounded-none
              variants={itemVariants}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-110 lazyload" // Increased height to h-[480px] for vertical emphasis
                loading="lazy"
              />
              {/* Subtle gradient overlay from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-dyad-accent/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;