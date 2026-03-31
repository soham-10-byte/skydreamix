import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Code2, ShieldCheck, Rocket, PenTool, Terminal, Workflow, Users, Settings } from 'lucide-react';

const ProcessTimeline = ({ data }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  // Drag-to-scroll for Timeline
  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    };
    const mouseUp = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    };
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast multiplier
      slider.scrollLeft = scrollLeft - walk;
    };

    if (slider) {
      slider.addEventListener('mousedown', mouseDown);
      slider.addEventListener('mouseleave', mouseLeave);
      slider.addEventListener('mouseup', mouseUp);
      slider.addEventListener('mousemove', mouseMove);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('mousedown', mouseDown);
        slider.removeEventListener('mouseleave', mouseLeave);
        slider.removeEventListener('mouseup', mouseUp);
        slider.removeEventListener('mousemove', mouseMove);
      }
    };
  }, []);

  const getStepIcon = (index) => {
    const icons = [
      <Search className="w-6 h-6" />,
      <Layout className="w-6 h-6" />,
      <Code2 className="w-6 h-6" />,
      <ShieldCheck className="w-6 h-6" />,
      <Rocket className="w-6 h-6" />
    ];
    return icons[index] || <Rocket className="w-6 h-6" />;
  };

  return (
    <section id="process" className="border-b border-white/5 py-32 scroll-mt-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className={`${data.accent} text-sm font-bold tracking-[0.2em] uppercase`}>Workflow</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">Our Process</h2>
      </motion.div>

      <div className="relative group cursor-grab touch-pan-x" ref={scrollRef} style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* Animated Dashed Line Background */}
        <div className="absolute top-[28px] left-8 right-8 h-px overflow-hidden z-0 hidden md:block" style={{ width: 'max(100%, 1000px)' }}>
          <svg width="100%" height="2" className="opacity-20">
            <motion.line 
              x1="0" y1="1" x2="100%" y2="1" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              initial={{ strokeDashoffset: 1000 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative z-10 w-max pb-8 pt-10">
          {data.process.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-row md:flex-col items-start gap-6 w-full md:w-[280px] group/step relative"
            >
              {/* Vertical connector for mobile */}
              <div className="absolute top-12 bottom-0 left-7 w-px border-l-2 border-dashed border-white/10 md:hidden z-0" />

              {/* Number Circle and Icon */}
              <div className={`w-14 h-14 rounded-full border border-white/10 bg-[#0A0D14] flex items-center justify-center shrink-0 transition-all duration-500 group-hover/step:${data.bgAccent} shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 text-xl font-black text-gray-500 group-hover/step:text-white group-hover/step:scale-110`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/step:opacity-10 scale-150 transition-opacity">
                   {getStepIcon(index)}
                </div>
                <div className="relative z-10 flex flex-col items-center">
                   <div className="scale-0 group-hover/step:scale-100 transition-transform absolute -top-1">
                      {getStepIcon(index)}
                   </div>
                   <span className="group-hover/step:opacity-0 transition-opacity">0{index + 1}</span>
                </div>
              </div>

              {/* Text Focus (Hover triggers expansion) */}
              <div className="pt-2 md:pt-0 pb-12 md:pb-0 z-10">
                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover/step:text-gray-200">
                  {step.title}
                </h3>
                {/* Expends description slightly on hover */}
                <div className="grid grid-rows-[0fr] group-hover/step:grid-rows-[1fr] md:grid-rows-[1fr] transition-all duration-300 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-400 leading-relaxed md:block">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
