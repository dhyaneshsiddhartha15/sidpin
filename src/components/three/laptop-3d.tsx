
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Box, Sphere, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';

function LaptopModel() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      } else {
        meshRef.current.scale.setScalar(1);
        meshRef.current.rotation.x = 0;
      }
    }
  });

  return (
    <group>
      {/* Laptop Base */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 1, -0.9]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Screen Display */}
      <mesh position={[0, 1, -0.85]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshStandardMaterial 
          color="#0066ff" 
          emissive="#001a33"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, 0.11, 0.2]}>
        <boxGeometry args={[2.4, 0.02, 1.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Trackpad */}
      <mesh position={[0, 0.12, 0.6]}>
        <boxGeometry args={[0.8, 0.01, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
}

function FloatingElements() {
  const sphere1Ref = useRef<Mesh>(null);
  const sphere2Ref = useRef<Mesh>(null);
  const sphere3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5 + 2;
      sphere1Ref.current.rotation.x += 0.01;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 1.2) * 0.3 + 1.5;
      sphere2Ref.current.rotation.z += 0.02;
    }
    if (sphere3Ref.current) {
      sphere3Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4 + 2.2;
      sphere3Ref.current.rotation.y += 0.015;
    }
  });

  return (
    <>
      <mesh ref={sphere1Ref} position={[-3, 2, -2]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={sphere2Ref} position={[3, 1.5, -1]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={sphere3Ref} position={[-2, 2.2, 1]}>
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} />
      </mesh>
    </>
  );
}

export function Laptop3D() {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        shadows
        className="bg-gradient-to-b from-gray-900 to-black"
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#0066ff" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#ff6b35" />
        
        <LaptopModel />
        <FloatingElements />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
    </div>
  );
}
