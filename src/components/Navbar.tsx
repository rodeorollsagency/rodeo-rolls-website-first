"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Start', to: 'home' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Kontakt', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.to));
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Offset for better active state

      sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(navItems[index].to);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer text-lg font-bold text-foreground hover:text-dyad-accent transition-colors"
        >
          <img src="/images/rr.png" alt="Logo" className="h-8 w-auto" />
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={800}
              offset={-80} // Adjust offset for sticky header
              className={cn(
                "relative text-foreground hover:text-dyad-accent transition-colors cursor-pointer",
                activeSection === item.to && "text-dyad-accent"
              )}
            >
              {item.name}
              {activeSection === item.to && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-dyad-accent animate-fade-in" />
              )}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-dyad-accent">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm flex flex-col items-center py-4 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-foreground text-lg hover:text-dyad-accent transition-colors cursor-pointer",
                activeSection === item.to && "text-dyad-accent font-semibold"
              )}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;