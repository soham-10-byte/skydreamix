import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const xTo = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Dot follows exactly
      gsap.set(dot, { x: clientX, y: clientY });
      
      // Ring follows with lag
      xTo(clientX);
      yTo(clientY);
    };

    const handleMouseDown = () => {
      gsap.to([dot, ring], { scale: 0.7, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to([dot, ring], { scale: 1, duration: 0.1 });
    };

    const handleHoverStart = () => {
      gsap.to(ring, { 
        scale: 1.6, 
        backgroundColor: 'rgba(0, 229, 255, 0.2)', 
        borderColor: 'transparent',
        duration: 0.3 
      });
    };

    const handleHoverEnd = () => {
      gsap.to(ring, { 
        scale: 1, 
        backgroundColor: 'transparent', 
        borderColor: '#00E5FF',
        duration: 0.3 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactives = document.querySelectorAll('a, button, .interactive');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent-1 rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-accent-1 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;
