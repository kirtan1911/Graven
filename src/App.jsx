import React, { useEffect } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

// Use lenis for smooth scrolling (if we had it), but we can just use native smooth scroll for now
// or implement a lightweight scroll logic if needed. Native CSS smooth scrolling is enabled in index.css.

export default function App() {
  useEffect(() => {
    // Force native scroll behavior to smooth
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative bg-[#0c0f13] text-white selection:bg-white/20 selection:text-white font-['Inter_Tight']">
      {/* Global Grain Overlay */}
      <div className="grain" />
      
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
