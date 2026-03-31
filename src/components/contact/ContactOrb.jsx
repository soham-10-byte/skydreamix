import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment, Points, PointMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const EnergyCore = ({ progress }) => {
  const coreRef = useRef();
  const shellRef = useRef();
  const pointsRef = useRef();

  // Colors based on progress: Deep Indigo-Slate to Blinding Cyan
  const color = useMemo(() => {
    const start = new THREE.Color('#1A1A1E');
    const mid = new THREE.Color('#0070F3');
    const end = new THREE.Color('#00E5FF');
    
    if (progress <= 0.5) return start.clone().lerp(mid, progress * 2);
    return mid.clone().lerp(end, (progress - 0.5) * 2);
  }, [progress]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    // Subtle parallax shift based on mouse
    if (coreRef.current) {
      coreRef.current.position.x = THREE.MathUtils.lerp(coreRef.current.position.x, x * 0.5, 0.1);
      coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, y * 0.5, 0.1);
      coreRef.current.rotation.y = t * (0.1 + progress * 0.2);
    }

    if (shellRef.current) {
      shellRef.current.rotation.y = -t * (0.05 + progress * 0.1);
      shellRef.current.rotation.z = t * 0.05;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <group>
      {/* Inner Pulsing Core */}
      <Float speed={2 + progress * 3} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={coreRef} args={[0.8, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color={color}
            speed={3 + progress * 5}
            distort={0.4 + progress * 0.3}
            radius={0.8}
            emissive={color}
            emissiveIntensity={0.5 + progress * 6}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
      </Float>

      {/* Outer Geometric Shell (Neural Mesh) */}
      <mesh ref={shellRef} scale={1.8}>
        <icosahedronGeometry args={[1, 15]} />
        <meshBasicMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.1 + progress * 0.2} 
        />
      </mesh>

      {/* Ambient Star Field / Data Points */}
      <Points ref={pointsRef} stride={3} positions={new Float32Array(3000).map(() => (Math.random() - 0.5) * 10)}>
        <PointMaterial 
          transparent 
          color={color} 
          size={0.02} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.2 + progress * 0.5}
        />
      </Points>
      
      {/* Spotlight for dramatic depth */}
      <spotLight 
        position={[5, 5, 5]} 
        intensity={2 + progress * 5} 
        color={color} 
        angle={0.6}
        penumbra={1}
      />
    </group>
  );
};

const ContactOrb = ({ progress = 0 }) => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#020206]">
      {/* Subtle background particles or vignetting could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020206_100%)] z-[1]" />
      
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#020206']} />
        <ambientLight intensity={0.2} />
        
        <EnergyCore progress={progress} />
        
        <Environment preset="night" />
        
        {/* Subtle camera shake or movement can be added with useFrame in a wrapper */}
      </Canvas>

      {/* Dark overlay for text protection */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020206] via-transparent to-transparent z-[2] opacity-60" />
    </div>
  );
};

export default ContactOrb;
