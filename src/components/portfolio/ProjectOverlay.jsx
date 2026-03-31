import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const ProjectOverlay = ({ project, activeWorld, onClose }) => {
  // ESC to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // expo out
      className="fixed inset-0 z-[200] overflow-y-auto no-scrollbar"
      style={{ backgroundColor: activeWorld.bg }}
    >
      {/* Top Header Controls */}
      <div className="sticky top-0 w-full flex justify-between items-center p-6 md:p-12 z-50 pointer-events-none">
        <div /> {/* Spacer */}
        <button 
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:block">ESC to close</span>
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-[#00E5FF]/50 transition-colors">
            <X size={20} className="group-hover:text-[#00E5FF] transition-colors" />
          </div>
        </button>
      </div>

      {/* Main Spread Layout */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-24 pb-32 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 xl:gap-32 mt-[-80px]">
        
        {/* Left: Image Stack Scroller */}
        <div className="space-y-8 lg:space-y-12">
          {project.images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-full bg-[#111] rounded-lg overflow-hidden relative"
            >
              <img src={img} alt={`${project.title} screenshot ${i}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Right: Editorial Content */}
        <div className="lg:sticky lg:top-32 h-max space-y-12">
          
          {/* Header */}
          <div>
            <div 
              className={`flex gap-4 items-center mb-6 text-[11px] font-bold tracking-[0.2em] uppercase`}
              style={{ color: activeWorld.accent }}
            >
              <span>{project.id}</span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: activeWorld.accent }} />
              <span>{project.category}</span>
            </div>
            
            <h1 className={`text-4xl md:text-[52px] font-black text-white leading-[1.1] mb-4 tracking-tighter ${activeWorld.fontClass}`}>
              {project.title}
            </h1>
            
            <div className={`text-sm font-medium text-white/40 ${activeWorld.fontClass}`}>
              {project.client} &nbsp;&mdash;&nbsp; {project.year}
            </div>
          </div>

          <div className="w-[60px] h-[2px]" style={{ backgroundColor: activeWorld.accent }} />

          {/* Text Blocks */}
          <div className="space-y-8 text-[15px] leading-[1.8] text-white/70">
            <div>
              <h3 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-3">The Challenge</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-3">The Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Results Block */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">Key Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-8 border-b border-white/[0.05]">
              {project.results.map((res, i) => (
                <div key={i}>
                  <div className={`text-3xl lg:text-4xl font-black mb-2 ${activeWorld.fontClass}`} style={{ color: activeWorld.accent }}>{res.value}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech & Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-wider text-white/50 uppercase">
                  {t}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#00E5FF] transition-colors text-sm font-bold uppercase tracking-widest shrink-0"
              >
                Visit Live Site <ArrowUpRight size={16} />
              </a>
            )}
          </div>

        </div>
      </div>
      
    </motion.div>
  );
};

export default ProjectOverlay;
