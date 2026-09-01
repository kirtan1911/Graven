import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0c0f13]" ref={containerRef}>
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mono text-[11px] tracking-[0.32em] text-[#9aa4ae] uppercase mb-12"
        >
          05 · Get in Touch
        </motion.div>
        
        <div className="overflow-hidden mb-12">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-9xl font-light tracking-[-0.04em] leading-[0.9]"
          >
            LET'S BUILD<br/>
            <span className="italic text-white/50">SOMETHING</span> GREAT.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-8 md:gap-12 mt-8"
        >
          <a 
            href="mailto:hello@bushmita.dev" 
            className="liquid-glass px-10 py-5 rounded-full text-lg md:text-xl font-light tracking-wide text-white hover:text-white transition-colors border border-white/10 group flex items-center gap-3"
          >
            hello@bushmita.dev
          </a>
          
          <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <SocialLink href="#" label="GitHub" delay={0.7} inView={isInView} />
            <SocialLink href="#" label="LinkedIn" delay={0.8} inView={isInView} />
            <SocialLink href="#" label="Twitter" delay={0.9} inView={isInView} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialLink({ href, label, delay, inView }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="text-white/60 hover:text-white transition-colors relative group"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
    </motion.a>
  );
}
