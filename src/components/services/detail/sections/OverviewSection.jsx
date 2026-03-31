import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TrendingUp, Users, Globe, Zap, CheckCircle, Award, Target, Clock, ShieldCheck, Search, Layout, Code2, Rocket, PenTool, Terminal } from 'lucide-react';

const CountUp = ({ to, prefix = "", suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const duration = 2000;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(easeProgress * to);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isInView, to]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const getStatIcon = (label) => {
  const l = label.toLowerCase();
  if (l.includes('uptime') || l.includes('crash')) return <ShieldCheck className="w-4 h-4 opacity-50" />;
  if (l.includes('vitals') || l.includes('fast') || l.includes('efficiency') || l.includes('roi')) return <Zap className="w-4 h-4 opacity-50" />;
  if (l.includes('rating') || l.includes('award')) return <Award className="w-4 h-4 opacity-50" />;
  if (l.includes('retention') || l.includes('clients') || l.includes('generated') || l.includes('integrated')) return <Users className="w-4 h-4 opacity-50" />;
  if (l.includes('views')) return <TrendingUp className="w-4 h-4 opacity-50" />;
  if (l.includes('rank')) return <Target className="w-4 h-4 opacity-50" />;
  return <TrendingUp className="w-4 h-4 opacity-50" />;
};

const OverviewSection = ({ data }) => {
  const { overview, accent } = data;

  return (
    <section id="overview" className="border-b border-white/5 py-32 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className={`${accent} text-sm font-bold tracking-[0.2em] uppercase`}>Overview</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">The Problem & Our Approach</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-16 items-center pt-10">
        {/* Left: Text & Stats */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {overview.problem}
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <h3 className="text-xl font-bold text-white mb-3">Our Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              {overview.approach}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
            {overview.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className={`text-3xl lg:text-5xl font-black ${accent} mb-2 flex items-baseline gap-2`}>
                  <CountUp to={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  {getStatIcon(stat.label)}
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: SVG Animated Line Art */}
        <motion.div 
          className="relative aspect-square bg-[#0a0d14] rounded-full flex items-center justify-center overflow-hidden border border-white/[0.05]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract SVG that draws itself */}
          <svg className={`w-3/4 h-3/4 opacity-80 ${accent}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              d="M20,50 L40,20 L60,80 L80,50" 
              strokeLinejoin="round"
            />
            <motion.circle 
              cx="20" cy="50" r="3" fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5 }}
            />
            <motion.circle 
              cx="40" cy="20" r="3" fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.6 }}
            />
            <motion.circle 
              cx="60" cy="80" r="3" fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.7 }}
            />
            <motion.circle 
              cx="80" cy="50" r="3" fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.8 }}
            />
          </svg>
          
          {/* subtle moving gradient orb */}
          <motion.div 
            className={`absolute w-32 h-32 blur-[60px] opacity-20 rounded-full ${data.bgAccent}`}
            animate={{ 
              x: [-40, 40, -40],
              y: [-40, 40, -40]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
