
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingSphereProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  color?: THREE.Color | string;
}

function FloatingSphere({ position, scale, speed, color }: FloatingSphereProps) {
  const mesh = useRef<THREE.Mesh>(null);
  
  // Use a memoized color to avoid unnecessary re-renders
  const sphereColor = useMemo(() => {
    if (color) {
      return typeof color === 'string' ? new THREE.Color(color) : color;
    }
    // Generate a random color in HSL for better aesthetics
    return new THREE.Color().setHSL(Math.random(), 0.7, 0.5);
  }, [color]);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      // Create more varied movement based on position
      const time = clock.getElapsedTime();
      mesh.current.rotation.x += 0.01 * speed;
      mesh.current.rotation.y += 0.01 * speed;
      
      // Unique movement pattern for each sphere
      mesh.current.position.y += Math.sin(time * 0.5 * speed + position[0]) * 0.002;
      mesh.current.position.x += Math.sin(time * 0.3 * speed + position[1]) * 0.001;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[scale, 16, 16]} />
      <meshStandardMaterial 
        color={sphereColor} 
        transparent
        opacity={0.6}
        roughness={0.4}
        metalness={0.3}
      />
    </mesh>
  );
}

interface FloatingSpheresProps {
  numberOfSpheres?: number;
  colorPalette?: string[];
}

export default function FloatingSpheres({ 
  numberOfSpheres = 15,
  colorPalette = ['#9b87f5', '#7E69AB', '#6E59A5', '#33C3F0', '#D946EF'] 
}: FloatingSpheresProps) {
  // Generate random sphere positions and properties
  const spheres = useMemo(() => {
    return Array.from({ length: numberOfSpheres }, (_, i) => {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 5 - 2;
      const scale = Math.random() * 0.5 + 0.2;
      const speed = Math.random() * 0.8 + 0.2;
      const colorIndex = Math.floor(Math.random() * colorPalette.length);
      
      return { 
        position: [x, y, z] as [number, number, number], 
        scale, 
        speed,
        color: colorPalette[colorIndex]
      };
    });
  }, [numberOfSpheres, colorPalette]);

  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {spheres.map((props, i) => (
          <FloatingSphere key={i} {...props} />
        ))}
      </Canvas>
    </div>
  );
}
