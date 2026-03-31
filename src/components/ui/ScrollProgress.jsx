import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../animations/gsap.config';

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const element = progressRef.current;
    
    gsap.to(element, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3, // Slight lag for "premium" feel
      }
    });

    return () => {
      if (ScrollTrigger.getById("scroll-progress")) {
        ScrollTrigger.getById("scroll-progress").kill();
      }
    };
  }, []);

  return (
    <div 
      ref={progressRef}
      id="scroll-progress" 
      className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#0070F3] z-[9999] origin-left scale-x-0"
    />
  );
};

export default ScrollProgress;
