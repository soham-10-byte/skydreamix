import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const FloatingOrb = () => {
  return (
    <Float
      speed={5} 
      rotationIntensity={2} 
      floatIntensity={2} 
    >
      <Sphere args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#00E5FF"
          emissive="#0070F3"
          distort={0.4}
          speed={4}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0070F3" />
        
        <Suspense fallback={null}>
          <FloatingOrb />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
