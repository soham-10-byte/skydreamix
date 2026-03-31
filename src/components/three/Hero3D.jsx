import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScroll, ScrollControls } from '@react-three/drei';

/* ─── Optimized Shader for Network & Atmosphere ─── */
const NetworkMaterial = ({ color, opacity }) => {
  const materialRef = useRef();
  const scroll = useScroll();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(color) },
    uOpacity: { value: opacity },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
  }), [color, opacity]);

  useFrame((state) => {
    if (!materialRef.current) return;
    const { mouse, clock } = state;
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    if (scroll) materialRef.current.uniforms.uScroll.value = scroll.offset;
    
    // Smooth lerp (optimized)
    const m = materialRef.current.uniforms.uMouse.value;
    m.x += (mouse.x - m.x) * 0.1;
    m.y += (mouse.y - m.y) * 0.1;
  });

  return (
    <shaderMaterial
      ref={materialRef}
      transparent wireframe blending={THREE.AdditiveBlending}
      uniforms={uniforms}
      vertexShader={`
        varying float vReveal;
        uniform float uTime;
        uniform float uScroll;
        uniform vec2 uMouse;
        void main() {
          vec3 pos = position;
          // Simplified wave
          float wave = sin(pos.x * 0.15 + uTime * 0.4) * cos(pos.y * 0.2 + uTime * 0.3) * 1.2;
          pos.z += wave;

          // Faster morph
          float morph = uScroll * 1.2;
          float angle = pos.x * 0.08 * morph;
          float r = 25.0;
          pos.x = r * sin(angle);
          pos.z += r * (1.0 - cos(angle));

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          
          // Optimized distance check
          float d = distance(uMouse * 15.0, pos.xy);
          vReveal = 1.0 - smoothstep(0.0, 10.0, d);
        }
      `}
      fragmentShader={`
        varying float vReveal;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main() {
          vec3 col = mix(uColor * 0.3, uColor * 2.0, vReveal);
          gl_FragColor = vec4(col, uOpacity * (0.5 + vReveal * 3.0));
        }
      `}
    />
  );
};

/* ─── Orbital System (Merged Update) ─── */
const DigitalHub = ({ isMobile }) => {
  const groupRef = useRef();
  const coreRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const off = scroll ? scroll.offset : 0;
    
    // Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.scale.setScalar(1 + off * 0.5);
    }
    
    // Rings rotation
    if (ring1.current) ring1.current.rotation.z = t * 0.4;
    if (ring2.current) ring2.current.rotation.z = -t * 0.25;
    if (ring3.current) ring3.current.rotation.z = t * 0.15;
    
    // Subtle tilt animation
    if (groupRef.current) {
      groupRef.current.rotation.y = -0.3 + Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[8, 0, -5]} rotation={[0.4, 0, 0]}>
      {/* Central Core */}
      <group ref={coreRef}>
        <mesh>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
        </mesh>
      </group>

      {/* Orbits */}
      <group ref={ring1}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.2, 0.008, 12, 64]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.1} />
        </mesh>
        <mesh position={[3.2, 0, 0]}><octahedronGeometry args={[0.25]} /> <meshBasicMaterial color="#00E5FF" wireframe /></mesh>
      </group>

      <group ref={ring2}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[4.8, 0.008, 12, 64]} />
          <meshBasicMaterial color="#0070F3" transparent opacity={0.1} />
        </mesh>
        <mesh position={[4.8, 0, 0]}><boxGeometry args={[0.2, 0.2, 0.2]} /> <meshBasicMaterial color="#0070F3" wireframe /></mesh>
      </group>

      <group ref={ring3}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[6.5, 0.008, 12, 64]} />
          <meshBasicMaterial color="#9D00FF" transparent opacity={0.1} />
        </mesh>
        <mesh position={[6.5, 0, 0]}><tetrahedronGeometry args={[0.22]} /> <meshBasicMaterial color="#9D00FF" wireframe /></mesh>
      </group>

      <pointLight intensity={2} color="#00E5FF" distance={15} />
    </group>
  );
};

/* ─── Optimized Data Packets (Lower count for performance) ─── */
const DataPackets = ({ count = 40 }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const scroll = useScroll();
  const packets = useMemo(() => Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 50,
    y: (Math.random() - 0.5) * 50,
    z: (Math.random() - 0.5) * 8,
    speed: 0.01 + Math.random() * 0.02,
  })), [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    const s = scroll ? scroll.offset : 0;
    packets.forEach((p, i) => {
      p.y += p.speed * (1 + s * 1.5);
      if (p.y > 25) p.y = -25;
      dummy.position.set(p.x, p.y, p.z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <boxGeometry args={[0.03, 0.03, 0.03]} />
      <meshBasicMaterial color="#00E5FF" transparent opacity={0.3} />
    </instancedMesh>
  );
};

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  useFrame(() => {
    if (!camera) return;
    camera.position.lerp(vec.set(mouse.x * 2 + 2, mouse.y * 1, 10), 0.05);
    camera.lookAt(5, 0, -5);
  });
  return null;
};

const Hero3D = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      <Canvas
        dpr={[1, 1.2]} // Capped for performance
        gl={{ 
          antialias: false, 
          alpha: true, 
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <fogExp2 attach="fog" args={['#000000', 0.04]} />
        <ScrollControls pages={3} damping={0.1}>
          <group>
            {/* Optimized Background Mesh */}
            <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, -5, -10]}>
              <planeGeometry args={[80, 80, isMobile ? 24 : 48, isMobile ? 24 : 48]} />
              <NetworkMaterial color="#00E5FF" opacity={0.06} />
            </mesh>
            
            <DigitalHub isMobile={isMobile} />
            <DataPackets count={isMobile ? 20 : 40} />
            {!isMobile && <Rig />}
          </group>
        </ScrollControls>
      </Canvas>
      {/* Optimized Atmosphere (Reduced Blur) */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[400px] h-[400px] bg-accent-1/5 rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
};

export default Hero3D;
