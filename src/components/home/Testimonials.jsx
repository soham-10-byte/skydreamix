import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Mithun Mondal',
    role: 'CEO, TechVentures',
    avatar: 'https://ui-avatars.com/api/?name=Mithun+Mondal&background=00E5FF&color=fff&size=128',
    text: 'Exceptional service and outstanding digital delivery. The team at SkyDreamix went above and beyond to ensure our platform was scalable, secure, and ready for launch way ahead of schedule.',
    rating: 5
  },
  {
    id: 2,
    name: 'Shankhadip Sengupta',
    role: 'Founder, CloudSync',
    avatar: 'https://ui-avatars.com/api/?name=Shankhadip+Sengupta&background=1f2937&color=00E5FF&size=128',
    text: 'Their team transformed our initial ideas into a brilliant reality. The attention to detail, modern tech stack, and rapid response times made this the best vendor relationship we\'ve ever had.',
    rating: 5
  },
  {
    id: 3,
    name: 'Chaitali Sinha',
    role: 'Marketing Director, Elevate',
    avatar: 'https://ui-avatars.com/api/?name=Chaitali+Sinha&background=00E5FF&color=fff&size=128',
    text: 'Highly professional and exactly what we needed to scale our platform. Our conversion rates have skyrocketed since the redesign. The SkyDreamix team truly understands user experience.',
    rating: 5
  },
  {
    id: 4,
    name: 'Raja Chakraborty',
    role: 'Managing Director, Apex Labs',
    avatar: 'https://ui-avatars.com/api/?name=Raja+Chakraborty&background=1f2937&color=00E5FF&size=128',
    text: 'A truly premium experience from start to finish. Their enterprise-grade security implementations gave our stakeholders complete peace of mind. Recommending to everyone in my network.',
    rating: 5
  },
  {
    id: 5,
    name: 'Parindra Sur',
    role: 'CTO, NextGen Dynamics',
    avatar: 'https://ui-avatars.com/api/?name=Parindra+Sur&background=00E5FF&color=fff&size=128',
    text: 'The level of technical expertise and 24/7 support is simply unmatched. Any critical issue was immediately diagnosed and resolved by their elite engineers within minutes.',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);
  
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // Auto-play logic
  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }, []);

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, nextSlide]);

  // Heading Animation
  useEffect(() => {
    if (!headingRef.current) return;
    const split = new SplitType(headingRef.current, { types: 'words,chars' });
    
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    return () => split.revert();
  }, []);

  // Handle Drag / Swipe
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  const calculateCardStyle = (index) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);
    
    // Handle wrap-around math for smooth infinite visual feel (simplified)
    // Actually, simple coverflow math without infinite wrap for now, 
    // or we can adjust indexes to pretend it wraps.
    let wrapDiff = diff;
    if (diff > 2) wrapDiff -= testimonials.length;
    if (diff < -2) wrapDiff += testimonials.length;
    
    const isActive = wrapDiff === 0;
    
    // Rotate/Translate based on position relative to active
    let translateX = wrapDiff * 120; 
    let translateZ = Math.abs(wrapDiff) * -150;
    let rotateY = wrapDiff * -25;
    let opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(wrapDiff) * 0.4);
    let scale = isActive ? 1 : 0.85;
    let zIndex = 10 - Math.abs(wrapDiff);

    // Mobile specific adjustments
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      translateX = wrapDiff * 90;
      rotateY = wrapDiff * -15;
    }

    return {
      x: `${translateX}%`,
      z: translateZ,
      rotateY: rotateY,
      opacity: opacity,
      scale: scale,
      zIndex: zIndex,
    };
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-[#020206] min-h-[90vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/[0.05] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-sm mb-4">
            Testimonials
          </p>
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter"
            style={{ perspective: 1000 }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-7xl h-[450px] md:h-[400px] flex items-center justify-center"
          style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, i) => {
            const styles = calculateCardStyle(i);
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  x: styles.x,
                  z: styles.z,
                  rotateY: styles.rotateY,
                  opacity: styles.opacity,
                  scale: styles.scale,
                  zIndex: styles.zIndex
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1]
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => setActiveIndex(i)}
                className={`absolute w-[90%] md:w-[600px] cursor-grab active:cursor-grabbing p-8 md:p-10 rounded-[2rem] bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between shadow-2xl overflow-hidden ${
                  isActive ? 'shadow-[0_0_50px_rgba(0,229,255,0.06)]' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Decorative Quote */}
                <Quote className="absolute top-6 left-6 w-24 h-24 text-[#00E5FF] opacity-10 rotate-180 pointer-events-none" />

                {/* Rating */}
                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-[#00E5FF] text-[#00E5FF]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white text-[15px] md:text-[17px] leading-[1.8] font-medium mb-12 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Footer: User & Google Badge */}
                <div className="flex items-center justify-between mt-auto relative z-10">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border border-white/20 object-cover"
                    />
                    <div>
                      <h4 className="text-white font-bold text-base tracking-wide">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#00E5FF] text-xs uppercase tracking-widest font-semibold mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Google Custom SVG / Icon placeholder */}
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      <path fill="none" d="M1 1h22v22H1z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-6 mt-16">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-[#050505] transition-all duration-300 interactive"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === activeIndex 
                    ? 'w-8 h-2 bg-[#00E5FF]' 
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00E5FF] hover:border-[#00E5FF] hover:text-[#050505] transition-all duration-300 interactive"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
