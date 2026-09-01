import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Creative Development", items: ["GSAP", "Framer Motion", "Three.js", "WebGL", "Lenis"] },
  { category: "Tools & Ecosystem", items: ["Git", "GitHub", "Figma", "VS Code", "Vite", "Node.js"] }
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0c0f13] border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mono text-[11px] tracking-[0.32em] text-[#9aa4ae] uppercase"
            >
              02 · Technology
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
              className="text-3xl md:text-5xl font-light tracking-[-0.02em] leading-tight"
            >
              The Stack.
            </motion.h2>
          </div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="max-w-xs"
          >
            <p className="text-sm text-white/40 font-light text-balance md:text-right">
              A curated selection of modern tools designed for crafting scalable and visually stunning web applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skills.map((group, groupIndex) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + (groupIndex * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <h3 className="mono text-[11px] tracking-[0.2em] text-white/70 uppercase pb-4 border-b border-white/10">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-white/80 font-light backdrop-blur-md transition-colors cursor-default relative overflow-hidden group"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
                    <span className="relative z-10">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
