import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const techLogos = [
  "React", "Node.js", "Python", "Flutter", "AWS", "Figma", 
  "Next.js", "MongoDB", "Docker", "Tailwind", "GSAP", "Three.js"
];

const stats = [
  { label: 'Projects', value: 100, suffix: '+' },
  { label: 'Happy Clients', value: 200, suffix: '+' },
  { label: 'Marketing Partners', value: 20, suffix: '+' },
  { label: 'Countries', value: 10, suffix: '+' },
];

const pills = [
  "ISO Certified", "MSME Registered", "Google Partner", "98% Satisfaction", "24/7 Support"
];

const StatCounter = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const countRef = useRef(null);

  useEffect(() => {
    if (isInView && countRef.current) {
      gsap.fromTo(countRef.current, 
        { innerText: 0 }, 
        { 
          innerText: stat.value, 
          duration: 2.5, 
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate: function() {
            countRef.current.innerText = Math.floor(this.targets()[0].innerText);
          }
        }
      );
    }
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-8 border-r last:border-r-0 border-white/10">
      <div className="flex items-baseline gap-1 mb-2">
        <span 
          ref={countRef}
          className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-tighter"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          0
        </span>
        <span className="text-4xl md:text-5xl font-bold text-cyan-400/50">{stat.suffix}</span>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 font-black">
        {stat.label}
      </span>
    </div>
  );
};

const Stats = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    const totalWidth = marquee.scrollWidth / 2;
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1
    });
  }, []);

  return (
    <section className="relative py-24 bg-black border-t border-white/5">
      {/* Background Texture */}
      <div className="absolute inset-0 diagonal-grid opacity-10 pointer-events-none" />

      {/* Part A: Tech Marquee */}
      <div className="relative w-full bg-black/80 border-y border-white/5 py-10 overflow-hidden mb-24">
        <div ref={marqueeRef} className="flex whitespace-nowrap gap-12 px-6">
          {[...techLogos, ...techLogos].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-default px-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Part B: Stats Grid */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Part C: Achievement Pills */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] flex flex-wrap justify-center gap-4">
        {pills.map((pill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="px-6 py-3 border border-cyan-400/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-cyan-400/60 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300 cursor-default"
          >
            {pill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
