import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AbstractMesh = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
      <icosahedronGeometry args={[1, 1]} />
      {/* Subtle glowing wireframe */}
      <meshBasicMaterial 
        color="#00E5FF" 
        wireframe={true} 
        transparent 
        opacity={0.12} 
        wireframeLinewidth={2}
      />
    </mesh>
  );
};

const HomeCTA = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      // Background Blob drift
      if (blobRef.current) {
        gsap.to(blobRef.current, {
          x: 100,
          y: 50,
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      }

      // Split text animation
      if (headingRef.current) {
        const splitText = new SplitType(headingRef.current, { types: 'lines,words' });
        
        gsap.from(splitText.words, {
          y: 40,
          opacity: 0,
          rotateX: -30,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        });

        // We can't easily revert SplitType inside gsap context's cleanup automatically if we don't store it, 
        // but ctx.revert() handles the tweens. We'll return a custom cleanup.
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      if (headingRef.current) {
         // SplitType reverts itself if instance is kept, but ctx.revert is enough to stop the tween
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 min-h-[80vh] bg-[#020206] flex items-center justify-center overflow-hidden z-10"
    >
      {/* Animated Gradient Blob */}
      <div 
        ref={blobRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle 800px at 30% 70%, rgba(0,229,255,0.08) 0%, transparent 60%)'
        }}
      />

      {/* 3D Wireframe Canvas */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <AbstractMesh />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10 flex flex-col items-center text-center">
        
        <motion.p 
          className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-sm md:text-base mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Start Your Project
        </motion.p>

        <h2 
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter max-w-5xl leading-[0.9] mb-8"
          style={{ perspective: 1000 }}
        >
          Ready to Transform Your Business?
        </h2>

        <motion.p 
          className="text-[#8892A4] text-lg md:text-xl max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Join industry leaders who trust SkyDreamix to build secure, scalable, and stunning digital experiences. Let's create something extraordinary together.
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <motion.button 
            className="flex items-center gap-3 bg-[#00E5FF] text-[#050505] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 interactive shadow-[0_0_40px_rgba(0,229,255,0.2)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button 
            className="flex items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/5 hover:border-[#00E5FF]/50 transition-colors duration-300 interactive"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Portfolio
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default HomeCTA;
