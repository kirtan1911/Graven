import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Aura E-Commerce",
    description: "A premium dark-themed headless e-commerce experience built with Next.js and Shopify. Designed for seamless interactions and high performance.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Shopify Storefront API"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    link: "#",
    align: "left"
  },
  {
    id: "02",
    title: "Vanguard Studio",
    description: "An award-winning portfolio for a creative agency. Features complex WebGL shaders, smooth scroll typography, and bespoke micro-interactions.",
    tech: ["React", "Three.js", "GSAP", "Lenis"],
    category: "Creative Development",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    link: "#",
    align: "right"
  },
  {
    id: "03",
    title: "Nexus Dashboard",
    description: "A comprehensive analytics dashboard for financial data. Focuses on clarity, data visualization, and accessible complex interfaces.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    category: "UI Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    align: "left"
  }
];

function ProjectCard({ project, index }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full flex flex-col ${project.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 lg:gap-24 mb-32 md:mb-48 last:mb-0`}
    >
      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
        animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } : { opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-3/5 lg:w-2/3 h-[400px] md:h-[500px] lg:h-[700px] relative overflow-hidden rounded-[2rem] border border-white/5"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mono text-[11px] tracking-[0.2em] text-[#9aa4ae] uppercase mb-4">
            {project.id} · {project.category}
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-tight mb-6">
            {project.title}
          </h3>
          <p className="text-white/60 font-light leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map(tech => (
              <span key={tech} className="mono text-[10px] tracking-[0.1em] text-white/50 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
                {tech}
              </span>
            ))}
          </div>

          <a 
            href={project.link}
            className="group inline-flex items-center gap-3 text-sm tracking-wide font-medium text-white/90 hover:text-white transition-colors"
          >
            <span className="relative">
              Explore Project
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/30 transform origin-right transition-transform group-hover:scale-x-0" />
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
            </span>
            <span className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section id="projects" className="relative py-24 md:py-40 px-6 md:px-12 bg-[#0c0f13]">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col gap-6 mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mono text-[11px] tracking-[0.32em] text-[#9aa4ae] uppercase"
          >
            03 · Selected Work
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] w-full max-w-[120px] bg-gradient-to-r from-[#9aa4ae]/80 to-transparent transform origin-left"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-none mt-4 max-w-3xl"
          >
            Digital experiences designed for impact.
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
