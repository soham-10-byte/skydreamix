import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioBackground = ({ hoveredImage }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020206]">
      <AnimatePresence>
        {hoveredImage && (
          <motion.img
            key={hoveredImage} // Changing key triggers exit/enter animations
            src={hoveredImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        )}
      </AnimatePresence>
      
      {/* Radial Vignette Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(2,2,6,0.9) 100%)"
        }}
      />
    </div>
  );
};

export default PortfolioBackground;
