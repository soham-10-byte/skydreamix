import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, accent }) => {
  return (
    <motion.div 
      className="relative shrink-0 w-[300px] md:w-[450px] group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-500">
        {/* Project Image */}
        <img 
          src={project.thumb} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Action Button */}
        <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent-1 hover:scale-110 transition-all"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h4>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
            {project.desc}
          </p>
          <div className={`w-12 h-1 ${accent} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200`} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsCarousel = ({ data }) => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useTransform(scrollXProgress, [0, 1], [0.1, 1]);

  if (!data?.projects || data.projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className={data.accent}>Success</span> Stories
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Explore our real-world implementations for this service, spanning across international industries and technologies.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
            <span>Scroll horizontally</span>
            <ArrowRight size={16} className="animate-pulse" />
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 sm:px-12 lg:px-24 pb-12 no-scrollbar cursor-grab active:cursor-grabbing snap-x"
      >
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} accent={data.bgAccent} />
        ))}
        {/* Spacer for end pull */}
        <div className="shrink-0 w-24 h-10" />
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 mt-4">
        <div className="h-[2px] w-full bg-white/10 rounded-full relative overflow-hidden">
          <motion.div 
            className={`absolute top-0 left-0 h-full ${data.bgAccent}`}
            style={{ scaleX, originX: 0, width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
