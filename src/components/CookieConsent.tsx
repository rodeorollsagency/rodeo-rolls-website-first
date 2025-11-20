"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'cookie_consent_accepted';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-white p-4 shadow-lg border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p className="text-sm text-center md:text-left">
        Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej strony. Kontynuując, zgadzasz się na ich użycie.
      </p>
      <div className="flex gap-3">
        <Button
          onClick={handleAccept}
          className="bg-dyad-accent text-white hover:bg-dyad-accent/90 rounded-none px-6 py-3 text-sm"
        >
          Akceptuję
        </Button>
        <Link to="/privacy-policy">
          <Button
            variant="outline"
            className="border-gray-700 text-white hover:bg-gray-700 hover:text-dyad-accent rounded-none px-6 py-3 text-sm"
          >
            Polityka Prywatności
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CookieConsent;