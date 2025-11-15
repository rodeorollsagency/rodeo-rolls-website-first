"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const offerCategories = [
  {
    title: "Social Media",
    items: [
      "Subskrypcje na prowadzenie social media (pakiety miesięczne: planowanie treści, publikacja, moderacja, raportowanie efektów)",
      "Zdjęcia i filmiki pod social media (realizacja i obróbka materiałów idealnych do promocji w sieci)",
      "Tworzenie miniaturek pod YouTube (atrakcyjne grafiki przyciągające widzów)",
      "Tworzenie emoji na Twitch/Kick (unikalne emotki na potrzeby czatów transmisji)",
      "Projektowanie layoutów na Twitch/Kick/YouTube (grafika, overlaye, panele)",
      "Szkolenia z prowadzenia social media dla osób indywidualnych i firm (praktyczna wiedza, strategie, narzędzia)",
    ],
  },
  {
    title: "Wideo i Multimedia",
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
    items: [
      "Projektowanie i wdrażanie stron www (Strony wizytówkowe, Landing page, Sklepy internetowe, Portfolio dla artystów, Blogi i portale firmowe)",
    ],
  },
  {
    title: "Pakiety Reklamowe",
    items: [
      "Pakiet Start: wizytówki + logo",
      "Pakiet Biznes: wizytówki + baner reklamowy + logo",
      "Pakiet Premium: wizytówki + baner + logo + ulotki + projekt strony www",
    ],
  },
];

const OfferPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-foreground"> {/* Using a darker background */}
      <Navbar />
      <section id="offer-page" className="py-20 pt-32 bg-gray-950 text-foreground">
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
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {offerCategories.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800"> {/* Darker border */}
                  <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-dyad-accent transition-colors py-4">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pl-4 pb-4">
                    {category.items.length > 0 ? (
                      <ul className="list-disc list-inside space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="italic">Brak dodatkowych szczegół w tej kategorii.</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OfferPage;