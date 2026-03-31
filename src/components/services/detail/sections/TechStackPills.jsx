import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Server, Cloud, Database, Terminal, 
  Box, Blocks, Zap, Variable, BarChart3, 
  Search, Target, Users, Mail, Video, 
  Film, PenTool, Layout, Smartphone, Flame, 
  Palette, Globe, Layers, Code2
} from 'lucide-react';

const getTechIcon = (name, type) => {
  const n = name.toLowerCase();
  if (n.includes('react')) return <Atom className="w-5 h-5" />;
  if (n.includes('next.js')) return <Layers className="w-5 h-5" />;
  if (n.includes('node')) return <Server className="w-5 h-5" />;
  if (n.includes('aws')) return <Cloud className="w-5 h-5" />;
  if (n.includes('tailwind')) return <Palette className="w-5 h-5" />;
  if (n.includes('python')) return <Variable className="w-5 h-5" />;
  if (n.includes('docker')) return <Box className="w-5 h-5" />;
  if (n.includes('postgres')) return <Database className="w-5 h-5" />;
  if (n.includes('go')) return <Zap className="w-5 h-5" />;
  if (n.includes('kubernetes')) return <Blocks className="w-5 h-5" />;
  if (n.includes('google analytics') || n.includes('ga')) return <BarChart3 className="w-5 h-5" />;
  if (n.includes('ahrefs')) return <Search className="w-5 h-5" />;
  if (n.includes('meta ads')) return <Target className="w-5 h-5" />;
  if (n.includes('hubspot')) return <Users className="w-5 h-5" />;
  if (n.includes('mailchimp')) return <Mail className="w-5 h-5" />;
  if (n.includes('figma')) return <Layout className="w-5 h-5" />;
  if (n.includes('after effects')) return <Video className="w-5 h-5" />;
  if (n.includes('premiere')) return <Film className="w-5 h-5" />;
  if (n.includes('blender')) return <Box className="w-5 h-5" />;
  if (n.includes('illustrator')) return <PenTool className="w-5 h-5" />;
  if (n.includes('mern')) return <Layers className="w-5 h-5" />;
  if (n.includes('firebase')) return <Flame className="w-5 h-5" />;
  if (n.includes('flutter')) return <Smartphone className="w-5 h-5" />;
  if (n.includes('git')) return <Code2 className="w-5 h-5" />;
  
  // Category fallbacks
  if (type === 'Frontend') return <Layout className="w-5 h-5" />;
  if (type === 'Backend') return <Server className="w-5 h-5" />;
  if (type === 'Cloud') return <Cloud className="w-5 h-5" />;
  if (type === 'Tools') return <Terminal className="w-5 h-5" />;
  
  return <Terminal className="w-5 h-5" />;
};

const TechLogo = ({ name, type, accent }) => {
  return (
    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-${accent}/50 transition-all duration-500 shadow-xl text-white/70 group-hover:text-white`}>
      {getTechIcon(name, type)}
    </div>
  );
};

const TechStackPills = ({ data }) => {
  const [filter, setFilter] = useState('All');
  const [activeTech, setActiveTech] = useState(data.techStack[0]);
  const constraintsRef = useRef(null);
  const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Tools'];

  const filteredStack = filter === 'All' 
    ? data.techStack 
    : data.techStack.filter(item => item.category === filter);

  return (
    <section id="techstack" className="border-b border-white/5 py-32 scroll-mt-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className={`${data.accent} text-sm font-bold tracking-[0.3em] uppercase mb-4 block`}>Technologies</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">Our Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Powerhouse</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just use tools; we master them. Our stack is curated for maximum performance, 
              security, and developer velocity. Drag them around, explore our expertise.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-1.5 bg-white/[0.03] backdrop-blur-xl p-1.5 rounded-2xl border border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                  filter === cat 
                    ? `${data.bgAccent} text-white shadow-lg shadow-${data.accent}/20` 
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Draggable Grid */}
          <div ref={constraintsRef} className="relative min-h-[400px] p-8 bg-white/[0.01] rounded-3xl border border-white/5 backdrop-blur-3xl overflow-hidden">
            <motion.div layout className="flex flex-wrap gap-4">
              <AnimatePresence mode="popLayout">
                {filteredStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    onClick={() => setActiveTech(tech)}
                    className={`group cursor-grab active:cursor-grabbing relative ${activeTech?.name === tech.name ? 'z-20' : 'z-10'}`}
                  >
                    <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-500 ${
                      activeTech?.name === tech.name 
                        ? `bg-white/10 border-${data.accent}/30 shadow-2xl` 
                        : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                    }`}>
                      <TechLogo name={tech.name} type={tech.category} accent={data.accent} />
                      <div className="flex flex-col">
                        <span className={`text-sm font-bold transition-colors ${activeTech?.name === tech.name ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                          {tech.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{tech.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Spotlight Detail Card */}
          <motion.div 
            key={activeTech?.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32 p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl"
          >
            <div className={`w-16 h-16 rounded-2xl ${data.bgAccent} flex items-center justify-center mb-8 shadow-2xl shadow-${data.accent}/20 text-white`}>
              {getTechIcon(activeTech?.name, activeTech?.category)}
            </div>
            
            <span className={`${data.accent} text-xs font-black tracking-widest uppercase mb-2 block`}>{activeTech?.category}</span>
            <h3 className="text-4xl font-black text-white mb-6 leading-tight">{activeTech?.name}</h3>
            
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                {activeTech?.usage}
              </p>
              
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 text-white/60 group cursor-pointer hover:text-white transition-colors">
                  <span className="text-sm font-bold">Explore integration</span>
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all`}>
                    →
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackPills;

