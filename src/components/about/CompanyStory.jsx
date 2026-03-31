import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A simple spinning wireframe globe for the right column
const AbstractGlobe = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshStandardMaterial 
          color="#00E5FF" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#00E5FF"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Core glow */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const stats = [
  { label: 'Founded', value: '2020' },
  { label: 'Experts', value: '50+' },
  { label: 'Countries Served', value: '15+' },
  { label: 'Projects Delivered', value: '200+' },
];

const CompanyStory = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary z-10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-1/10 border border-accent-1/20 text-accent-1 text-sm font-medium tracking-wide">
              OUR JOURNEY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk leading-tight">
              International by Design, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-blue-400">
                Operating Globally.
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded with a rebel spirit and a lofty objective: to offer premium, 
              cutting-edge digital solutions while leading the way for logically 
              innovative businesses. 
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Based in the cultural capital of India, SkyDreamix combines artistic 
              excellence with modern technological frameworks. From dynamic websites 
              to robust applications, our mission is simple—transforming your digital 
              dreams into unparalleled reality.
            </p>

            {/* Inline Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-4 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl font-bold font-grotesk text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center"
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <AbstractGlobe />
            </Canvas>
            {/* Ambient glow behind canvas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-1/20 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
