import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = links.map((link) => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is in the upper half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < window.innerHeight / 2) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-300",
          scrolled ? "backdrop-blur-md bg-[#0c0f13]/80 py-4 border-b border-white/5" : "bg-transparent"
        )}
      >
        <a href="#home" className="text-xl md:text-2xl font-medium tracking-wide z-10">
          Bushmita.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-[#1a1d24]/50 backdrop-blur-md rounded-full px-2 py-2 border border-white/5 shadow-2xl">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
                  activeSection === link.href.substring(1) ? "text-[#0c0f13]" : "text-white/60 hover:text-white"
                )}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            className="liquid-glass px-6 py-2.5 rounded-full text-sm font-medium hover:text-white transition-colors border border-white/10"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden liquid-glass w-12 h-12 rounded-full flex items-center justify-center z-50 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-x-4 top-24 z-[90] liquid-glass rounded-3xl p-6 md:hidden border border-white/10 flex flex-col gap-2"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="text-2xl font-light py-3 border-b border-white/5 last:border-0"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 bg-white text-[#0c0f13] text-center py-4 rounded-2xl font-medium"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
