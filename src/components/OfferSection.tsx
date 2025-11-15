"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const offerCategories = [
  {
    title: "Oferta agencji kreatywnej",
    items: [
      "Subskrypcje na prowadzenie social media (pakiety miesięczne: planowanie treści, publikacja, moderacja, raportowanie efektów)",
    ],
  },
  {
    title: "Zdjęcia i wideo",
    items: [
      "Zdjęcia z drona (realizacja sesji zdjęciowych i filmów z powietrza)",
      "Zdjęcia i filmiki pod social media (realizacja i obróbka materiałów idealnych do promocji w sieci)",
    ],
  },
  {
    title: "Montaż i edycja wideo",
    items: [
      "YouTube, TikTok, Instagram Reels",
      "Teledyski, dokumenty, reportaże",
      "Filmy promocyjne i reklamowe",
    ],
  },
  {
    title: "Tworzenie filmów promocyjnych (pełna realizacja: scenariusz, nagranie, montaż)",
    items: [],
  },
  {
    title: "Tworzenie miniaturek pod YouTube (atrakcyjne grafiki przyciągające widzów)",
    items: [],
  },
  {
    title: "Tworzenie emoji na Twitch/Kick (unikalne emotki na potrzeby czatów transmisji)",
    items: [],
  },
  {
    title: "Tworzenie layoutów na Twitch/Kick/YouTube (grafika, overlaye, panele)",
    items: [],
  },
  {
    title: "Projektowanie i druk",
    items: [
      "Projektowanie i druk banerów (różne formaty do zastosowań outdoor i indoor)",
      "Projektowanie i druk wizytówek (nowoczesne i klasyczne projekty na papierze premium)",
      "Projektowanie i druk kalendarzy (biurkowe, ścienne, firmowe)",
      "Projektowanie okładek książek (koncept, projekt graficzny, przygotowanie do druku)",
      "Projekt i druk ulotek, plakatów (rozmaite formaty, kreatywne podejście)",
    ],
  },
  {
    title: "Projektowanie i wdrażanie stron www",
    items: [
      "Strony wizytówkowe",
      "Landing page",
      "Sklepy internetowe",
      "Portfolio dla artystów",
      "Blogi i portale firmowe",
    ],
  },
  {
    title: "Projektowanie logo (unikalne znaki graficzne budujące wizerunek marki)",
    items: [],
  },
  {
    title: "Szkolenia z prowadzenia social media dla osób indywidualnych i firm (praktyczna wiedza, strategie, narzędzia)",
    items: [],
  },
  {
    title: "Pakiety reklamowe",
    items: [
      "Pakiet Start: wizytówki + logo",
      "Pakiet Biznes: wizytówki + baner reklamowy + logo",
      "Pakiet Premium: wizytówki + baner + logo + ulotki + projekt strony www",
    ],
  },
];

const OfferSection = () => {
  return (
    <section id="offer" className="min-h-screen flex items-center justify-center py-20 bg-gray-900 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-12 text-dyad-accent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Nasza Oferta
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {offerCategories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
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
  );
};

export default OfferSection;