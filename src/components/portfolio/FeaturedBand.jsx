import React from 'react';
import { motion } from 'framer-motion';

const FeaturedBand = ({ project }) => {
  if (!project) return null;

  return (
    <div className="w-full bg-[#0A0D14] border-t border-b border-white/[0.06] py-24 mb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Image */}
        <motion.div 
          className="w-full h-[400px] rounded-xl overflow-hidden relative group cursor-pointer"
          whileHover="hover"
        >
          <motion.img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover relative z-0"
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        </motion.div>

        {/* Right: Content */}
        <div>
          <span className="text-[#00E5FF] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            FEATURED WORK
          </span>
          <h2 className="text-4xl text-white font-black mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            {project.client} — {project.year}
          </p>

          {/* Quick Metrics */}
          <div className="flex gap-12 mb-10">
            {project.results.slice(0, 2).map((res, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-[#00E5FF] mb-1">{res.value}</div>
                <div className="text-xs font-bold text-gray-500 tracking-wider uppercase">{res.label}</div>
              </div>
            ))}
          </div>

          <button className="text-white text-sm font-bold flex items-center gap-2 group hover:text-[#00E5FF] transition-colors">
            View Full Case Study 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBand;
