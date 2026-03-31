import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  {
    title: "MSME Registered",
    subtitle: "Government of India",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-accent-1/20 to-accent-1/5",
    border: "border-accent-1/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
  },
  {
    title: "100% Satisfaction",
    subtitle: "Client Guarantee",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary pb-32">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk">
            Recognized for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our commitment to quality, security, and client satisfaction is backed by global and national standards.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group flex flex-col items-center text-center p-10 rounded-3xl bg-gradient-to-b ${cert.color} border ${cert.border} backdrop-blur-sm transition-all duration-500 ${cert.glow}`}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 font-medium">{cert.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
