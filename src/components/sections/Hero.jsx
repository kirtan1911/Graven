import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Using the user's provided portrait.
  // The image should be saved in the `public` folder as `portrait.jpg`.
  const PORTRAIT_URL = "/portrait.jpg";

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cinematic Background Light */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-white/[0.03] blur-[120px]"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center h-full"
      >
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mono text-xs md:text-sm tracking-[0.3em] text-[#9aa4ae] uppercase mb-6 md:mb-10 text-center"
        >
          Hi, I'm Barot Kirtan
        </motion.div>

        {/* Main Title - Stacked */}
        <div className="flex flex-col items-center justify-center text-center relative w-full max-w-7xl">
          
          {/* CREATIVE */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[8vw] font-light leading-[0.85] tracking-[-0.04em]"
            >
              CREATIVE
            </motion.h1>
          </div>

          {/* Portrait Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-[400px] -my-10 md:-my-16 lg:-my-24 z-20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f13] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f13] via-transparent to-transparent z-10" />
            
            <motion.div style={{ scale }} className="w-full h-full overflow-hidden rounded-[2rem] border border-white/5 liquid-glass p-2">
              <img 
                src={PORTRAIT_URL} 
                alt="Barot Kirtan Portrait" 
                className="w-full h-full object-cover rounded-[1.5rem] filter contrast-110 brightness-95 transition-all duration-700 group-hover:brightness-105"
              />
            </motion.div>
          </motion.div>

          {/* DEVELOPER */}
          <div className="overflow-hidden z-30">
            <motion.h1
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[8vw] font-light leading-[0.85] tracking-[-0.04em]"
            >
              DEVELOPER
            </motion.h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="mono text-[10px] tracking-[0.2em] text-[#9aa4ae] uppercase [writing-mode:vertical-rl] rotate-180">
            Scroll to explore
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#9aa4ae] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
