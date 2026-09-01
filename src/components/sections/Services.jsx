import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Building robust, scalable, and high-performance web applications tailored to your specific business needs."
  },
  {
    id: "02",
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, responsive interfaces using modern frameworks like React, Next.js, and Tailwind CSS."
  },
  {
    id: "03",
    title: "Creative Development",
    description: "Elevating brands through bespoke micro-interactions, smooth scrolling, and immersive WebGL experiences."
  },
  {
    id: "04",
    title: "UI/UX Implementation",
    description: "Bridging the gap between design and engineering to ensure the final product matches the creative vision flawlessly."
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0c0f13]" ref={containerRef}>
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Header Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mono text-[11px] tracking-[0.32em] text-[#9aa4ae] uppercase"
            >
              04 · Capabilities
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
              className="text-4xl md:text-5xl font-light tracking-[-0.02em] leading-tight mt-4 sticky top-32"
            >
              What I can do for you.
            </motion.h2>
          </div>

          {/* Services List */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="group relative border-t border-white/10 py-10 md:py-16 first:border-t-0 flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transform origin-top transition-transform duration-500 pointer-events-none -mx-6 px-6" />

                <div className="mono text-[10px] tracking-[0.2em] text-[#9aa4ae] md:pt-2 relative z-10">
                  {service.id}
                </div>
                
                <div className="flex flex-col gap-4 flex-1 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white group-hover:text-white/90 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-light leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
                
                {/* Minimal Arrow */}
                <div className="hidden md:flex items-start pt-2 relative z-10 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-8 h-[1px] bg-white/40 mt-3" />
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/10 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
