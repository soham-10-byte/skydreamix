import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, Globe, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    desc: 'Bespoke digital experiences with focus on user-centric aesthetics.',
    icon: <Layout size={24} />,
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Web Dev',
    desc: 'High-performance web applications built with modern frameworks.',
    icon: <Code size={24} />,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'App Dev',
    desc: 'Native and cross-platform mobile solutions for iOS and Android.',
    icon: <Smartphone size={24} />,
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Digital Strategy',
    desc: 'Scalable roadmap for your digital transformation journey.',
    icon: <Globe size={24} />,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'AI Solutions',
    desc: 'Integrating cutting-edge AI to automate and optimize workflows.',
    icon: <Cpu size={24} />,
    color: 'from-blue-600/20 to-indigo-600/20'
  }
];

const MegaMenu = () => {
  return (
    <div className="w-[800px] bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-5 gap-4">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="group/card p-4 rounded-xl border border-transparent hover:border-accent-1/30 hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden"
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-accent-1 mb-4 group-hover/card:scale-110 transition-transform duration-500`}>
            {service.icon}
          </div>
          <h4 className="text-[13px] font-black uppercase tracking-wider mb-2 group-hover/card:text-accent-1 transition-colors">
            {service.title}
          </h4>
          <p className="text-[11px] text-white/50 leading-relaxed mb-4">
            {service.desc}
          </p>
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-accent-1 opacity-0 group-hover/card:opacity-100 transition-opacity">
            Learn More <ArrowRight size={10} />
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-accent-1/5 blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default MegaMenu;
