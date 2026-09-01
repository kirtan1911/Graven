import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0f13] px-6 md:px-12 pb-10 pt-20 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          
          <div className="flex flex-col gap-6">
            <a href="#home" className="text-2xl font-medium tracking-wide">
              Bushmita.
            </a>
            <div className="mono text-[10px] tracking-[0.3em] text-[#9aa4ae] uppercase">
              Creative Developer / Barot Kirtan
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 text-sm text-white/40">
            <div className="flex flex-col gap-2">
              <span className="mono text-[10px] tracking-[0.2em] uppercase text-white/20 mb-1">Navigation</span>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="mono text-[10px] tracking-[0.2em] uppercase text-white/20 mb-1">Socials</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>

            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group self-start md:self-end mt-4 md:mt-0"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-white/60 group-hover:text-white transition-colors group-hover:-translate-y-1 transform duration-300" />
            </button>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
          <span>&copy; {new Date().getFullYear()} Barot Kirtan. All rights reserved.</span>
          <span>Designed with precision & motion.</span>
        </div>

      </div>
    </footer>
  );
}
