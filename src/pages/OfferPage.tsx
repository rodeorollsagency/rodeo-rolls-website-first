"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Share2, Video, Palette, Globe, Package, BookOpen, Camera, MonitorPlay, Megaphone } from 'lucide-react'; // Import relevant icons

interface OfferCategory {
  title: string;
  icon: React.ElementType; // Using React.ElementType for Lucide icons
  items: string[];
}

const offerCategories: OfferCategory[] = [
  {
    title: "Social Media",
    icon: Share2,
    items: [
      "Pakiet Start: podstawowe planowanie i publikacja postów, moderacja komentarzy, raport miesięczny.",
      "Pakiet Profesjonalny: rozszerzone planowanie i kreacja treści, zaawansowana moderacja, cotygodniowe raporty i analizy.",
      "Pakiet Premium: pełna obsługa social media: planowanie, tworzenie video, kampanie reklamowe, monitoring efektów w czasie rzeczywistym.",
      "Zdjęcia i filmiki pod social media (realizacja i obróbka materiałów idealnych do promocji w sieci)",
    ],
  },
  {
    title: "Wideo i Multimedia",
    icon: Video,
    items: [
      "Zdjęcia z drona (realizacja sesji zdjęciowych i filmów z powietrza)",
      "Montaż i edycja wideo (YouTube, TikTok, Instagram Reels)",
      "Teledyski, dokumenty, reportaże",
      "Filmy promocyjne i reklamowe",
      "Tworzenie filmów promocyjnych (pełna realizacja: scenariusz, nagranie, montaż)",
    ],
  },
  {
    title: "Projektowanie Graficzne i Druk",
    icon: Palette,
    items: [
      "Projektowanie logo",
      "Projektowanie i druk banerów",
      "Projektowanie i druk wizytówek",
      "Projektowanie i druk kalendarzy",
      "Projektowanie okładek książek",
      "Projekt i druk ulotek, plakatów",
    ],
  },
  {
    title: "Strony Internetowe",
    icon: Globe,
    items: [
      "Projektowanie i wdrażanie stron www (Strony wizytówkowe, Landing page, Sklepy internetowe, Portfolio dla artystów, Blogi i portale firmowe)",
    ],
  },
  {
    title: "Pakiety Reklamowe",
    icon: Package,
    items: [
      "Pakiet Start: wizytówki + logo",
      "Pakiet Biznes: wizytówki + baner reklamowy + logo",
      "Pakiet Premium: wizytówki + baner + logo + ulotki + projekt strony www",
    ],
  },
];

const OfferPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<OfferCategory | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <section id="offer-page" className="py-20 pt-32 bg-black text-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold mb-12 text-dyad-accent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nasza Oferta
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
            {offerCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Card
                    className="bg-gray-900 border border-gray-800 hover:border-dyad-accent transition-all duration-300 cursor-pointer group shadow-lg rounded-none h-full flex flex-col justify-between"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                      <IconComponent size={64} className="text-dyad-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-dyad-accent transition-colors duration-300 text-center">
                        {category.title}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Footer />

      {/* Dialog for displaying detailed category information */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-foreground border-gray-700 rounded-none p-6">
          <DialogHeader>
            <DialogTitle className="text-dyad-accent text-3xl mb-4 text-center">{selectedCategory?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg">
              {selectedCategory?.items.length > 0 ? (
                <motion.ul
                  className="list-disc list-inside space-y-3 text-left pl-4"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {selectedCategory.items.map((item, itemIndex) => (
                    <motion.li key={itemIndex} variants={listItemVariants} className="text-white">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <p className="italic text-center">Brak dodatkowych szczegół w tej kategorii.</p>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OfferPage;