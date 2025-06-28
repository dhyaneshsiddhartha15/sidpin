
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Html } from '@react-three/drei';
import { Vector3, Color } from 'three';
import * as THREE from 'three'; // Add explicit import for THREE
import { motion } from 'framer-motion';

function InteractiveSphere({ 
  position = [0, 0, 0], 
  color = '#8B5CF6', 
  hoverColor = '#0EA5E9', 
  clickColor = '#33C3F0',
  speed = 1.5 
}) {
  const mesh = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState([]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  // Random particles generation on click
  const createParticles = (e) => {
    const newParticles = [];
    for (let i = 0; i < 10; i++) {
      newParticles.push({
        id: Math.random(),
        position: [
          e.point.x + (Math.random() - 0.5) * 0.5,
          e.point.y + (Math.random() - 0.5) * 0.5,
          e.point.z + (Math.random() - 0.5) * 0.5
        ],
        color: [
          '#8B5CF6',
          '#0EA5E9',
          '#33C3F0',
          '#7E69AB',
          '#6E59A5',
          '#9b87f5'
        ][Math.floor(Math.random() * 6)],
        scale: Math.random() * 0.3 + 0.1,
        lifespan: 100
      });
    }
    setParticles([...particles, ...newParticles]);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  // Animation for the sphere and particles
  useFrame((state) => {
    if (mesh.current) {
      // Make the sphere respond to mouse position
      const mouseX = (state.mouse.x * viewport.width) / 2;
      const mouseY = (state.mouse.y * viewport.height) / 2;
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, mouseX * 0.1, 0.1);
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, mouseY * 0.1, 0.1);
      
      // Rotate the blob
      mesh.current.rotation.x += 0.003 * speed;
      mesh.current.rotation.y += 0.004 * speed;
    }

    // Update particles
    setParticles(particles.map(particle => {
      particle.lifespan--;
      if (particle.lifespan <= 0) return null;
      return particle;
    }).filter(Boolean));
  });

  return (
    <>
      <mesh
        ref={mesh}
        position={position instanceof Vector3 ? position : new Vector3(...position)}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        onClick={createParticles}
        scale={isHovered ? 1.15 : 1}
      >
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color={isClicked ? clickColor : isHovered ? hoverColor : color}
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Particles */}
      {particles.map(particle => (
        <mesh 
          key={particle.id} 
          position={new Vector3(...particle.position)}  // Convert array to Vector3
          scale={particle.scale * (particle.lifespan / 100)}
        >
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial 
            color={particle.color} 
            emissive={particle.color} 
            emissiveIntensity={0.5} 
            transparent 
            opacity={particle.lifespan / 100}
          />
        </mesh>
      ))}
    </>
  );
}

export function InteractiveBlob() {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden glass-panel my-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <InteractiveSphere />
      </Canvas>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-xl max-w-md"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-2">Interactive Experience</h3>
          <p className="text-white/80 font-body">Hover over the shape and click to see the magic happen!</p>
        </motion.div>
      </div>
    </div>
  );
}
