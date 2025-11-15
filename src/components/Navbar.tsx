"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navItems = [
    { name: 'Start', to: 'home', type: 'scroll' },
    { name: 'Nasza oferta', to: '/oferta', type: 'router' },
    { name: 'Oferta Twórców', to: '/oferta-tworcow', type: 'router' },
    { name: 'Portfolio', to: 'portfolio', type: 'scroll' },
    { name: 'Kontakt', to: 'contact', type: 'scroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      const sections = navItems.filter(item => item.type === 'scroll').map(item => document.getElementById(item.to));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentActive = 'home';
      for (const item of sections) {
        if (item && scrollPosition >= item.offsetTop && scrollPosition < item.offsetTop + item.offsetHeight) {
          currentActive = item.id;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('change', handleScroll);
  }, [navItems, location.pathname]);

  // If on the homepage, do not render the Navbar
  if (location.pathname === '/') {
    return null;
  }

  const navbarClasses = "fixed top-0 left-0 right-0 z-50 shadow-lg bg-black opacity-100 pointer-events-auto transition-all duration-500";

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
                  offset={-80}
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
                offset={-80}
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