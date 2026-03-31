import React from 'react';
import { motion } from 'framer-motion';

const ProjectRow = ({ project, index, onHover, onClick }) => {
  return (
    <motion.button
      onClick={() => onClick(project)}
      onMouseEnter={() => onHover(project.images[0] || project.thumbnail)}
      onMouseLeave={() => onHover(null)}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
      className="group w-full flex items-baseline gap-4 md:gap-6 py-5 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-250 cursor-pointer text-left focus:outline-none"
    >
      {/* Index Number */}
      <span className="hidden sm:inline-block min-w-[36px] text-[13px] font-bold text-[#00E5FF]/50 font-tabular-nums">
        {project.id}
      </span>

      {/* Project Name */}
      <span className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#00E5FF] transition-colors duration-250 shrink-0">
        {project.title}
      </span>

      {/* Dot Leader */}
      <span className="flex-1 border-b border-dotted border-white/10 mx-2 self-center mt-2 group-hover:border-[#00E5FF]/20 transition-colors duration-250 hidden md:block" />

      {/* Category */}
      <span className="hidden sm:inline-block min-w-[120px] text-[12px] tracking-[0.08em] uppercase text-white/35 font-medium shrink-0">
        {project.category}
      </span>

      {/* Year */}
      <span className="hidden sm:inline-block min-w-[48px] text-[12px] font-tabular-nums text-white/25 shrink-0">
        {project.year}
      </span>

      {/* Arrow */}
      <span className="text-white/20 text-lg transition-transform duration-250 group-hover:translate-x-1.5 group-hover:text-[#00E5FF] shrink-0 font-light">
        →
      </span>
    </motion.button>
  );
};

export default ProjectRow;
