import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { worldThemes } from '../../utils/worldThemes';

const CATEGORIES = Object.keys(worldThemes);

const CategoryWorldsHero = ({ activeWorld, setActiveWorld }) => {
  const headingRef = useRef(null);

  // GSAP SplitText manual reconstruction and scatter logic
  useEffect(() => {
    if (!headingRef.current) return;
    const chars = headingRef.current.querySelectorAll('.char');
    
    // Quick kill existing animations
    gsap.killTweensOf(chars);

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
        stagger: 0.03, 
        duration: 0.8, 
        ease: "power3.out"
      }
    );
  }, [activeWorld.id]); // Re-run whenever activeWorld changes

  const displayTitle = activeWorld.prefix ? `${activeWorld.prefix}Our Work` : "Our Work";

  return (
    <div className="pt-32 pb-16 w-full relative z-10 flex flex-col items-center justify-center text-center">
      
      {/* Dynamic Heading */}
      <div className="min-h-[120px] mb-6 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={activeWorld.id}
            ref={headingRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${activeWorld.titleSizeClass} ${activeWorld.fontClass} flex items-center justify-center flex-wrap gap-x-2 md:gap-x-4 gap-y-1`}
            style={{ color: activeWorld.accent }}
          >
            {displayTitle.split("").map((char, i) => (
              <span key={i} className="inline-block char whitespace-pre">
                {char}
              </span>
            ))}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Category Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-4 md:mt-8 px-4">
        {CATEGORIES.map(cat => {
          const world = worldThemes[cat];
          const isActive = activeWorld.id === cat;
          
          return (
            <button
              key={cat}
              onClick={() => setActiveWorld(world)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 border backdrop-blur-md`}
              style={{
                borderColor: isActive ? world.accent : 'rgba(255,255,255,0.1)',
                backgroundColor: isActive ? world.accent : `rgba(0,0,0,0.2)`,
                color: isActive ? '#000' : 'rgba(255,255,255,0.7)',
                fontFamily: "var(--font-sans)"
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

    </div>
  );
};

export default CategoryWorldsHero;
