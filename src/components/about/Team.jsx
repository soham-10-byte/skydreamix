import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Founder & CEO",
    initials: "AS",
    bio: "Visionary leader with 10+ years in digital transformation and enterprise architecture.",
    skills: ["Leadership", "Strategy", "System Design"],
    color: "from-blue-600 to-accent-1"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Chief Technology Officer",
    initials: "PP",
    bio: "Full-stack maven driving our technical innovation and engineering excellence.",
    skills: ["React", "Node.js", "Cloud Dev"],
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Head of Design",
    initials: "RG",
    bio: "Award-winning designer obsessed with pixel-perfect and highly functional interfaces.",
    skills: ["UI/UX", "Figma", "Three.js"],
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 4,
    name: "Sneha Desai",
    role: "Lead Developer",
    initials: "SD",
    bio: "Frontend specialist building robust, scalable, and fully animated web experiences.",
    skills: ["Vue", "Tailwind", "GSAP"],
    color: "from-green-500 to-emerald-400"
  }
];

const jobs = [
  {
    id: "frontend",
    title: "Senior Frontend Engineer",
    type: "Full-time • Remote",
    description: "We are looking for a highly skilled React developer with deep expertise in Framer Motion, GSAP, and Three.js to build premium digital experiences."
  },
  {
    id: "backend",
    title: "Backend Node.js Developer",
    type: "Full-time • Global",
    description: "Join us to architect scalable microservices, manage database clusters, and ensure enterprise-level security for our international clients."
  },
  {
    id: "design",
    title: "UI/UX Product Designer",
    type: "Contract • Hybrid",
    description: "Seeking a visionary designer who bridges the gap between clean aesthetics and highly engaging, functional user journeys."
  }
];

// Flip Card Component
const TeamCard = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full h-[360px] [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] transition-all duration-700 ease-in-out cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors">
          <div className={`w-28 h-28 rounded-full mb-6 flex items-center justify-center text-3xl font-bold bg-gradient-to-br ${member.color} shadow-lg ring-4 ring-white/5`}>
            {member.initials}
          </div>
          <h3 className="text-2xl font-bold font-grotesk text-white mb-2">{member.name}</h3>
          <p className="text-gray-400 font-medium mb-4">{member.role}</p>
          <div className="w-12 h-1 bg-accent-1 rounded-full mx-auto" />
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] bg-accent-1/5 border border-accent-1/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            "{member.bio}"
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {member.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 text-xs text-white rounded-full">
                {skill}
              </span>
            ))}
          </div>
          {/* LinkedIn Mock Icon */}
          <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(10,102,194,0.4)]">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CareersAccordion = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
        <div>
          <h3 className="text-3xl font-bold font-grotesk text-white mb-2 flex items-center gap-4">
            Join Our Team
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-1 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-1"></span>
            </span>
          </h3>
          <p className="text-gray-400">We're always looking for brilliant minds.</p>
        </div>
        <div className="inline-block mt-4 md:mt-0 px-4 py-1.5 rounded-full bg-accent-1/10 border border-accent-1/20 text-accent-1 text-sm font-medium">
          WE'RE HIRING
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => {
          const isExpanded = expandedId === job.id;
          return (
            <div key={job.id} className="border border-white/5 rounded-2xl overflow-hidden bg-black/20">
              <button 
                onClick={() => setExpandedId(isExpanded ? null : job.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-accent-1 transition-colors">{job.title}</h4>
                  <p className="text-sm text-gray-400">{job.type}</p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0"
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-white/5">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      <button className="px-6 py-2.5 bg-accent-1 text-black text-sm font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-1/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10">
        
        {/* Section Heading with Underline Draw effect */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-1 text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            The Minds Behind It
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-white inline-block relative">
            Meet the Masters
            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-accent-1 to-transparent origin-left rounded-r-full"
            />
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* Careers Section */}
        <div className="mt-32">
          <CareersAccordion />
        </div>

      </div>
    </section>
  );
};

export default Team;
