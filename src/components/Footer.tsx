"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/rodeorolls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dyad-accent hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/rodeorolls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dyad-accent hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/rodeorolls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dyad-accent hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Rodeo Rolls. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;