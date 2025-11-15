"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Added useLocation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation(); // Get current location

  const navItems = [
    { name: 'Start', to: 'home', type: 'scroll' },
    { name: 'Oferta', to: '/oferta', type: 'route' }, // New item for the subpage
    { name: 'Portfolio', to: 'portfolio', type: 'scroll' },
    { name: 'Kontakt', to: 'contact', type: 'scroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        // If not on the homepage, set active section based on the route
        setActiveSection(location.pathname);
        return;
      }

      // Only update scroll-based active section if on the homepage
      const sections = navItems.filter(item => item.type === 'scroll').map(item => document.getElementById(item.to));
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Offset for better active state

      let currentActive = 'home'; // Default to home
      for (const item of navItems.filter(item => item.type === 'scroll')) {
        const section = document.getElementById(item.to);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentActive = item.to;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial active section on mount or route change
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, location.pathname]); // Re-run effect if pathname changes

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-black shadow-lg transition-opacity duration-500",
      activeSection === 'home' && location.pathname === '/' ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <RouterLink // Use RouterLink for the logo to always go to homepage
          to="/"
          className="cursor-pointer text-lg font-bold text-foreground hover:text-dyad-accent transition-colors z-20"
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
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative text-foreground hover:text-dyad-accent transition-colors cursor-pointer",
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
                    "relative text-foreground hover:text-dyad-accent transition-colors cursor-pointer",
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
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-dyad-accent">
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
                offset={-80}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-foreground text-lg hover:text-dyad-accent transition-colors cursor-pointer",
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
                  "text-foreground text-lg hover:text-dyad-accent transition-colors cursor-pointer",
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