import React from 'react';
import { motion } from 'framer-motion';

export const AllCard = ({ project, onClick }) => (
  <motion.div 
    onClick={() => onClick(project)}
    className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#00E5FF]/50 transition-colors w-full break-inside-avoid mb-6 flex flex-col"
  >
    <div className="w-full h-[240px] sm:h-[320px] relative overflow-hidden">
      <img src={project.images[0] || project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-1 font-sans">{project.title}</h3>
      <div className="text-xs text-[#00E5FF] font-medium tracking-wider uppercase">{project.category}</div>
    </div>
  </motion.div>
);

export const WebCard = ({ project, onClick }) => (
  <motion.div 
    onClick={() => onClick(project)}
    className="group w-full flex items-center py-6 cursor-pointer bg-transparent hover:bg-white/[0.03] transition-all duration-300 border-b border-white/5 px-2 sm:px-4"
  >
    <div className="w-[140px] sm:w-[240px] h-[90px] sm:h-[140px] shrink-0 overflow-hidden relative rounded-lg border border-white/10 shadow-xl group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-shadow duration-300">
      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="flex-1 pl-6 sm:pl-8 flex items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2 font-sans group-hover:text-[#00E5FF] transition-colors">{project.title}</h3>
        <p className="text-xs text-white/40 tracking-widest uppercase">{project.client} — {project.year}</p>
      </div>
      <div className="hidden lg:flex gap-2">
        {project.techStack.slice(0, 3).map(tech => (
          <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/60 font-medium uppercase font-sans">
            {tech}
          </span>
        ))}
      </div>
      <div className="text-[#00E5FF] font-black text-sm uppercase opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        View →
      </div>
    </div>
  </motion.div>
);

export const MobileCard = ({ project, onClick }) => (
  <motion.div 
    onClick={() => onClick(project)}
    className="group relative cursor-pointer w-[160px] flex flex-col items-center"
    style={{ perspective: "1000px" }}
  >
    <div className="w-[160px] h-[320px] bg-black rounded-[24px] overflow-hidden border-4 border-white/10 relative shadow-2xl transition-transform duration-500 group-hover:rotate-y-[8deg] group-hover:rotate-x-[2deg] group-hover:-translate-y-2 group-hover:border-[#A78BFA]/50 group-hover:shadow-[0_20px_40px_rgba(167,139,250,0.2)]">
      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute top-0 inset-x-0 h-4 bg-black flex justify-center rounded-b-xl w-1/2 mx-auto" /> {/* Notch */}
    </div>
    <div className="mt-6 text-center">
      <h3 className="text-[15px] font-bold text-white font-m transition-colors group-hover:text-[#A78BFA] leading-tight mb-1">{project.title}</h3>
      <p className="text-[10px] text-white/40 uppercase tracking-widest font-m font-bold">{project.category}</p>
    </div>
  </motion.div>
);

export const SoftwareCard = ({ project, onClick }) => (
  <motion.div 
    onClick={() => onClick(project)}
    className="group cursor-pointer rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#34D399]/40 transition-colors shadow-2xl overflow-hidden font-mono hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] w-full relative h-[450px] flex flex-col"
  >
    {/* Terminal Header */}
    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2 shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      <div className="flex-1 text-center text-[10px] text-zinc-500 tracking-wider uppercase">
        {project.slug}.exe — v2.0
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-1 pb-4">
      {/* GUI Preview within terminal */}
      <div className="w-full h-[140px] bg-zinc-800 rounded border border-white/5 overflow-hidden relative shrink-0 mb-4">
        <img src={project.thumbnail} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
          <span className="text-[10px] text-white/50 tracking-tighter">PREVIEW_SYSTEM_ID: {project.id}</span>
        </div>
      </div>

      <div className="text-xs text-zinc-300 space-y-2 leading-relaxed flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[#34D399]">[system] <span className="text-white font-bold uppercase">{project.title}</span></div>
          <div className="flex gap-2 mt-2">
            <span className="text-zinc-500">client:</span>
            <span className="text-indigo-300">{project.client}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-zinc-500">stack:</span>
            <span className="text-amber-300">[{project.techStack.slice(0, 3).join(', ')}]</span>
          </div>
          <div className="flex gap-2">
            <span className="text-zinc-500">impact:</span>
            <span className="text-cyan-300 font-bold">{project.results[0]?.value}</span>
            <span className="text-cyan-300/60 lowercase italic">{project.results[0]?.label}</span>
          </div>
        </div>
        <div className="pt-2 text-[#34D399] flex items-center gap-1 group-hover:opacity-100 opacity-50 transition-opacity shrink-0">
          S:\run_analysis <div className="w-1.5 h-3.5 bg-[#34D399] animate-pulse" />
        </div>
      </div>
    </div>
  </motion.div>
);

export const MarketingCard = ({ project, onClick }) => {
  return (
    <motion.div 
      onClick={() => onClick(project)}
      className="group cursor-pointer bg-[#FDFBF7] p-6 pb-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full relative border border-[#E5E0D8] flex flex-col h-[460px]"
    >
      <div className="border-t-[4px] border-b border-black py-2 mb-4 flex justify-between items-center text-black shrink-0">
        <span className="font-serif text-[10px] uppercase font-black tracking-widest">BREAKING NEWS</span>
        <span className="font-sans text-[10px] uppercase font-bold text-gray-500">GLOBAL EDITION — {project.year}</span>
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-2xl font-black text-black leading-tight mb-2 group-hover:text-amber-600 transition-colors line-clamp-2 shrink-0">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-gray-700 mb-4 italic leading-relaxed line-clamp-2 shrink-0">
          {project.client} experiences massive growth lift after strategic implementation.
        </p>
        
        <div className="w-full flex-1 bg-zinc-200 overflow-hidden relative border border-black/5 rounded">
          <img src={project.images[0] || project.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
        </div>
      </div>

      <div className="absolute bottom-3 right-6 font-sans text-[9px] uppercase tracking-widest text-black/30 font-black">
        SkyDreamix Press
      </div>
    </motion.div>
  );
};

export const GraphicsCard = ({ project, onClick }) => (
  <motion.div 
    onClick={() => onClick(project)}
    className="group relative cursor-pointer w-full aspect-square bg-zinc-900 overflow-hidden"
  >
    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
    
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-black text-[#F472B6] uppercase tracking-tighter mb-2 font-sans drop-shadow-lg leading-none">
          {project.title}
        </h3>
        <span className="text-[10px] font-bold text-white tracking-[0.2em] font-sans border px-3 py-1 rounded-full border-white/20">
          {project.category}
        </span>
      </div>
    </div>
  </motion.div>
);
