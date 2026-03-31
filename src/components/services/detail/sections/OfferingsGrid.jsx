import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDown, Layers, ShoppingBag, Database, 
  Move, Smartphone, Code2, Monitor, 
  Zap, Atom, RotateCcw, Watch, 
  Cpu, Users, Layout, History, 
  Wifi, Search, FileText, Target, 
  Share2, Mail, TrendingUp, Palette, 
  Box, Video, Package, Camera, 
  GraduationCap, Settings, BarChart, Briefcase
} from 'lucide-react';

const getOfferingIcon = (id) => {
  const map = {
    // Web
    w1: <Layers size={22} />, w2: <ShoppingBag size={22} />, w3: <Database size={22} />,
    w4: <Move size={22} />, w5: <Smartphone size={22} />, w6: <Code2 size={22} />,
    // Mobile
    m1: <Smartphone size={22} />, m2: <Smartphone size={22} />, m3: <Zap size={22} />,
    m4: <Atom size={22} />, m5: <RotateCcw size={22} />, m6: <Watch size={22} />,
    // Custom Software
    c1: <Cpu size={22} />, c2: <Users size={22} />, c3: <Layout size={22} />,
    c4: <History size={22} />, c5: <Database size={22} />, c6: <Wifi size={22} />,
    // Marketing
    d1: <Search size={22} />, d2: <FileText size={22} />, d3: <Target size={22} />,
    d4: <Share2 size={22} />, d5: <Mail size={22} />, d6: <TrendingUp size={22} />,
    // Graphics
    g1: <Palette size={22} />, g2: <Box size={22} />, g3: <Video size={22} />,
    g4: <Layout size={22} />, g5: <Package size={22} />, g6: <Camera size={22} />,
    // Academy
    i1: <Code2 size={22} />, i2: <Palette size={22} />, i3: <Settings size={22} />,
    i4: <BarChart size={22} />, i5: <Briefcase size={22} />, i6: <GraduationCap size={22} />
  };
  return map[id] || <Code2 size={22} />;
};

const FlipCard = ({ item, accent, bgAccent, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="perspective-1000 h-[320px] w-full group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div style={{ backfaceVisibility: "hidden" }} className="absolute inset-0 bg-[#0A0D14] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
          {/* Subtle gradient hover bg */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${bgAccent}`} />
          
          <div>
            <div className={`w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 text-white/80 group-hover:text-white transition-colors`}>
               {getOfferingIcon(item.id)}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 mt-6">
            <span className={`${accent}`}>Learn more</span>
            <ArrowDown className={`w-4 h-4 ${accent} transition-transform group-hover:translate-y-1`} />
          </div>
        </div>

        {/* BACK */}
        <div 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }} 
          className="absolute inset-0 bg-[#0A0D14] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-center overflow-hidden"
        >
          <h4 className={`text-sm tracking-widest uppercase font-bold mb-6 ${accent}`}>Key Features</h4>
          <ul className="space-y-4">
            {item.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${bgAccent}`} />
                <span className="text-gray-300 font-medium text-sm">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

      </motion.div>
    </motion.div>
  );
};

const OfferingsGrid = ({ data }) => {
  return (
    <section id="offerings" className="border-b border-white/5 py-32 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className={`${data.accent} text-sm font-bold tracking-[0.2em] uppercase`}>Deliverables</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">What We Offer</h2>
        </div>
        <p className="text-gray-400 max-w-sm text-sm">
          Comprehensive methodologies and deliverables tailored to {data.name.toLowerCase()} ensuring maximum scalability and impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {data.offerings.map((item, index) => (
          <FlipCard 
            key={item.id} 
            item={item} 
            index={index} 
            accent={data.accent} 
            bgAccent={data.bgAccent} 
          />
        ))}
      </div>
    </section>
  );
};

export default OfferingsGrid;
