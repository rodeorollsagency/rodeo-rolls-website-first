"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MonitorPlay, Camera, Megaphone, Palette, Share2, Video, BookOpen } from 'lucide-react'; // Icons for creator services

interface CreatorOfferItem {
  title: string;
  icon: React.ElementType;
  description: string;
  details: string[];
}

const creatorOfferItems: CreatorOfferItem[] = [
  {
    title: "Projektowanie Layoutów",
    icon: MonitorPlay,
    description: "Unikalne grafiki i overlaye na Twitch/Kick/YouTube.",
    details: [
      "Projektowanie spersonalizowanych layoutów streamu (ekrany startowe, przerwy, zakończenia)",
      "Tworzenie paneli informacyjnych i banerów kanału",
      "Projektowanie alertów i powiadomień",
      "Integracja z platformami streamingowymi"
    ],
  },
  {
    title: "Tworzenie Emotek i Odznak",
    icon: Palette,
    description: "Spersonalizowane emoji i odznaki dla Twojej społeczności.",
    details: [
      "Projektowanie unikalnych emotek na Twitch/Kick",
      "Tworzenie odznak subskrybenckich i bitowych",
      "Dostosowanie grafik do wymagań platform"
    ],
  },
  {
    title: "Montaż i Edycja Wideo",
    icon: Video,
    description: "Profesjonalna obróbka materiałów z Twoich streamów.",
    details: [
      "Montaż highlightów i najlepszych momentów z transmisji",
      "Tworzenie krótkich form wideo na TikTok, Instagram Reels, YouTube Shorts",
      "Edycja pełnych VOD na YouTube",
      "Dodawanie intro/outro, efektów specjalnych i muzyki"
    ],
  },
  {
    title: "Miniaturki YouTube",
    icon: Camera,
    description: "Atrakcyjne miniaturki, które przyciągną widzów.",
    details: [
      "Projektowanie klikalnych miniaturek do filmów na YouTube",
      "Optymalizacja grafik pod kątem algorytmów YouTube",
      "Spójny styl miniaturek dla Twojego kanału"
    ],
  },
  {
    title: "Promocja w Social Media",
    icon: Megaphone,
    description: "Zwiększ zasięgi i buduj społeczność poza streamem.",
    details: [
      "Tworzenie postów promocyjnych na Instagram, Facebook, Twitter",
      "Zarządzanie harmonogramem publikacji",
      "Strategie angażowania widzów w mediach społecznościowych"
    ],
  },
  {
    title: "Szkolenia i Konsultacje",
    icon: BookOpen, // Reusing BookOpen for training
    description: "Indywidualne wsparcie w rozwoju Twojej marki twórcy internetowego.",
    details: [
      "Szkolenia z obsługi oprogramowania do streamowania (OBS, Streamlabs)",
      "Konsultacje dotyczące strategii rozwoju kanału",
      "Porady z zakresu budowania społeczności i monetyzacji"
    ],
  },
];

const CreatorOfferPage = () => {
  const [selectedItem, setSelectedItem] = useState<CreatorOfferItem | null>(null);

  return (
    <div className="min-h-screen bg-black text-white"> {/* Solid black background, white text */}
      <Navbar />
      <section id="creator-offer-page" className="py-20 pt-32 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold mb-12 text-dyad-accent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Oferta dla twórców internetowych
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {creatorOfferItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border border-gray-800 hover:border-dyad-accent transition-all duration-300 cursor-pointer group shadow-lg rounded-none" // Changed to rounded-none
                  onClick={() => setSelectedItem(item)}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <IconComponent size={64} className="text-dyad-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white group-hover:text-dyad-accent transition-colors duration-300 text-center mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-center">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Footer />

      {/* Dialog for displaying detailed item information */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-700 rounded-none"> {/* Changed to rounded-none */}
          <DialogHeader>
            <DialogTitle className="text-dyad-accent text-3xl mb-2">{selectedItem?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground text-lg">
              {selectedItem?.details.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-left">
                  {selectedItem.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              ) : (
                <p className="italic">Brak dodatkowych szczegół w tej kategorii.</p>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatorOfferPage;