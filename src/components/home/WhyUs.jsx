import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Users, Clock, ShieldCheck, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: '01',
    num: 1,
    title: 'Cutting-Edge Tech Stack',
    description: 'We leverage the latest frameworks to build lightning-fast, scalable digital experiences.',
    icon: Cpu,
    className: 'lg:col-span-2 md:col-span-2 col-span-1',
    pills: ['React', 'Node.js', 'Flutter', 'AWS', 'Next.js']
  },
  {
    id: '02',
    num: 2,
    title: 'Elite Expert Team',
    description: 'Our seasoned developers and designers bring deep industry expertise to every project.',
    icon: Users,
    className: 'lg:col-span-1 md:col-span-1 col-span-1'
  },
  {
    id: '03',
    num: 3,
    title: 'Rapid On-Time Delivery',
    description: 'We respect your timeline. Our agile methodology ensures predictable, rapid deployments.',
    icon: Clock,
    className: 'lg:col-span-1 md:col-span-1 lg:row-span-2 md:row-span-2 col-span-1 min-h-[420px]',
    metric: '98% On-Time Rate',
    metricVal: 98
  },
  {
    id: '04',
    num: 4,
    title: 'Enterprise Security',
    description: 'Your data is locked down. We implement enterprise-grade security protocols from day one.',
    icon: ShieldCheck,
    className: 'lg:col-span-1 md:col-span-1 col-span-1'
  },
  {
    id: '05',
    num: 5,
    title: '24/7 Priority Support',
    description: 'We are always here for you. Our dedicated support team ensures your systems run flawlessly.',
    icon: HeadphonesIcon,
    className: 'lg:col-span-2 md:col-span-2 col-span-1'
  },
  {
    id: '06',
    num: 6,
    title: 'Maximized ROI',
    description: 'Premium quality tailored to your budget. Optimized solutions that minimize operational costs.',
    icon: TrendingUp,
    className: 'lg:col-span-1 md:col-span-1 col-span-1'
  }
];

const AnimatedCounter = ({ target, duration, startTrigger, padZeroes = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;
    
    let obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.round(obj.val));
      }
    });
  }, [target, duration, startTrigger]);

  return <>{padZeroes && count < 10 ? `0${count}` : count}</>;
};

const BentoCard = ({ feature, index, animateState }) => {
  const Icon = feature.icon;
  const cardRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !borderRef.current) return;

    // Initial state setup for ScrollReveal is handled by the parent grid animation,
    // but we can trace the top border individually when it enters.
    if (animateState) {
      gsap.fromTo(borderRef.current, 
        { width: "0%" },
        { 
          width: "100%", 
          duration: 1, 
          ease: "power3.inOut", 
          delay: 0.5 + (index * 0.12)
        }
      );
    }
  }, [animateState, index]);

  return (
    <div
      ref={cardRef}
      className={`bento-card relative flex flex-col justify-between p-7 rounded-[40px] bg-[#0D1117] border border-[#00E5FF]/[0.08] overflow-hidden group hover:-translate-y-1 transition-all duration-[300ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${feature.className} interactive`}
      style={{
        minHeight: feature.id === '03' ? '420px' : '200px'
      }}
      initial-scale="0.88"
      initial-y="40"
    >
      {/* Top Cyan Traced Border */}
      <div 
        ref={borderRef}
        className="absolute top-0 left-0 h-[1px] bg-[#00E5FF] w-0 pointer-events-none opacity-50"
      />

      {/* Hover Cyan Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-[#00E5FF] w-full origin-left scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-x-100 pointer-events-none" />

      {/* Hover Glow using CSS box-shadow (applied via group-hover in external class or custom inline style) */}
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(0,229,255,0.3),0_0_30px_rgba(0,229,255,0.06)]" />

      {/* Top Row: Icon & Ghost Number */}
      <div className="flex justify-between items-start relative z-10 w-full mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#1A1F2B] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#00E5FF]/[0.12]">
          <Icon className="w-6 h-6 text-gray-400 transition-colors duration-[200ms] ease-[spring] group-hover:text-[#00E5FF]" strokeWidth={1.5} />
        </div>
        
        <div className="text-[64px] font-[800] leading-none text-[#00E5FF] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.14] select-none -mt-4 mr-1">
          <AnimatedCounter target={feature.num} duration={1.5} startTrigger={animateState} padZeroes={true} />
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-auto relative z-10 w-full flex flex-col flex-1 pb-1">
        <h3 className="text-[20px] font-bold text-white tracking-tight mb-2 mt-auto">
          {feature.title}
        </h3>
        <p className="text-[14px] text-[#8892A4] leading-[1.7]">
          {feature.description}
        </p>

        {/* Dynamic Additions based on Feature */}
        {feature.pills && (
          <div className="flex flex-wrap gap-2 mt-6">
            {feature.pills.map((pill, i) => (
              <span key={i} className="px-3 py-1 text-[12px] font-semibold text-[#00E5FF]/80 bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/20 backdrop-blur-sm">
                {pill}
              </span>
            ))}
          </div>
        )}

        {feature.metric && (
          <div className="mt-10 lg:mt-auto pt-4 border-t border-[#00E5FF]/10">
            <p className="text-[#00E5FF] font-black text-3xl tracking-tighter flex items-end gap-1">
              <AnimatedCounter target={feature.metricVal} duration={2.5} startTrigger={animateState} />
              <span className="text-xl">%</span>
            </p>
            <p className="text-[12px] font-semibold text-[#8892A4] uppercase tracking-wider mt-1">
              On-Time Rate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const WhyUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const blobRef = useRef(null);
  const [animateState, setAnimateState] = useState(false);

  useEffect(() => {
    // Blob Drift Animation
    if (blobRef.current) {
      gsap.fromTo(blobRef.current, 
        { y: -20 },
        { y: 20, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" }
      );
    }

    // Split text for heading
    if (headingRef.current) {
      const splitText = new SplitType(headingRef.current, { types: 'words' });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
          onEnter: () => setAnimateState(true)
        }
      });

      // Heading Animation
      tl.from(splitText.words, {
        y: 60,
        opacity: 0,
        rotateX: -40,
        stagger: 0.08,
        ease: "power3.out",
        duration: 0.9,
        transformOrigin: "0% 50% -50"
      })
      // Subtitle Animation
      .fromTo(subtitleRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // Bento Grid Staggered Reveal
      const cards = gridRef.current.querySelectorAll('.bento-card');
      
      // Set initial states
      gsap.set(cards, {
        opacity: 0,
        scale: 0.88,
        y: 40,
        borderRadius: "40px"
      });

      tl.to(cards, {
        opacity: 1,
        scale: 1,
        y: 0,
        borderRadius: "20px",
        stagger: 0.12,
        ease: "expo.out",
        duration: 0.9
      }, "-=0.6");

      return () => {
        splitText.revert();
        if (tl) tl.kill();
      };
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 min-h-screen bg-[#020206] overflow-hidden flex items-center justify-center flex-col"
    >
      {/* Background Blob FX */}
      <div 
        ref={blobRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 800px 400px at 50% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 w-full max-w-[1920px]">
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-24 flex flex-col items-center">
          <h2 
            ref={headingRef} 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase flex flex-wrap justify-center gap-x-4"
            style={{ perspective: "1000px" }}
          >
            Why Choose SkyDreamix?
          </h2>
          <p 
            ref={subtitleRef}
            className="text-[#8892A4] max-w-2xl text-lg opacity-0 font-medium"
          >
            Elevate your digital presence with our premium solutions and dedicated expertise.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto"
        >
          {features.map((feature, index) => (
            <BentoCard 
              key={feature.id} 
              feature={feature} 
              index={index} 
              animateState={animateState} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
