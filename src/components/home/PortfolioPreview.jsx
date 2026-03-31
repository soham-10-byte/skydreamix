import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, X, Mouse } from 'lucide-react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'p1',
    num: '01',
    category: 'Web & Digital',
    title: 'Wall Design Hub',
    desc: 'High-end interior design platform with custom catalog management.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    bgImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p2',
    num: '02',
    category: 'Mobile App',
    title: 'EdgeProp: MY PRO Agent',
    desc: 'Real estate agent productivity app with high-speed lead sync.',
    tags: ['React Native', 'Firebase', 'Redux'],
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p3',
    num: '03',
    category: 'Custom Software',
    title: 'EBilling & POS System',
    desc: 'Cloud-based retail management and real-time inventory tracking.',
    tags: ['React', 'Node.js', 'MongoDB'],
    bgImage: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p4',
    num: '04',
    category: 'Digital Marketing',
    title: 'Meta Ads Growth Engine',
    desc: 'Hyper-targeted messaging campaigns driving massive lead generation.',
    tags: ['Meta Ads', 'Funnel Optimization', 'Analytics'],
    bgImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200'
  }
];

const PortfolioPreview = () => {
  const containerRef = useRef(null);
  const wipeRef = useRef(null);
  const imageRefs = useRef([]);
  const [activeScene, setActiveScene] = useState(0); // 0 = Intro, 1-4 = Projects
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [mobileDrawerProject, setMobileDrawerProject] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000", // 500vh total (100vh naturally + 4000px pinned)
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            // Calculate active scene (0 to 4)
            // progress 0 - 0.2 = scene 0
            // progress 0.2 - 0.4 = scene 1
            // progress 0.4 - 0.6 = scene 2
            // progress 0.6 - 0.8 = scene 3
            // progress 0.8 - 1.0 = scene 4
            let scene = Math.floor(self.progress * 5);
            if (scene > 4) scene = 4;
            setActiveScene(scene);
          }
        }
      });

      // We have 4 transitions (Intro->P1, P1->P2, P2->P3, P3->P4)
      projects.forEach((_, i) => {
        // Timeline block for a single project transition
        // Step 1: Wipe in
        tl.to(wipeRef.current, { scaleX: 1, transformOrigin: "left", duration: 1, ease: 'none' })
          
          // Step 1.5: Switch z-indexes seamlessly while wipe hides the screen
          .add(() => {
            imageRefs.current.forEach((el, idx) => {
              if (el) gsap.set(el, { zIndex: idx === i ? 10 : 1 });
            });
            // Reset scale for the incoming image
            if (imageRefs.current[i]) {
              gsap.set(imageRefs.current[i], { scale: 1.15 });
            }
          })

          // Step 2: Wipe out
          .to(wipeRef.current, { scaleX: 0, transformOrigin: "right", duration: 1, ease: 'none' })

          // Step 3: Drift the image while parsing the project
          .to(imageRefs.current[i], { scale: 1.0, duration: 4, ease: 'none' }, "-=1");
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const scrollToScene = (sceneIndex) => {
    if (!containerRef.current || isMobile) return;
    const progress = sceneIndex * 0.2;
    const st = ScrollTrigger.getAll().find(t => t.trigger === containerRef.current);
    if (st) {
      const scrollPos = st.start + (st.end - st.start) * progress;
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    }
  };

  if (isMobile) {
    return (
      <section ref={containerRef} className="py-24 bg-[#020206] w-full overflow-hidden relative z-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] mb-12 text-center">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Our Work</h2>
          <p className="text-[#8892A4] uppercase tracking-widest text-xs font-bold">04 selected projects</p>
        </div>
        
        <div className="flex flex-col gap-8 px-6">
          {projects.map((p, i) => (
            <div 
              key={p.id}
              onClick={() => setMobileDrawerProject(p)}
              className="relative w-full h-[70vw] rounded-2xl overflow-hidden shadow-2xl border border-white/5 active:scale-95 transition-transform"
            >
              <img src={p.bgImage} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[#00E5FF] text-[10px] uppercase font-bold tracking-widest mb-1">{p.category}</p>
                <h3 className="text-2xl font-bold text-white leading-tight">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile App-like CTA end section */}
        <div className="mt-24 px-6 text-center border-t border-white/5 pt-16">
          <h3 className="text-3xl font-black text-white mb-6">Ready to see more?</h3>
          <button className="bg-[#00E5FF] text-[#0A0D14] w-full px-8 py-5 rounded-full font-black uppercase tracking-widest text-xs">
            View Full Portfolio
          </button>
          <p className="text-[#8892A4] mt-6 text-xs font-medium">48+ completed projects across 10+ countries</p>
        </div>

        {/* Framer Motion Drawer */}
        <AnimatePresence>
          {mobileDrawerProject && (
            <motion.div
              className="fixed inset-0 z-[200] flex flex-col justify-end pointer-events-none"
            >
              <motion.div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileDrawerProject(null)}
              />
              <motion.div
                className="w-full bg-[#0A0D14] h-[85vh] rounded-t-3xl border-t border-white/10 relative z-10 pointer-events-auto flex flex-col"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 100) setMobileDrawerProject(null);
                }}
              >
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4 mb-8" />
                
                <div className="px-8 pb-8 overflow-y-auto flex-1">
                  <p className="text-[#00E5FF] text-xs uppercase font-bold tracking-widest mb-3">{mobileDrawerProject.category}</p>
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">{mobileDrawerProject.title}</h3>
                  <p className="text-[#8892A4] text-sm leading-relaxed mb-8">{mobileDrawerProject.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {mobileDrawerProject.tags.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className="w-full border border-[#00E5FF]/40 text-[#00E5FF] px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                    Explore Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }

  // DESKTOP: Full ScrollTrigger Cinematic Experience
  return (
    <>
      <section ref={containerRef} className="w-full h-screen bg-[#020206] overflow-hidden relative">
        
        {/* Layer A: Image Backgrounds & Intro */}
        <div className="absolute inset-0 z-0">
          {/* Intro Screen (Scene 0) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
            <h2 className="text-[120px] font-black text-white uppercase tracking-tighter leading-none">Our Work</h2>
            <p className="text-[#8892A4] text-base mt-2 tracking-[0.2em] uppercase font-bold">04 selected projects</p>
            <div className="mt-16 flex flex-col items-center gap-4 text-[#8892A4] animate-bounce">
              <Mouse className="w-8 h-8" />
              <span className="text-[10px] tracking-widest uppercase font-bold">Scroll Down</span>
            </div>
          </div>

          {/* Project Images (Scenes 1-4) */}
          {projects.map((p, i) => (
            <div 
              key={p.id} 
              className="absolute inset-0"
              style={{ zIndex: 1, display: activeScene > 0 ? 'block' : 'none' }}
              ref={el => imageRefs.current[i] = el}
            >
              <img src={p.bgImage} alt={p.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Layer B: Dark Overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(2,2,6,1) 0%, rgba(2,2,6,0.6) 30%, transparent 100%)',
            opacity: activeScene > 0 ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        />

        {/* Layer C: Active Scene Content (Snappy Framer Motion) */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-end">
          <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] pb-24 relative">
            <AnimatePresence mode="wait">
              {activeScene > 0 && (
                <motion.div 
                  key={activeScene}
                  className="max-w-3xl pointer-events-auto relative"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  {/* Giant Background Number */}
                  <div className="absolute -left-12 -bottom-16 text-[180px] font-black leading-none text-white/[0.04] pointer-events-none z-0">
                    {projects[activeScene - 1].num}
                  </div>

                  <div className="relative z-10">
                    <p className="text-[#00E5FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                      {projects[activeScene - 1].category}
                    </p>
                    <h3 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      {projects[activeScene - 1].title}
                    </h3>
                    <p className="text-[#8892A4] text-lg mb-8 max-w-xl">
                      {projects[activeScene - 1].desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-12">
                      {projects[activeScene - 1].tags.map((tag, idx) => (
                        <motion.span 
                          key={tag}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (idx * 0.1) }}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <a href="#" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm border-b border-white/30 pb-1 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-colors group">
                      Explore Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Layer D: Cyan Wipe Panel */}
        <div 
          ref={wipeRef}
          className="absolute inset-0 bg-[#00E5FF] z-30 pointer-events-none"
          style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
        />

        {/* PERSISTENT UI */}
        {/* Right Side Dots */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              onClick={() => scrollToScene(i)}
              className="group flex items-center justify-end w-8 h-8 cursor-pointer"
            >
              <div 
                className={`transition-all duration-300 rounded-full ${
                  activeScene === i 
                    ? 'h-6 w-1.5 bg-[#00E5FF]' 
                    : 'h-1.5 w-1.5 bg-white/30 group-hover:bg-white/60'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Top Right Counter */}
        <div className="absolute top-12 right-12 z-40 overflow-hidden h-8 flex items-center">
          <div className="text-white text-lg font-bold tracking-widest uppercase flex items-center gap-2">
            <div className="relative h-full overflow-hidden w-6 text-right">
              <AnimatePresence mode="popLayout">
                <motion.span 
                  key={activeScene}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 flex items-center justify-end"
                >
                  0{activeScene === 0 ? 1 : activeScene}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-white/30">/</span> 04
          </div>
        </div>

        {/* Bottom Left Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-40">
          <div 
            className="h-full bg-[#00E5FF]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

      </section>

      {/* After Unpin CTA */}
      {!isMobile && (
        <section className="py-32 bg-[#020206] border-t border-white/[0.05] flex flex-col items-center justify-center text-center">
          <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px]">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter">Ready to see more?</h2>
            <button className="bg-[#00E5FF] text-[#0A0D14] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all hover:scale-105 group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                View Full Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-300 z-0" />
            </button>
            <p className="text-[#8892A4] mt-8 text-sm font-medium tracking-widest uppercase">
              48+ completed projects across 10+ countries
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default PortfolioPreview;
