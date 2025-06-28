
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/components/theme-provider";

function ParticleWave({ count = 5000 }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const mesh = useRef<THREE.Points>(null);
  
  // Create particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 5;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.3;
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        
        // Create wave effect
        positions[i3 + 2] = Math.sin(time + x * 0.3) * 0.5 + Math.cos(time + y * 0.2) * 0.5;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? "#9b87f5" : "#7E69AB"}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <ParticleWave />
    </>
  );
}

export default function ParticleWaveBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
