import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A simple but premium Abstract Particle Field for the background
const ParticleField = () => {
  const pointsRef = useRef();
  
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.025;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00E5FF"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const AboutHero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    // Simulated SplitText using CSS/JS spans + GSAP
    if (!headlineRef.current) return;
    
    // Quick and dirty manual split-text for chars
    const chars = headlineRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { y: 100, opacity: 0, rotateX: -90 },
      { 
        y: 0, 
        opacity: 1, 
        rotateX: 0, 
        stagger: 0.05, 
        duration: 1, 
        ease: "power4.out",
        delay: 0.5
      }
    );
  }, []);

  const headline = "About SkyDreamix".split("");

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background 3D Particles */}
      <div className="absolute inset-0 z-0 bg-black">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <fog attach="fog" args={['#000000', 2, 10]} />
          <ParticleField />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px] relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumbs */}
        <motion.div 
          className="flex items-center space-x-2 text-sm text-gray-400 mb-8 uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link to="/" className="hover:text-accent-1 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">About</span>
        </motion.div>

        {/* Headline with pseudo SplitText */}
        <h1 
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-grotesk tracking-tight leading-tight mb-6"
          style={{ perspective: '1000px' }}
        >
          {headline.map((char, index) => (
            <span 
              key={index} 
              className="inline-block char transform-origin-bottom"
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Transforming Digital Dreams into Reality since 2020.
        </motion.p>
      </div>
      
      {/* Bottom fade gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent z-10 pointers-events-none" />
    </section>
  );
};

export default AboutHero;
