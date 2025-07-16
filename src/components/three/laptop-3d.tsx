import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';

function WoodenDesk() {
  return (
    <group>
      {/* Desktop */}
      <mesh position={[0, -0.5, 0]} receiveShadow castShadow>
        <boxGeometry args={[12, 0.15, 6]} />
        <meshStandardMaterial 
          color="#8b5a3c" 
          roughness={0.6} 
          metalness={0.1}
          normalScale={[0.5, 0.5]}
        />
      </mesh>
      
      {/* Desk Legs */}
      {[[-5.5, -2, -2.5], [5.5, -2, -2.5], [-5.5, -2, 2.5], [5.5, -2, 2.5]].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      
      {/* Desk Support Beams */}
      <mesh position={[0, -2, -2.5]} castShadow>
        <boxGeometry args={[10.5, 0.2, 0.2]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -2, 2.5]} castShadow>
        <boxGeometry args={[10.5, 0.2, 0.2]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function DualMonitorSetup() {
  const monitor1Ref = useRef<Mesh>(null);
  const monitor2Ref = useRef<Mesh>(null);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  useFrame((state) => {
    if (monitor1Ref.current && hovered1) {
      monitor1Ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
    if (monitor2Ref.current && hovered2) {
      monitor2Ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group>
      {/* Monitor Stand Base */}
      <mesh position={[0, -0.3, -2.5]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Monitor Stand Pole */}
      <mesh position={[0, 0.5, -2.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.6]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Monitor Arms */}
      <mesh position={[-1.8, 1.2, -2.5]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 3.6]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Left Monitor */}
      <group position={[-3.5, 1.2, -2.5]}>
        <mesh 
          ref={monitor1Ref}
          castShadow
          onPointerEnter={() => setHovered1(true)}
          onPointerLeave={() => setHovered1(false)}
        >
          <boxGeometry args={[4, 2.5, 0.15]} />
          <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[3.8, 2.3]} />
          <meshStandardMaterial 
            color="#1e40af" 
            emissive="#1e3a8a"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
      
      {/* Right Monitor */}
      <group position={[3.5, 1.2, -2.5]}>
        <mesh 
          ref={monitor2Ref}
          castShadow
          onPointerEnter={() => setHovered2(true)}
          onPointerLeave={() => setHovered2(false)}
        >
          <boxGeometry args={[4, 2.5, 0.15]} />
          <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[3.8, 2.3]} />
          <meshStandardMaterial 
            color="#059669" 
            emissive="#065f46"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </group>
  );
}

function LaptopSetup() {
  const laptopRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (laptopRef.current) {
      if (hovered) {
        laptopRef.current.scale.setScalar(1.02);
      } else {
        laptopRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group 
      ref={laptopRef} 
      position={[-2, -0.35, 1]} 
      rotation={[0, 0.2, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Laptop Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 0.9, -0.9]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[2.8, 1.8, 0.08]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Laptop Display */}
      <mesh position={[0, 0.9, -0.86]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshStandardMaterial 
          color="#7c3aed" 
          emissive="#5b21b6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Apple Logo */}
      <mesh position={[0, 0.9, -0.94]} rotation={[-0.2, 0, 0]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#e5e7eb" emissive="#d1d5db" emissiveIntensity={0.1} />
      </mesh>
    </group>
  );
}

function MechanicalKeyboard() {
  const keyboardRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <group 
      position={[1, -0.4, 0.5]} 
      rotation={[0, -0.1, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Keyboard Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 0.12, 1.5]} />
        <meshStandardMaterial color="#1f2937" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Keys */}
      {Array.from({ length: 87 }, (_, i) => {
        const row = Math.floor(i / 17);
        const col = i % 17;
        const x = col * 0.22 - 1.8;
        const z = row * 0.22 - 0.55;
        const keyHeight = hovered ? 0.08 : 0.06;
        
        return (
          <mesh key={i} position={[x, keyHeight, z]} castShadow>
            <boxGeometry args={[0.18, keyHeight, 0.18]} />
            <meshStandardMaterial 
              color={Math.random() > 0.9 ? "#ef4444" : "#4b5563"} 
              metalness={0.3} 
              roughness={0.7}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function GamingMouse() {
  const mouseRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (mouseRef.current && hovered) {
      mouseRef.current.position.y = -0.35 + Math.sin(state.clock.elapsedTime * 3) * 0.01;
    }
  });

  return (
    <group position={[4.5, -0.37, 0.5]}>
      {/* Mouse Body */}
      <mesh 
        ref={mouseRef}
        castShadow
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <boxGeometry args={[0.9, 0.18, 1.4]} />
        <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* RGB Strip */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.8, 0.02, 1.2]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#7c3aed"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Mouse Pad */}
      <mesh position={[0, -0.18, 0]} receiveShadow>
        <cylinderGeometry args={[2, 2, 0.02]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>
    </group>
  );
}

function BookStack() {
  const books = [
    { color: "#dc2626", title: "Clean Code", height: 0.08 },
    { color: "#2563eb", title: "Design Patterns", height: 0.06 },
    { color: "#059669", title: "JavaScript", height: 0.07 },
    { color: "#7c3aed", title: "React Guide", height: 0.05 },
    { color: "#ea580c", title: "Node.js", height: 0.06 }
  ];

  return (
    <group position={[-4.5, -0.42, 1.5]}>
      {books.map((book, i) => (
        <mesh key={i} position={[0, i * 0.08, 0]} castShadow>
          <boxGeometry args={[1.8, book.height, 1.2]} />
          <meshStandardMaterial color={book.color} roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function PlantCollection() {
  return (
    <group>
      {/* Large Plant */}
      <group position={[-5, -0.15, -1.5]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.4, 0.35, 0.4]} />
          <meshStandardMaterial color="#8b5a3c" roughness={0.8} />
        </mesh>
        {Array.from({ length: 8 }, (_, i) => (
          <mesh key={i} position={[Math.sin(i * 0.8) * 0.2, 0.6, Math.cos(i * 0.8) * 0.2]}>
            <cylinderGeometry args={[0.02, 0.02, 0.8]} />
            <meshStandardMaterial color="#22c55e" />
          </mesh>
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <mesh key={i} position={[Math.sin(i * 0.5) * 0.3, 0.8, Math.cos(i * 0.5) * 0.3]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#16a34a" />
          </mesh>
        ))}
      </group>
      
      {/* Small Succulent */}
      <group position={[5, -0.25, -1.8]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.25, 0.2, 0.25]} />
          <meshStandardMaterial color="#a3a3a3" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.15]} />
          <meshStandardMaterial color="#84cc16" />
        </mesh>
      </group>
    </group>
  );
}

function DeveloperAccessories() {
  return (
    <group>
      {/* Coffee Mug */}
      <group position={[2.5, -0.2, -1.5]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.25, 0.3, 0.5]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0.25, 0, 0]}>
          <torusGeometry args={[0.15, 0.03]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        {/* Coffee */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.1]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      </group>
      
      {/* Smartphone */}
      <mesh position={[3.5, -0.42, 1.8]} rotation={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.4, 0.02, 0.9]} />
        <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Tablet */}
      <mesh position={[-1, -0.42, 2.5]} rotation={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[1.5, 0.03, 2]} />
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Headphones */}
      <group position={[-5.5, 0.5, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.8, 0.05]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[-0.8, 0, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.8, 0, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
      
      {/* Notebook and Pen */}
      <mesh position={[0, -0.42, 2.2]} rotation={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.8} />
      </mesh>
      
      <mesh position={[0.3, -0.4, 2]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
    </group>
  );
}

function AmbientParticles() {
  const particles = useRef<Mesh[]>([]);

  useFrame((state) => {
    particles.current.forEach((particle, i) => {
      if (particle) {
        particle.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i * 0.3) * 0.5 + 3;
        particle.rotation.x += 0.005;
        particle.rotation.y += 0.01;
        particle.scale.setScalar(0.5 + Math.sin(state.clock.elapsedTime + i) * 0.2);
      }
    });
  });

  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => particles.current[i] = el}
          position={[
            Math.sin(i * Math.PI / 6) * 6,
            3,
            Math.cos(i * Math.PI / 6) * 6
          ]}
        >
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color={`hsl(${240 + i * 10}, 70%, 60%)`}
            emissive={`hsl(${240 + i * 10}, 70%, 30%)`}
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </>
  );
}

export function Laptop3D() {
  return (
    <div className="w-full h-[700px] relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas
        camera={{ position: [8, 5, 8], fov: 50 }}
        shadows
        className="bg-gradient-to-b from-slate-800 to-slate-900"
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} color="#6366f1" />
        
        {/* Main directional light */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-bias={-0.0001}
          color="#ffffff"
        />
        
        {/* Accent lights */}
        <pointLight position={[-8, 6, -8]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[8, 4, 8]} intensity={0.6} color="#06b6d4" />
        <pointLight position={[0, 8, 0]} intensity={0.4} color="#f59e0b" />
        <pointLight position={[-6, 3, 6]} intensity={0.5} color="#10b981" />
        
        {/* Rim lighting */}
        <directionalLight
          position={[-10, 5, -10]}
          intensity={0.3}
          color="#7c3aed"
        />
        
        <WoodenDesk />
        <DualMonitorSetup />
        <LaptopSetup />
        <MechanicalKeyboard />
        <GamingMouse />
        <BookStack />
        <PlantCollection />
        <DeveloperAccessories />
        <AmbientParticles />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 8}
          maxDistance={20}
          minDistance={4}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
        
        {/* Enhanced Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]} receiveShadow>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial 
            color="#1e293b" 
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        
        {/* Back Wall */}
        <mesh position={[0, 2, -8]} receiveShadow>
          <planeGeometry args={[40, 20]} />
          <meshStandardMaterial 
            color="#0f172a" 
            roughness={0.9}
          />
        </mesh>
      </Canvas>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-purple-900/10" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/30" />
      </div>
    </div>
  );
}