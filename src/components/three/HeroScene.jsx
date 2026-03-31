import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Subtle floating Icosahedron (wireframe, slow rotation) ─── */
const Icosahedron = ({ scrollProgress }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.x = t * 0.05;
    ref.current.position.y = Math.sin(t * 0.4) * 0.15;
    const s = 1 - scrollProgress.current * 0.3;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.12} />
    </mesh>
  );
};

/* ─── Small Octahedron accent ─── */
const Octahedron = ({ scrollProgress }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.4;
    ref.current.rotation.y = t * 0.3;
    ref.current.position.set(2.5, Math.sin(t * 0.4 + 2) * 0.15, -1);
    const s = 0.5 * (1 - scrollProgress.current * 0.3);
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.5]} />
      <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.15} />
    </mesh>
  );
};

/* ─── Lightweight Particle Field (static positions, gentle drift) ─── */
const ParticleField = ({ count = 800 }) => {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00E5FF');
    const dimWhite = new THREE.Color('#334455');

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 6;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = i % 5 === 0 ? cyan : dimWhite;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }) => {
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={1.5} vertexColors transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

/* ─── Camera Rig (gentle scroll zoom) ─── */
const CameraRig = ({ scrollProgress }) => {
  const { camera } = useThree();
  useFrame(() => {
    const target = 5 + scrollProgress.current * 5;
    camera.position.z += (target - camera.position.z) * 0.03;
  });
  return null;
};

/* ─── Main HeroScene ─── */
const HeroScene = () => {
  const scrollProgress = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = Math.min(window.scrollY / (maxScroll * 0.5), 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ fov: 75, position: [0, 0, 5], near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      >
        <Icosahedron scrollProgress={scrollProgress} />
        {!isMobile && <Octahedron scrollProgress={scrollProgress} />}
        <ParticleField count={isMobile ? 300 : 800} />
        <CameraRig scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
