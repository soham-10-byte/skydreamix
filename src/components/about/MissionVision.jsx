import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-1/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card (Cyan Accent) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative p-10 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-accent-1/30 transition-colors duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent-1/10 border border-accent-1/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold font-grotesk text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower businesses through cutting-edge technology and exceptional design, delivering scalable digital solutions that drive growth, efficiency, and long-term success in a rapidly evolving market.
              </p>
            </div>
          </motion.div>

          {/* Vision Card (White Accent) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="group relative p-10 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold font-grotesk text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To be the global benchmark for creative technology agencies, shaping the future of digital interactions and fostering an ecosystem where innovation and human connection thrive seamlessly.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
