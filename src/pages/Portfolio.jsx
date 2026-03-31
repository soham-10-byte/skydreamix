import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../utils/portfolioData';
import { worldThemes } from '../utils/worldThemes';

import CategoryWorldsBackground from '../components/portfolio/CategoryWorldsBackground';
import CategoryWorldsHero from '../components/portfolio/CategoryWorldsHero';
import ProjectOverlay from '../components/portfolio/ProjectOverlay';

// Import specialized World Cards
import { 
  AllCard, 
  WebCard, 
  MobileCard, 
  SoftwareCard, 
  MarketingCard, 
  GraphicsCard 
} from '../components/portfolio/cards/WorldCards';

// --- Transition Orchestration ---
const getListVariants = (worldId) => {
  // Common exit (Phase 1)
  const exit = { opacity: 0, scale: 0.9, transition: { duration: 0.3 } };
  
  // Custom Entries (Phase 3)
  switch (worldId) {
    case 'WEB & DIGITAL':
      return { 
        initial: { opacity: 0, x: -50 }, 
        animate: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }, 
        exit 
      };
    case 'MOBILE':
      return { 
        initial: { opacity: 0, y: -50 }, 
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.5 } }, 
        exit 
      };
    case 'SOFTWARE':
      return { 
        initial: { opacity: 0, scale: 0.95 }, 
        animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } }, 
        exit 
      };
    case 'MARKETING':
      return { 
        initial: { opacity: 0, scale: 0.8, rotate: -5 }, 
        animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6 } }, 
        exit 
      };
    case 'GRAPHICS':
      return { 
        initial: { opacity: 0, scale: 1.1 }, 
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, 
        exit 
      };
    default: // ALL WORK
      return { 
        initial: { opacity: 0, y: 30 }, 
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
        exit 
      };
  }
};

const Portfolio = () => {
  const [activeWorld, setActiveWorld] = useState(worldThemes["ALL WORK"]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileGrid, setIsMobileGrid] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileGrid(window.innerWidth < 768);
    handleResize(); // Check init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = activeWorld.id === "ALL WORK" 
    ? portfolioData 
    : portfolioData.filter(p => p.category.toUpperCase() === activeWorld.id);

  const handleProjectClick = (project) => {
    if (project.liveUrl && project.liveUrl !== "#") {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      setSelectedProject(project);
    }
  };

  // Render Strategy based on World and Screen Size
  const renderCard = (project) => {
    // If < 768px, force simplicity
    if (isMobileGrid) {
      return <AllCard key={project.id} project={project} onClick={handleProjectClick} />;
    }

    // World-specific renderers
    switch(activeWorld.id) {
      case 'WEB & DIGITAL': return <WebCard key={project.id} project={project} onClick={handleProjectClick} />;
      case 'MOBILE': return <MobileCard key={project.id} project={project} onClick={handleProjectClick} />;
      case 'SOFTWARE': return <SoftwareCard key={project.id} project={project} onClick={handleProjectClick} />;
      case 'MARKETING': return <MarketingCard key={project.id} project={project} onClick={handleProjectClick} />;
      case 'GRAPHICS': return <GraphicsCard key={project.id} project={project} onClick={handleProjectClick} />;
      default: return <AllCard key={project.id} project={project} onClick={handleProjectClick} />;
    }
  };

  const getGridLayoutClass = () => {
    if (isMobileGrid) return "grid grid-cols-1 sm:grid-cols-2 gap-6";
    
    switch(activeWorld.layout) {
      case 'horizontalRows': return "flex flex-col border-t border-white/5";
      case 'phoneFrames': return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center";
      case 'terminalCards': return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
      case 'newspaper': return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-[#FDFBF7]/5 rounded-xl";
      case 'squareGrid': return "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
      default: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"; 
    }
  };

  return (
    <div className={`relative min-h-screen text-white selection:bg-[${activeWorld.accent}] selection:text-black transition-colors duration-500`}>
      
      <CategoryWorldsBackground activeWorld={activeWorld} />

      <main className="relative z-10 w-full xl:max-w-[1920px] mx-auto pb-32">
        <CategoryWorldsHero activeWorld={activeWorld} setActiveWorld={setActiveWorld} />

        {/* The Card Grid Orchestrator */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 w-full mt-12 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorld.id}
              variants={getListVariants(activeWorld.id)}
              initial="initial"
              animate="animate"
              exit="exit"
              // Staggered children applied here
              className={getGridLayoutClass()}
            >
              {filteredProjects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { delay: i * 0.05 } }
                  }}
                >
                  {renderCard(project)}
                </motion.div>
              ))}

              {filteredProjects.length === 0 && (
                <p className="text-center py-20 text-white/30 font-sans w-full">
                  No projects available in this world.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Full Screen Interactive Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay 
            project={selectedProject} 
            activeWorld={activeWorld}
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;
