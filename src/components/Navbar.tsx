"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // New state for navbar visibility
  const location = useLocation();

  const navItems = [
    { name: 'Start', to: 'home', type: 'scroll' },
    { name: 'Nasza oferta', to: '/oferta', type: 'router' },
    { name: 'Oferta Twórców', to: '/oferta-tworcow', type: 'router' },
    { name: 'Nasze Prace', to: 'portfolio', type: 'scroll' }, // Updated text
    { name: 'Kontakt', to: 'contact', type: 'scroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Navbar is always visible on subpages
      if (location.pathname !== '/') {
        setIsNavbarVisible(true);
        setActiveSection(''); // Clear active section for subpages
        return;
      }

      // Logic for homepage
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Navbar appears after scrolling 100px

      setIsNavbarVisible(scrollPosition > scrollThreshold);

      // Update active section for homepage
      const sections = navItems.filter(item => item.type === 'scroll').map(item => document.getElementById(item.to));
      const currentScrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport

      let currentActive = 'home';
      for (const item of sections) {
        if (item && currentScrollPosition >= item.offsetTop && currentScrollPosition < item.offsetTop + item.offsetHeight) {
          currentActive = item.id;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    // Set initial visibility based on path
    if (location.pathname !== '/') {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(window.scrollY > 100); // Check initial scroll position
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, location.pathname]);

  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 shadow-lg bg-black transition-all duration-500",
    isNavbarVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-full" // Hide and slide up when not visible
  );

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <RouterLink
          to="/"
          className="cursor-pointer text-lg font-bold text-white hover:text-dyad-accent transition-colors z-20"
          onClick={() => setIsOpen(false)}
        >
          <img src="/images/rr.png" alt="Logo" className="h-10 w-auto" />
        </RouterLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="space-x-8">
            {navItems.map((item) => (
              item.type === 'scroll' ? (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-120} // Increased offset
                  onClick={() => {
                    setIsOpen(false);
                    // If on a subpage, navigate to home first, then scroll
                    if (location.pathname !== '/') {
                      window.location.href = `/#${item.to}`; // Force full page reload to home and scroll
                    }
                  }}
                  className={cn(
                    "relative text-white hover:text-dyad-accent transition-colors cursor-pointer",
                    activeSection === item.to && location.pathname === '/' && "text-dyad-accent"
                  )}
                >
                  {item.name}
                  {activeSection === item.to && location.pathname === '/' && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-dyad-accent animate-fade-in" />
                  )}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative text-white hover:text-dyad-accent transition-colors cursor-pointer",
                    location.pathname === item.to && "text-dyad-accent"
                  )}
                >
                  {item.name}
                  {location.pathname === item.to && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-dyad-accent animate-fade-in" />
                  )}
                </RouterLink>
              )
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-dyad-accent">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm flex flex-col items-center py-4 space-y-4 shadow-lg animate-fade-in-down">
          {navItems.map((item) => (
            item.type === 'scroll' ? (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-120} // Increased offset
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname !== '/') {
                    window.location.href = `/#${item.to}`; // Force full page reload to home and scroll
                  }
                }}
                className={cn(
                  "text-white text-lg hover:text-dyad-accent transition-colors cursor-pointer",
                  activeSection === item.to && location.pathname === '/' && "text-dyad-accent font-semibold"
                )}
              >
                {item.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-white text-lg hover:text-dyad-accent transition-colors cursor-pointer",
                  location.pathname === item.to && "text-dyad-accent font-semibold"
                )}
              >
                {item.name}
              </RouterLink>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;