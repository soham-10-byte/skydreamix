import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Cpu, Users, Clock, ShieldCheck, HeadphonesIcon, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: '01',
    num: 1,
    title: 'Cutting-Edge Tech Stack',
    description: 'We leverage the latest frameworks to build lightning-fast, scalable digital experiences tailored for your growth.',
    icon: Cpu,
    stat: '15+ frameworks mastered'
  },
  {
    id: '02',
    num: 2,
    title: 'Elite Expert Team',
    description: 'Our seasoned developers and designers bring deep industry expertise and creative vision to every single project.',
    icon: Users,
    stat: '50+ dedicated professionals'
  },
  {
    id: '03',
    num: 3,
    title: 'Rapid On-Time Delivery',
    description: 'We respect your timeline. Our agile methodology ensures predictable, rapid deployments without sacrificing quality.',
    icon: Clock,
    stat: '98% on-time delivery rate'
  },
  {
    id: '04',
    num: 4,
    title: 'Enterprise Security',
    description: 'Your data is locked down. We implement enterprise-grade security protocols, encryption, and testing from day one.',
    icon: ShieldCheck,
    stat: 'Zero data breaches — ever'
  },
  {
    id: '05',
    num: 5,
    title: '24/7 Priority Support',
    description: 'We are always here for you. Our dedicated support team ensures your systems run flawlessly around the clock.',
    icon: HeadphonesIcon,
    stat: '< 2hr avg response time'
  },
  {
    id: '06',
    num: 6,
    title: 'Maximized ROI',
    description: 'Premium quality tailored to your budget. We build optimized solutions that significantly minimize operational costs.',
    icon: TrendingUp,
    stat: '3× avg client ROI reported'
  }
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const progressBarRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 1024px)", () => {
      // DESKTOP: Left column enter animation
      if (headingRef.current && subtitleRef.current) {
        const splitText = new SplitType(headingRef.current, { types: 'lines' });
        
        gsap.from(splitText.lines, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        });

        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        });
      }

      // DESKTOP: ScrollTrigger Pinning and Scrubbing
      const numFeatures = features.length;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${numFeatures * 600}`, 
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, { scaleY: progress });
          }

          const segment = 1 / numFeatures;
          let currentIndex = Math.floor(progress / segment);
          if (currentIndex >= numFeatures) currentIndex = numFeatures - 1;
          
          setActiveIndex(currentIndex);
        }
      });
    });

    ctx.add("(max-width: 1023px)", () => {
      // MOBILE: No pinning. Heading scrolls normally. Features stack and trigger on view.
      // We don't use the scrubber, we just use simple active states or let them all be open/expandable.
      // For mobile, let's just make them all active or use IntersectionObserver to set activeIndex.
      const rows = gsap.utils.toArray('.feature-mobile-row');
      
      rows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i)
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050505] min-h-screen text-white relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 w-full max-w-[1920px]">
        
        {/* LEFT COLUMN: Sticky / Pinned Info */}
        <div 
          ref={leftColRef}
          className="lg:w-[35%] w-full flex flex-col justify-center relative lg:h-[70vh] items-center lg:items-start text-center lg:text-left"
        >
          <p className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-sm mb-6">
            Why Us
          </p>
          <h2 
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold leading-tight mb-8"
          >
            Why Choose<br/>SkyDreamix?
          </h2>
          <p 
            ref={subtitleRef}
            className="text-[#8892A4] text-lg max-w-md mb-16 leading-relaxed"
          >
            We blend technical excellence with strategic vision to deliver digital solutions that fundamentally transform global businesses.
          </p>

          {/* Progress Tracker Area */}
          <div className="flex gap-8 items-stretch mt-auto">
            {/* Progress Bar Track */}
            <div className="w-[1px] bg-white/10 relative h-32 ml-2">
              <div 
                ref={progressBarRef}
                className="absolute top-0 left-0 w-full bg-[#00E5FF] origin-top h-full"
                style={{ transform: 'scaleY(0)' }}
              />
            </div>
            
            {/* Active Counter */}
            <div className="flex flex-col justify-between py-2">
              <div className="text-4xl font-black text-white tracking-tighter">
                0{activeIndex + 1}
                <span className="text-[#8892A4] text-xl font-medium tracking-normal ml-2">
                  / 06
                </span>
              </div>
              <p className="text-sm text-[#00E5FF] font-semibold uppercase tracking-widest">
                Features
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Feature Accordion */}
        <div className="lg:w-[65%] w-full flex flex-col justify-center">
          <div className="border-t border-white/5">
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;
              const Icon = feature.icon;

              return (
                <div 
                  key={feature.id}
                  className={`feature-mobile-row relative border-b border-white/[0.06] transition-colors duration-500 overflow-hidden ${
                    isActive ? 'bg-[#00E5FF]/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) setActiveIndex(idx);
                  }}
                >
                  {/* Left accent line */}
                  <div 
                    className={`absolute left-0 top-0 w-[2px] bg-[#00E5FF] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? 'h-full scale-y-100' : 'h-full scale-y-0 origin-top'
                    }`}
                  />

                  <div className="px-6 md:px-10 py-6 md:py-8 flex flex-col justify-center min-h-[80px]">
                    <div className="flex items-center justify-between w-full cursor-pointer">
                      <h3 className={`text-xl md:text-2xl font-semibold transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-white/60'
                      }`}>
                        {feature.title}
                      </h3>
                      <span className={`text-3xl md:text-5xl font-black transition-all duration-500 ${
                        isActive ? 'text-[#00E5FF]' : 'text-[#00E5FF]/[0.12]'
                      }`}>
                        {feature.id}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 pb-4 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
                            
                            {/* Icon sliding in */}
                            <motion.div
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                              className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 flex items-center justify-center shrink-0 border border-[#00E5FF]/20"
                            >
                              <Icon className="w-8 h-8 text-[#00E5FF]" strokeWidth={1.5} />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                              className="text-[#8892A4] text-[15px] leading-[1.8] flex-1"
                            >
                              {feature.description}
                            </motion.p>

                            {/* Stat */}
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                              className="shrink-0 lg:text-right"
                            >
                              <p className="text-white font-bold text-lg max-w-[180px] leading-snug">
                                {feature.stat}
                              </p>
                            </motion.div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
