
import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/components/theme-provider";

interface MeteorProps {
  position: [number, number, number];
  direction: [number, number, number];
  speed: number;
  size: number;
  color: THREE.Color;
}

function Meteor({ position, direction, speed, size, color }: MeteorProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Create a trail for the meteor
  const vertices = useMemo(() => {
    const trail = [];
    for (let i = 0; i < 20; i++) {
      trail.push(
        new THREE.Vector3(
          position[0] - direction[0] * i * 0.1,
          position[1] - direction[1] * i * 0.1,
          position[2] - direction[2] * i * 0.1
        )
      );
    }
    return trail;
  }, [position, direction]);

  const trailGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(vertices);
    return geo;
  }, [vertices]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += direction[0] * speed;
      meshRef.current.position.y += direction[1] * speed;
      meshRef.current.position.z += direction[2] * speed;

      const pos = meshRef.current.position;

      // Reset position when meteor goes off screen
      if (
        pos.x > 15 ||
        pos.x < -15 ||
        pos.y > 15 ||
        pos.y < -15 ||
        pos.z > 15 ||
        pos.z < -15
      ) {
        pos.set(
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        );
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[position[0], position[1], position[2]]}>
        <sphereGeometry args={[size, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
      </mesh>
      <primitive object={new THREE.Line(
        trailGeometry,
        new THREE.LineBasicMaterial({
          color: color,
          linewidth: 1,
          opacity: 0.7,
          transparent: true
        })
      )} />
    </group>
  );
}

interface MeteorsProps {
  count?: number;
}

function Meteors({ count = 20 }: MeteorsProps) {
  const meteors = useMemo(() => {
    const tempMeteors = [];
    for (let i = 0; i < count; i++) {
      tempMeteors.push({
        position: [
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
        ] as [number, number, number],
        direction: [
          Math.random() * 0.2 - 0.1,
          Math.random() * 0.2 - 0.1,
          Math.random() * 0.2 - 0.1,
        ] as [number, number, number],
        speed: Math.random() * 0.05 + 0.02,
        size: Math.random() * 0.1 + 0.05,
        color: new THREE.Color(0x9b87f5).lerp(
          new THREE.Color(0x33C3F0),
          Math.random()
        ),
      });
    }
    return tempMeteors;
  }, [count]);

  return (
    <>
      {meteors.map((meteor, i) => (
        <Meteor key={i} {...meteor} />
      ))}
    </>
  );
}

function Scene() {
  const { theme } = useTheme();
  const { camera } = useThree();
  
  // Auto-rotate camera effect
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 20;
    camera.position.z = Math.cos(state.clock.elapsedTime * 0.1) * 20;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.3 : 0.7} />
      <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 0.5 : 1} />
      <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
      <Meteors />
    </>
  );
}

export default function MeteorField({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
