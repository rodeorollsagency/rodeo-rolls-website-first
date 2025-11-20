"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <section className="py-20 pt-32 container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-12 text-dyad-accent text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Polityka Prywatności
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground"
        >
          <p className="mb-4">
            W Rodeo Rolls szanujemy Twoją prywatność. Niniejsza polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane osobowe.
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Zbieranie Danych</h3>
          <p className="mb-4">
            Zbieramy dane, które nam dobrowolnie przekazujesz, takie jak imię, nazwisko, adres e-mail i numer telefonu, gdy kontaktujesz się z nami za pośrednictwem formularza kontaktowego lub poczty elektronicznej.
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Wykorzystanie Danych</h3>
          <p className="mb-4">
            Twoje dane są wykorzystywane wyłącznie w celu świadczenia usług, odpowiadania na zapytania i ulepszania naszej oferty. Nie udostępniamy Twoich danych osobom trzecim bez Twojej zgody.
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Pliki Cookie</h3>
          <p className="mb-4">
            Nasza strona używa plików cookie w celu poprawy komfortu użytkowania. Pliki cookie to małe pliki tekstowe przechowywane na Twoim urządzeniu, które pomagają nam analizować ruch na stronie i personalizować treści. Możesz wyłączyć pliki cookie w ustawieniach swojej przeglądarki, ale może to wpłynąć na funkcjonalność strony.
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Twoje Prawa</h3>
          <p className="mb-4">
            Masz prawo dostępu do swoich danych, ich poprawiania, usuwania lub ograniczania przetwarzania. Wszelkie pytania dotyczące polityki prywatności prosimy kierować na adres kontakt@rolls.rodeo.
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;