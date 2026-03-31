import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import CategoryTabs from './CategoryTabs';
import ProjectRow from './ProjectRow';

const ProjectList = ({ data, activeCategory, setActiveCategory, onHover, onClick }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    // Initial load line draw GSAP animation
    if (lineRef.current) {
      gsap.fromTo(lineRef.current, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.2, ease: "power3.inOut", transformOrigin: "left center" }
      );
    }
  }, []);

  // Filter projects internally
  const filteredProjects = activeCategory === "ALL WORK" 
    ? data 
    : data.filter(p => p.category.toUpperCase() === activeCategory.toUpperCase());

  return (
    <div className="w-full relative z-10 mb-24">
      {/* Search/Category filter row */}
      <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Divider GSAP line */}
      <div 
        ref={lineRef}
        className="w-full h-px bg-white/[0.1] mb-8"
      />

      {/* Project Index Rows mapping */}
      <div className="flex flex-col min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectRow 
              key={project.id} // using id makes transition trigger immediately on filter
              project={project} 
              index={idx}
              onHover={onHover}
              onClick={onClick}
            />
          ))}
        </AnimatePresence>
        
        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-white/30 text-sm"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
