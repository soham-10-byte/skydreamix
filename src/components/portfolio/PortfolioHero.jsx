import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const PortfolioHero = ({ totalCount }) => {
  const headingRef = useRef(null);
  const currentYear = new Date().getFullYear();
  const headingText = "Our Work";

  useEffect(() => {
    if (!headingRef.current) return;
    
    const chars = headingRef.current.querySelectorAll('.char');
    
    // Scatter in animation
    gsap.fromTo(chars, 
      { 
        y: () => Math.random() * 100 - 50,
        x: () => Math.random() * 100 - 50,
        rotationZ: () => Math.random() * 90 - 45,
        opacity: 0,
        scale: 0.5
      },
      { 
        y: 0, 
        x: 0, 
        rotationZ: 0,
        opacity: 1, 
        scale: 1,
        stagger: 0.05, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <div className="pt-32 pb-12 w-full">
      {/* Row 1: Editorial Details */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between mb-8 border-b border-white/[0.05] pb-4"
      >
        <span className="text-[11px] tracking-[0.25em] text-white/30 uppercase font-medium">
          Portfolio
        </span>
        <span className="text-[11px] tracking-[0.25em] text-white/30 uppercase font-medium">
          VOL. {currentYear}
        </span>
      </motion.div>

      {/* Row 2: Large Heading */}
      <h1 
        ref={headingRef}
        className="flex items-end flex-wrap gap-4"
      >
        <span className="text-6xl sm:text-7xl md:text-[80px] font-black text-white leading-none tracking-tighter mix-blend-difference flex">
          {headingText.split("").map((char, i) => (
            <span key={i} className="inline-block char whitespace-pre">
              {char}
            </span>
          ))}
        </span>
        
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/30 font-normal italic pb-2 md:pb-4"
        >
          — {totalCount} Projects
        </motion.span>
      </h1>
    </div>
  );
};

export default PortfolioHero;
