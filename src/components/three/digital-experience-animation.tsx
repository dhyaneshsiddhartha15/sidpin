
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Animated globe component
function AnimatedGlobe({ speed = 0.5 }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  
  const textures = useTexture({
    map: 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    bumpMap: 'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg',
    specularMap: 'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg',
  });

  // Create particles around the globe
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial 
          map={textures.map}
          bumpMap={textures.bumpMap}
          bumpScale={0.05}
          specularMap={textures.specularMap}
          shininess={5}
        />
      </mesh>
      
      {/* Digital connections represented as a mesh */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1.7, 16, 16]} />
        <meshBasicMaterial 
          color="white" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>
      
      {/* Digital connections represented as points */}
      <points>
        <sphereGeometry args={[2, 64, 64]} />
        <pointsMaterial 
          size={0.02} 
          color="#4f46e5" 
          sizeAttenuation={true} 
        />
      </points>
    </group>
  );
}

// Animated data nodes
function DataNodes({ count = 100 }) {
  const points = useRef<THREE.Points>(null!);
  
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      points.current.rotation.x += delta * 0.025;
    }
  });

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const radius = 3 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
    
    // Create a gradient of colors from primary to secondary
    colors[i * 3] = 0.5 + Math.random() * 0.5; // R
    colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
    colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        transparent
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RotatingLines() {
  const linesRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.1;
    }
  });
  
  return (
    <group ref={linesRef}>
      {Array.from({ length: 20 }).map((_, i) => {
        const radius = 2.2;
        const angle = (i / 20) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[0.05, 0.05, 1 + Math.random()]} />
            <meshBasicMaterial color="#9b87f5" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

// Main component
export default function DigitalExperienceAnimation() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#9b87f5" intensity={1} />
        
        <Stars radius={100} depth={50} count={1000} factor={4} fade />
        <AnimatedGlobe />
        <DataNodes />
        <RotatingLines />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
