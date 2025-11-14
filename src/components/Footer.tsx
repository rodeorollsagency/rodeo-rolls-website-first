"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-muted-foreground text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Rodeo Rolls. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;