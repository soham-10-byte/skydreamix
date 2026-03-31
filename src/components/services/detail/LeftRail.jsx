import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Layers, 
  Cpu, 
  Workflow, 
  CreditCard, 
  HelpCircle,
  Phone,
  Briefcase
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'offerings', label: 'What We Offer', icon: Layers },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'techstack', label: 'Tech Stack', icon: Cpu },
  { id: 'process', label: 'Our Process', icon: Workflow },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'faq', label: 'FAQ', icon: HelpCircle }
];

const LeftRail = ({ data }) => {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    // Intersection Observer for scrolling logic
    const observers = [];
    const elements = SECTIONS.map(s => document.getElementById(s.id));

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0.2, 0.5, 0.8]
    });

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100, // offset for fixed headers
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="hidden md:flex flex-col w-[64px] lg:w-[240px] sticky top-0 h-screen overflow-y-auto bg-[#080B14]/80 backdrop-blur-xl border-r border-white/[0.06] shrink-0 custom-scrollbar z-40">
      
      {/* Top Details */}
      <div className="p-4 lg:p-6 mb-2 border-b border-white/5 flex items-center lg:items-start flex-col gap-2">
        <div className={`w-8 h-8 rounded-lg ${data.bgAccent}/20 border border-${data.borderAccent}/30 flex items-center justify-center shrink-0`}>
          {/* using generic globe since dynamic icon rendering from string is complex without a map */}
          <div className={`w-4 h-4 rounded-full ${data.bgAccent}`} />
        </div>
        <div className="hidden lg:block mt-2">
          <p className="text-white text-sm font-semibold tracking-wide">{data.name}</p>
          <p className="text-xs text-gray-500">Service Gateway</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`w-full relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${
                isActive 
                  ? `${data.bgAccent}/10 text-${data.accent}` 
                  : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'
              }`}
            >
              <div className="relative shrink-0 flex items-center justify-center w-6 h-6">
                <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} className={isActive ? data.accent : ''} />
              </div>

              <span className={`hidden lg:block text-sm font-medium transition-colors ${isActive ? data.accent : ''}`}>
                {section.label}
              </span>

              {/* Active Indicator Bar */}
              {isActive && (
                <motion.div 
                  layoutId="activeRail"
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-2/3 ${data.bgAccent} rounded-r-md hidden lg:block`}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Action */}
      <div className="p-4 lg:p-6 border-t border-white/5 mt-auto">
        <button className={`w-full ${data.bgAccent} hover:opacity-80 text-white font-bold py-3 rounded-lg text-sm transition-opacity hidden lg:block`}>
          Get Quote
        </button>
        <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start text-xs text-gray-500 hidden lg:flex">
          <Phone size={12} />
          <span>+91 98765 43210</span>
        </div>
      </div>
    </aside>
  );
};

export default LeftRail;
