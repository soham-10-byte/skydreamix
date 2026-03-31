import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Motif Components
const GridLines = () => (
  <div 
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0,229,255,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,229,255,0.03) 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}
  />
);

const AmbientCircles = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <motion.div 
      className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#A78BFA] opacity-[0.04] rounded-full blur-[100px]"
      animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      className="absolute bottom-[20%] right-[10%] w-[800px] h-[800px] bg-[#A78BFA] opacity-[0.03] rounded-full blur-[120px]"
      animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const Scanlines = () => (
  <div 
    className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay"
    style={{
      background: `repeating-linear-gradient(
        transparent, 
        transparent 2px, 
        rgba(52,211,153,0.03) 2px, 
        rgba(52,211,153,0.03) 4px
      )`
    }}
  />
);

const PaperTexture = () => (
  <div 
    className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const Splashes = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <svg className="absolute w-full h-full opacity-[0.03]">
      <circle cx="20%" cy="30%" r="200" fill="#F472B6" filter="blur(60px)" />
      <circle cx="80%" cy="70%" r="300" fill="#00E5FF" filter="blur(80px)" />
      <polygon points="50,10 70,80 10,50" fill="#F472B6" style={{ transform: "translate(40vw, 40vh) scale(3)"}} filter="blur(40px)" />
    </svg>
  </div>
);

const CategoryWorldsBackground = ({ activeWorld }) => {
  return (
    <>
      {/* 
        Phase 2 Transition: Background Color
        The motion.div handles the smooth CSS background-color transition naturally via animate prop 
      */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ backgroundColor: activeWorld.bg }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {/* Render Active Motif Component based on world config */}
          <motion.div
            key={activeWorld.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 w-full h-full"
          >
            {activeWorld.motif === "gridLines" && <GridLines />}
            {activeWorld.motif === "circles" && <AmbientCircles />}
            {activeWorld.motif === "scanlines" && <Scanlines />}
            {activeWorld.motif === "paperTexture" && <PaperTexture />}
            {activeWorld.motif === "splashes" && <Splashes />}
            {/* "ambientLight" for ALL WORK has no explicit motif, just deep black */}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CategoryWorldsBackground;
