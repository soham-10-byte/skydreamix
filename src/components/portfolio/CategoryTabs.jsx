import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  "ALL WORK", 
  "WEB & DIGITAL", 
  "MOBILE", 
  "CUSTOM SOFTWARE", 
  "MARKETING", 
  "GRAPHICS DESIGN"
];

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 mt-12">
      {CATEGORIES.map((cat, index) => {
        const isActive = activeCategory === cat;

        return (
          <div key={cat} className="flex items-center">
            <button
              onClick={() => setActiveCategory(cat)}
              className="relative text-[10px] sm:text-[12px] tracking-[0.1em] uppercase transition-colors"
            >
              <span className={`relative z-10 transition-all duration-300 ${isActive ? 'text-white font-bold' : 'text-white/35 font-normal hover:text-white/70'}`}>
                {cat}
              </span>

              {/* Active Underline */}
              {isActive && (
                <motion.div 
                  layoutId="editorialTab"
                  className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)] z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            {/* Divider lines between labels (except last one) */}
            {index < CATEGORIES.length - 1 && (
              <span className="w-px h-3 bg-white/15 ml-4 md:ml-6 hidden sm:block" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
