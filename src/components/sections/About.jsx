import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 md:px-12 flex items-center bg-[#0c0f13]" ref={containerRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left / Top - Metadata & Section Title */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mono text-[11px] tracking-[0.32em] text-[#9aa4ae] uppercase"
            >
              01 · The Details
            </motion.div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-full max-w-[120px] bg-gradient-to-r from-[#9aa4ae]/80 to-transparent transform origin-left"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-light tracking-[-0.02em] leading-tight mt-4"
            >
              Bridging the gap between <span className="italic text-white/60">design</span> and <span className="italic text-white/60">engineering</span>.
            </motion.h2>
          </div>

          {/* Right / Bottom - Editorial Content */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-8 md:gap-16 pt-2 lg:pt-24">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl text-balance"
            >
              I am Barot Kirtan, a creative developer crafting premium, high-performance web experiences. My work focuses on motion, interaction, and supreme visual quality, ensuring that every project not only functions flawlessly but leaves a lasting impression.
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mt-4">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4"
              >
                <div className="mono text-[10px] tracking-[0.2em] text-[#9aa4ae] uppercase border-b border-white/10 pb-3">Approach</div>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  Every interface is a conversation. I believe in designing with intention—where motion feels natural, typography commands attention, and the user experience feels distinctly high-end.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4"
              >
                <div className="mono text-[10px] tracking-[0.2em] text-[#9aa4ae] uppercase border-b border-white/10 pb-3">Execution</div>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  From robust frontend architecture to the finest micro-interactions, execution is everything. I build scalable applications that do not compromise on aesthetics or performance.
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
