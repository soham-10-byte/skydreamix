import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

function RotatingWireframeGlobe() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Sphere ref={meshRef} args={[15, 32, 32]} scale={1.2}>
      <meshBasicMaterial 
        color="#00E5FF" 
        wireframe={true} 
        transparent={true}
        opacity={0.08}
      />
    </Sphere>
  );
}

const ContactGlobe = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Radial soft fade to blend the globe edges into the dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020206_70%)] z-10" />
      
      <Canvas 
        camera={{ position: [0, 0, 30], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <RotatingWireframeGlobe />
      </Canvas>
    </div>
  );
};

export default ContactGlobe;
