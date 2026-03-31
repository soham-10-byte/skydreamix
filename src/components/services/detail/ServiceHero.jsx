import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceHero = ({ data }) => {
  const headlineRef = useRef(null);
  
  // Custom SplitText manually for "word-by-word" as requested without relying on external split-type library to keep it fast
  const headlineWords = data.name.split(" ");

  useEffect(() => {
    if (!headlineRef.current) return;
    
    const words = headlineRef.current.querySelectorAll('.s-word');
    
    gsap.fromTo(words, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        delay: 0.1
      }
    );
  }, [data.slug]); // Re-run if slug changes

  return (
    <section 
      className="relative w-full h-[50vh] min-h-[500px] flex items-center overflow-x-hidden overflow-y-visible border-b border-white/5 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:py-24"
      style={{ backgroundImage: data.gradient }}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-primary/40 pointer-events-none backdrop-blur-[2px]" />

      <div className="container mx-auto px-6 sm:px-12 w-full xl:max-w-[1280px] relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        
        {/* Left Side: Content */}
        <div>
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4"
          >
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className={data.accent}>{data.name}</span>
          </motion.div>

          <h1 
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-[64px] font-black text-white leading-[1.1] tracking-tight mb-4"
          >
            {headlineWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3 py-1">
                <span className="inline-block s-word">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-xl"
          >
            {data.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className={`px-8 py-3.5 rounded-full text-white font-bold text-sm bg-gradient-to-r ${data.color || data.bgAccent} hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
              Get a Quote
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
              View Case Studies
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Animated SVG Illustration (Placeholder abstracted) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-end"
        >
          {/* SVG Line Art Base */}
          <svg className={`w-64 h-64 opacity-80 ${data.accent}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M10,50 Q25,25 50,50 T90,50" 
            />
            <motion.circle 
              cx="50" cy="50" r="20" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              strokeDasharray="4 4"
            />
            {/* Generic animated ring */}
            <motion.circle 
              cx="50" cy="50" r="30" 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              strokeDasharray="10 10"
              style={{ transformOrigin: "50% 50%" }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
