
// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Sphere } from '@react-three/drei';
// import * as THREE from 'three';

// interface FloatingSphereProps {
//   position: [number, number, number];
//   scale: number;
//   speed: number;
//   color?: THREE.Color | string;
// }

// function FloatingSphere({ position, scale, speed, color }: FloatingSphereProps) {
//   const mesh = useRef<THREE.Mesh>(null);
  
//   // Use a memoized color to avoid unnecessary re-renders
//   const sphereColor = useMemo(() => {
//     if (color) {
//       return typeof color === 'string' ? new THREE.Color(color) : color;
//     }
//     // Generate a random color in HSL for better aesthetics
//     return new THREE.Color().setHSL(Math.random(), 0.7, 0.5);
//   }, [color]);
  
//   useFrame(({ clock }) => {
//     if (mesh.current) {
//       // Create more varied movement based on position
//       const time = clock.getElapsedTime();
//       mesh.current.rotation.x += 0.01 * speed;
//       mesh.current.rotation.y += 0.01 * speed;
      
//       // Unique movement pattern for each sphere
//       mesh.current.position.y += Math.sin(time * 0.5 * speed + position[0]) * 0.002;
//       mesh.current.position.x += Math.sin(time * 0.3 * speed + position[1]) * 0.001;
//     }
//   });

//   return (
//     <mesh ref={mesh} position={position}>
//       <sphereGeometry args={[scale, 16, 16]} />
//       <meshStandardMaterial 
//         color={sphereColor} 
//         transparent
//         opacity={0.6}
//         roughness={0.4}
//         metalness={0.3}
//       />
//     </mesh>
//   );
// }

// interface FloatingSpheresProps {
//   numberOfSpheres?: number;
//   colorPalette?: string[];
// }

// export default function FloatingSpheres({ 
//   numberOfSpheres = 15,
//   colorPalette = ['#9b87f5', '#7E69AB', '#6E59A5', '#33C3F0', '#D946EF'] 
// }: FloatingSpheresProps) {
//   // Generate random sphere positions and properties
//   const spheres = useMemo(() => {
//     return Array.from({ length: numberOfSpheres }, (_, i) => {
//       const x = (Math.random() - 0.5) * 10;
//       const y = (Math.random() - 0.5) * 10;
//       const z = (Math.random() - 0.5) * 5 - 2;
//       const scale = Math.random() * 0.5 + 0.2;
//       const speed = Math.random() * 0.8 + 0.2;
//       const colorIndex = Math.floor(Math.random() * colorPalette.length);
      
//       return { 
//         position: [x, y, z] as [number, number, number], 
//         scale, 
//         speed,
//         color: colorPalette[colorIndex]
//       };
//     });
//   }, [numberOfSpheres, colorPalette]);

//   return (
//     <div className="absolute inset-0">
//       <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         {spheres.map((props, i) => (
//           <FloatingSphere key={i} {...props} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }


// import React, { useRef, useMemo, useState, useCallback } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Sphere, Environment } from '@react-three/drei';
// import * as THREE from 'three';

// interface FloatingSphereProps {
//   position: [number, number, number];
//   scale: number;
//   speed: number;
//   color?: THREE.Color | string;
//   onHover?: () => void;
//   onLeave?: () => void;
//   isHovered?: boolean;
//   mousePosition?: THREE.Vector2;
// }

// function FloatingSphere({ 
//   position, 
//   scale, 
//   speed, 
//   color, 
//   onHover, 
//   onLeave, 
//   isHovered = false,
//   mousePosition 
// }: FloatingSphereProps) {
//   const mesh = useRef<THREE.Mesh>(null);
//   const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
//   const [hovered, setHovered] = useState(false);
//   const [originalPosition] = useState<[number, number, number]>(position);
  
//   const sphereColor = useMemo(() => {
//     if (color) {
//       return typeof color === 'string' ? new THREE.Color(color) : color;
//     }
//     return new THREE.Color().setHSL(Math.random(), 0.8, 0.6);
//   }, [color]);

//   const emissiveColor = useMemo(() => {
//     return sphereColor.clone().multiplyScalar(0.2);
//   }, [sphereColor]);
  
//   useFrame(({ clock, camera, mouse }) => {
//     if (mesh.current && materialRef.current) {
//       const time = clock.getElapsedTime();
      
//       // Enhanced rotation with varied axes
//       mesh.current.rotation.x += 0.015 * speed * (1 + Math.sin(time * 0.5) * 0.2);
//       mesh.current.rotation.y += 0.01 * speed * (1 + Math.cos(time * 0.3) * 0.3);
//       mesh.current.rotation.z += 0.005 * speed;
      
//       // More complex floating motion with magnetic mouse attraction
//       const baseY = originalPosition[1] + Math.sin(time * 0.8 * speed + originalPosition[0]) * 0.6;
//       const baseX = originalPosition[0] + Math.sin(time * 0.4 * speed + originalPosition[1]) * 0.4;
//       const baseZ = originalPosition[2] + Math.cos(time * 0.6 * speed + originalPosition[0]) * 0.3;
      
//       // Mouse attraction effect
//       const mouseInfluence = 2;
//       const mouseX = mouse.x * 5;
//       const mouseY = mouse.y * 5;
//       const distance = Math.sqrt(
//         Math.pow(mesh.current.position.x - mouseX, 2) + 
//         Math.pow(mesh.current.position.y - mouseY, 2)
//       );
//       const attractionStrength = Math.max(0, (3 - distance) / 3) * 0.3;
      
//       mesh.current.position.x = baseX + (mouseX - baseX) * attractionStrength;
//       mesh.current.position.y = baseY + (mouseY - baseY) * attractionStrength;
//       mesh.current.position.z = baseZ;
      
//       // Dynamic scale based on hover and distance
//       const targetScale = hovered ? scale * 1.4 : scale * (1 + attractionStrength * 0.5);
//       mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
//       // Enhanced material properties for glow effect
//       const pulseIntensity = Math.sin(time * 2 + originalPosition[0]) * 0.5 + 0.5;
//       materialRef.current.emissiveIntensity = hovered ? 0.8 : 0.2 + pulseIntensity * 0.3;
//       materialRef.current.transmission = hovered ? 0.9 : 0.6 + pulseIntensity * 0.2;
//       materialRef.current.thickness = 0.5 + pulseIntensity * 0.3;
//       materialRef.current.roughness = hovered ? 0.1 : 0.3 - pulseIntensity * 0.1;
//       materialRef.current.clearcoat = 0.8 + pulseIntensity * 0.2;
//       materialRef.current.iridescence = 0.3 + pulseIntensity * 0.4;
//     }
//   });

//   const handlePointerOver = useCallback(() => {
//     setHovered(true);
//     onHover?.();
//   }, [onHover]);

//   const handlePointerOut = useCallback(() => {
//     setHovered(false);
//     onLeave?.();
//   }, [onLeave]);

//   return (
//     <mesh 
//       ref={mesh} 
//       position={position}
//       onPointerOver={handlePointerOver}
//       onPointerOut={handlePointerOut}
//     >
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshPhysicalMaterial 
//         ref={materialRef}
//         color={sphereColor}
//         emissive={emissiveColor}
//         emissiveIntensity={0.2}
//         transparent
//         opacity={0.8}
//         roughness={0.2}
//         metalness={0.1}
//         transmission={0.7}
//         thickness={0.5}
//         clearcoat={1.0}
//         clearcoatRoughness={0.1}
//         iridescence={0.3}
//         iridescenceIOR={1.3}
//         ior={1.4}
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// }

// function DynamicLighting() {
//   const lightRef = useRef<THREE.PointLight>(null);
//   const light2Ref = useRef<THREE.PointLight>(null);
  
//   useFrame(({ clock, mouse }) => {
//     const time = clock.getElapsedTime();
    
//     if (lightRef.current) {
//       lightRef.current.position.x = Math.sin(time * 0.5) * 8 + mouse.x * 3;
//       lightRef.current.position.y = Math.cos(time * 0.3) * 6 + mouse.y * 3;
//       lightRef.current.position.z = Math.sin(time * 0.7) * 4 + 3;
//       lightRef.current.intensity = 2 + Math.sin(time * 2) * 0.5;
//     }
    
//     if (light2Ref.current) {
//       light2Ref.current.position.x = Math.cos(time * 0.4) * 6 - mouse.x * 2;
//       light2Ref.current.position.y = Math.sin(time * 0.6) * 5 - mouse.y * 2;
//       light2Ref.current.position.z = Math.cos(time * 0.8) * 3 + 2;
//       light2Ref.current.intensity = 1.5 + Math.cos(time * 1.5) * 0.3;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.3} color="#4a90e2" />
//       <pointLight 
//         ref={lightRef}
//         color="#ff6b9d" 
//         intensity={2}
//         distance={20}
//         decay={2}
//       />
//       <pointLight 
//         ref={light2Ref}
//         color="#45e3ff" 
//         intensity={1.5}
//         distance={15}
//         decay={2}
//       />
//       <spotLight
//         position={[0, 10, 0]}
//         angle={0.3}
//         penumbra={1}
//         intensity={1}
//         color="#ffffff"
//         castShadow
//       />
//     </>
//   );
// }

// function InteractiveCamera() {
//   const { camera } = useThree();
  
//   useFrame(({ mouse, clock }) => {
//     const time = clock.getElapsedTime();
//     camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
//     camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
//     camera.position.z = 8 + Math.sin(time * 0.2) * 1;
//     camera.lookAt(0, 0, 0);
//   });

//   return null;
// }

// function Particles() {
//   const particlesRef = useRef<THREE.Points>(null);
//   const particleCount = 100;
  
//   const particles = useMemo(() => {
//     const positions = new Float32Array(particleCount * 3);
//     const colors = new Float32Array(particleCount * 3);
    
//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 20;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
//       const color = new THREE.Color().setHSL(Math.random(), 0.8, 0.6);
//       colors[i * 3] = color.r;
//       colors[i * 3 + 1] = color.g;
//       colors[i * 3 + 2] = color.b;
//     }
    
//     return { positions, colors };
//   }, []);
  
//   useFrame(({ clock }) => {
//     if (particlesRef.current) {
//       const time = clock.getElapsedTime();
//       particlesRef.current.rotation.y = time * 0.05;
//       particlesRef.current.rotation.x = time * 0.02;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particleCount}
//           array={particles.positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={particleCount}
//           array={particles.colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         vertexColors
//         size={0.05}
//         transparent
//         opacity={0.6}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// }

// interface FloatingSpheresProps {
//   numberOfSpheres?: number;
//   colorPalette?: string[];
// }

// export default function FloatingSpheres({ 
//   numberOfSpheres = 20,
//   colorPalette = [
//     '#ff6b9d', '#45e3ff', '#a8e6cf', '#ffd93d', 
//     '#ff8a80', '#b388ff', '#84ffff', '#ccff90',
//     '#ff9e80', '#f8bbd9', '#e1bee7', '#c5e1a5'
//   ] 
// }: FloatingSpheresProps) {
//   const [hoveredSphere, setHoveredSphere] = useState<number | null>(null);
//   const [mousePosition, setMousePosition] = useState(new THREE.Vector2());

//   const spheres = useMemo(() => {
//     return Array.from({ length: numberOfSpheres }, (_, i) => {
//       const angle = (i / numberOfSpheres) * Math.PI * 2;
//       const radius = 3 + Math.random() * 4;
//       const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
//       const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
//       const z = (Math.random() - 0.5) * 6;
//       const scale = 0.3 + Math.random() * 0.4;
//       const speed = 0.5 + Math.random() * 1;
//       const colorIndex = i % colorPalette.length;
      
//       return { 
//         position: [x, y, z] as [number, number, number], 
//         scale, 
//         speed,
//         color: colorPalette[colorIndex]
//       };
//     });
//   }, [numberOfSpheres, colorPalette]);

//   const handleSphereHover = useCallback((index: number) => {
//     setHoveredSphere(index);
//   }, []);

//   const handleSphereLeave = useCallback(() => {
//     setHoveredSphere(null);
//   }, []);

//   return (
//     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <div className="absolute top-4 left-4 text-white z-10">
//         <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
//           Interactive 3D Spheres
//         </h2>
//         <p className="text-sm opacity-80">Move your mouse to interact • Hover spheres to transform them</p>
//         {hoveredSphere !== null && (
//           <p className="text-xs mt-2 text-cyan-300">
//             Sphere #{hoveredSphere + 1} is glowing ✨
//           </p>
//         )}
//       </div>
      
//       <Canvas 
//         dpr={[1, 2]} 
//         camera={{ position: [0, 0, 8], fov: 60 }}
//         gl={{ 
//           antialias: true, 
//           alpha: true,
//           powerPreference: "high-performance"
//         }}
//         shadows
//         onPointerMove={(e) => {
//           setMousePosition(new THREE.Vector2(
//             (e.clientX / window.innerWidth) * 2 - 1,
//             -(e.clientY / window.innerHeight) * 2 + 1
//           ));
//         }}
//       >
//         <DynamicLighting />
//         <InteractiveCamera />
//         <Particles />
        
//         <Environment preset="night" />
        
//         {spheres.map((props, i) => (
//           <FloatingSphere 
//             key={i} 
//             {...props} 
//             onHover={() => handleSphereHover(i)}
//             onLeave={handleSphereLeave}
//             isHovered={hoveredSphere === i}
//             mousePosition={mousePosition}
//           />
//         ))}
        
//         {/* Enhanced lighting for bloom-like effect */}
//         <pointLight
//           position={[0, 0, 5]}
//           intensity={0.5}
//           color="#ffffff"
//           distance={10}
//         />
//       </Canvas>
    
//     </div>
//   );
// }

// import React, { useRef, useMemo, useState, useCallback } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';

// // interface PremiumSphereProps {
// //   position: [number, number, number];
// //   scale: number;
// //   layer: number;
// //   color: string;
// //   index: number;
// //   onHover?: (index: number) => void;
// //   onLeave?: () => void;
// //   isHovered?: boolean;
// //   globalHover?: boolean;
// // }

// // function PremiumSphere({ 
// //   position, 
// //   scale, 
// //   layer,
// //   color, 
// //   index,
// //   onHover, 
// //   onLeave, 
// //   isHovered = false,
// //   globalHover = false
// // }: PremiumSphereProps) {
// //   const mesh = useRef<THREE.Mesh>(null);
// //   const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
// //   const glowRef = useRef<THREE.Mesh>(null);
  
// //   const sphereColor = useMemo(() => new THREE.Color(color), [color]);
// //   const emissiveColor = useMemo(() => sphereColor.clone().multiplyScalar(0.3), [sphereColor]);
  
// //   useFrame(({ clock, mouse }) => {
// //     if (mesh.current && materialRef.current && glowRef.current) {
// //       const time = clock.getElapsedTime();
      
// //       // Mesmerizing rotation with multiple axes
// //       mesh.current.rotation.x = time * 0.3 + index * 0.5;
// //       mesh.current.rotation.y = time * 0.2 + layer * 0.8;
// //       mesh.current.rotation.z = time * 0.1 + index * 0.2;
      
// //       // Smooth floating with wave patterns
// //       const waveX = Math.sin(time * 0.8 + index) * 0.5;
// //       const waveY = Math.cos(time * 0.6 + layer) * 0.8;
// //       const waveZ = Math.sin(time * 0.4 + index * 0.5) * 0.3;
      
// //       mesh.current.position.x = position[0] + waveX + (mouse.x * (layer + 1) * 0.5);
// //       mesh.current.position.y = position[1] + waveY + (mouse.y * (layer + 1) * 0.5);
// //       mesh.current.position.z = position[2] + waveZ;
      
// //       // Dynamic scaling with pulsing
// //       const pulse = 1 + Math.sin(time * 2 + index) * 0.1;
// //       const hoverScale = isHovered ? 1.5 : globalHover ? 1.2 : 1;
// //       const targetScale = scale * pulse * hoverScale;
// //       mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
// //       // Glow effect matching main sphere
// //       glowRef.current.position.copy(mesh.current.position);
// //       glowRef.current.scale.copy(mesh.current.scale).multiplyScalar(1.8);
// //       glowRef.current.rotation.copy(mesh.current.rotation);
      
// //       // Dynamic material properties
// //       const intensity = isHovered ? 1.2 : 0.4 + Math.sin(time * 3 + index) * 0.3;
// //       materialRef.current.emissiveIntensity = intensity;
// //       materialRef.current.transmission = isHovered ? 0.9 : 0.7;
// //       materialRef.current.thickness = 0.5 + Math.sin(time + index) * 0.2;
// //       materialRef.current.roughness = isHovered ? 0.05 : 0.2;
// //       materialRef.current.clearcoat = 1.0;
// //       materialRef.current.iridescence = 0.5 + Math.sin(time * 0.5 + index) * 0.3;
// //       materialRef.current.metalness = 0.1 + Math.sin(time * 0.3) * 0.1;
// //     }
// //   });

// //   const handlePointerOver = useCallback(() => {
// //     onHover?.(index);
// //   }, [onHover, index]);

// //   const handlePointerOut = useCallback(() => {
// //     onLeave?.();
// //   }, [onLeave]);

//   // return (
//   //   <group>
//       {/* Glow effect */}
//       {/* <mesh ref={glowRef}>
//         <sphereGeometry args={[1, 30, 30]} />
//         <meshBasicMaterial
//           color={emissiveColor}
//           transparent
//           opacity={isHovered ? 0.3 : 0.1}
//           side={THREE.BackSide}
//         />
//       </mesh>
      
//       {/* Main sphere */}
//       {/* <mesh 
//         ref={mesh} 
//         position={position}
//         onPointerOver={handlePointerOver}
//         onPointerOut={handlePointerOut}
//       >
//         <sphereGeometry args={[1, 60, 60]} />
//         <meshPhysicalMaterial 
//           ref={materialRef}
//           color={sphereColor}
//           emissive={emissiveColor}
//           emissiveIntensity={0.4}
//           transparent
//           opacity={0.9}
//           roughness={0.2}
//           metalness={0.1}
//           transmission={0.7}
//           thickness={0.5}
//           clearcoat={1.0}
//           clearcoatRoughness={0.1}
//           iridescence={0.5}
//           iridescenceIOR={1.3}
//           ior={1.4}
//           side={THREE.DoubleSide}
//         />
//       </mesh>
//     </group>
//   );
// } *

// function DynamicLighting() {
//   const light1 = useRef<THREE.PointLight>(null);
//   const light2 = useRef<THREE.PointLight>(null);
//   const light3 = useRef<THREE.PointLight>(null);
  
//   useFrame(({ clock, mouse }) => {
//     const time = clock.getElapsedTime();
    
//     if (light1.current) {
//       light1.current.position.set(
//         Math.sin(time * 0.7) * 10 + mouse.x * 5,
//         Math.cos(time * 0.5) * 8 + mouse.y * 5,
//         Math.sin(time * 0.3) * 6 + 5
//       );
//       light1.current.intensity = 3 + Math.sin(time * 2) * 0.5;
//     }
    
//     if (light2.current) {
//       light2.current.position.set(
//         Math.cos(time * 0.6) * 8 - mouse.x * 3,
//         Math.sin(time * 0.8) * 6 - mouse.y * 3,
//         Math.cos(time * 0.4) * 4 + 3
//       );
//       light2.current.intensity = 2.5 + Math.cos(time * 1.5) * 0.3;
//     }
    
//     if (light3.current) {
//       light3.current.position.set(
//         Math.sin(time * 0.4) * 6,
//         Math.cos(time * 0.9) * 7,
//         Math.sin(time * 0.6) * 5 + 2
//       );
//       light3.current.intensity = 2 + Math.sin(time * 3) * 0.4;
//     }
//   }); */}
// {/* 
//   return (
//     <>
//       <ambientLight intensity={0.2} color="#1a1a2e" /> */}
//       {/* <pointLight 
//         ref={light1}
//         color="#ff3366" 
//         intensity={3}
//         distance={25}
//         decay={2}
//       />
//       <pointLight 
//         ref={light2}
//         color="#33aaff" 
//         intensity={2.5}
//         distance={20}
//         decay={2}
//       />
//       <pointLight 
//         ref={light3}
//         color="#aa33ff" 
//         intensity={2}
//         distance={18}
//         decay={2}
//       />
//       <spotLight
//         position={[0, 15, 8]}
//         angle={0.4}
//         penumbra={1}
//         intensity={1.5}
//         color="#ffffff"
//         castShadow
//       /> 
//     </>
//   );
// }
//       */}

// {/* function CinematicCamera() {
//   const { camera } = useThree();
  
//   useFrame(({ mouse, clock }) => {
//     const time = clock.getElapsedTime();
    
//     // Smooth camera movement with cinematic feel
//     camera.position.x += (mouse.x * 3 - camera.position.x) * 0.08;
//     camera.position.y += (mouse.y * 2 - camera.position.y) * 0.08;
//     camera.position.z = 12 + Math.sin(time * 0.3) * 2;
    
//     // Subtle rotation for dynamic feel
//     camera.rotation.z = mouse.x * 0.05;
//     camera.lookAt(0, 0, 0);
//   });

//   return null;
// }

// function ParticleField() {
//   const particlesRef = useRef<THREE.Points>(null);
//   const particleCount = 200;
  
//   const particles = useMemo(() => {
//     const positions = new Float32Array(particleCount * 3);
//     const colors = new Float32Array(particleCount * 3);
//     const sizes = new Float32Array(particleCount);
    
//     const colorPalette = [
//       new THREE.Color('#ff3366'),
//       new THREE.Color('#33aaff'),
//       new THREE.Color('#aa33ff'),
//       new THREE.Color('#ffaa33'),
//       new THREE.Color('#33ff66')
//     ];
    
//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 50;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
//       const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
//       colors[i * 3] = color.r;
//       colors[i * 3 + 1] = color.g;
//       colors[i * 3 + 2] = color.b;
      
//       sizes[i] = Math.random() * 0.8 + 0.2;
//     }
    
//     return { positions, colors, sizes };
//   }, []);
  
//   useFrame(({ clock }) => {
//     if (particlesRef.current) {
//       const time = clock.getElapsedTime();
//       particlesRef.current.rotation.y = time * 0.02;
//       particlesRef.current.rotation.x = time * 0.01;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particleCount}
//           array={particles.positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={particleCount}
//           array={particles.colors}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           count={particleCount}
//           array={particles.sizes}
//           itemSize={1}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         vertexColors
//         size={0.1}
//         transparent
//         opacity={0.8}
//         blending={THREE.AdditiveBlending}
//         sizeAttenuation
//       />
//     </points>
//   );
// }

// export default function PremiumInteractive3D() {
//   const [hoveredSphere, setHoveredSphere] = useState<number | null>(null);
//   const [globalHover, setGlobalHover] = useState(false);

//   // Premium color palette - vibrant and rich
//   const colorPalette = [
//     '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', 
//     '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe',
//     '#fd79a8', '#fdcb6e', '#00b894', '#00cec9',
//     '#74b9ff', '#0984e3', '#a29bfe', '#6c5ce7'
//   ];

//   const spheres = useMemo(() => {
//     const layers = 5;
//     const allSpheres = [];
    
//     for (let layer = 0; layer < layers; layer++) {
//       const radius = 3 + layer * 1.8;
//       const count = 8 - layer;
      
//       for (let i = 0; i < count; i++) {
//         const angle = (i / count) * Math.PI * 2 + layer * 0.5;
//         const x = Math.cos(angle) * radius;
//         const y = Math.sin(angle) * radius;
//         const z = (layer - 2) * 2;
//         const scale = 0.6 + (4 - layer) * 0.1;
        
//         allSpheres.push({
//           position: [x, y, z] as [number, number, number],
//           scale,
//           layer,
//           color: colorPalette[allSpheres.length % colorPalette.length],
//           index: allSpheres.length
//         });
//       }
//     }
    
//     return allSpheres;
//   }, []);

//   const handleSphereHover = useCallback((index: number) => {
//     setHoveredSphere(index);
//     setGlobalHover(true);
//   }, []);

//   const handleSphereLeave = useCallback(() => {
//     setHoveredSphere(null);
//     setGlobalHover(false);
//   }, []); */}

//   return (
//     <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
//         <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* <div className="absolute top-6 left-6 text-white z-10">
//         <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//           Premium 3D Experience
//         </h1>
//         <p className="text-lg opacity-90 mb-2">Interactive • Immersive • Stunning</p>
//         <p className="text-sm opacity-70">Move your cursor to control the universe</p>
//         {hoveredSphere !== null && (
//           <div className="mt-4 p-3 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20">
//             <p className="text-cyan-300 text-sm font-medium">
//               ✨ Sphere #{hoveredSphere + 1} Selected
//             </p>
//             <p className="text-xs opacity-80">Layer {Math.floor(hoveredSphere / 8) + 1}</p>
//           </div>
//         )}
//       </div> */}
      
//       <Canvas 
//         dpr={[1, 2]} 
//         camera={{ position: [0, 0, 12], fov: 60 }}
//         gl={{ 
//           antialias: true, 
//           alpha: true,
//           powerPreference: "high-performance",
//           toneMappingExposure: 1.2
//         }}
//         shadows
//       >
//         <fog attach="fog" args={['#1a1a2e', 10, 50]} />
//         <DynamicLighting />
//         <CinematicCamera />
//         <ParticleField />
        
//         <Environment preset="night" environmentIntensity={0.4} />
        
//         {spheres.map((sphere, i) => (
//           <PremiumSphere 
//             key={i}
//             position={sphere.position}
//             scale={sphere.scale}
//             layer={sphere.layer}
//             color={sphere.color}
//             index={sphere.index}
//             onHover={handleSphereHover}
//             onLeave={handleSphereLeave}
//             isHovered={hoveredSphere === i}
//             globalHover={globalHover}
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// }










import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

function DynamicLighting() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  const light3 = useRef<THREE.PointLight>(null);
  
  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();
    
    if (light1.current) {
      light1.current.position.set(
        Math.sin(time * 0.7) * 10 + mouse.x * 5,
        Math.cos(time * 0.5) * 8 + mouse.y * 5,
        Math.sin(time * 0.3) * 6 + 5
      );
      light1.current.intensity = 3 + Math.sin(time * 2) * 0.5;
    }
    
    if (light2.current) {
      light2.current.position.set(
        Math.cos(time * 0.6) * 8 - mouse.x * 3,
        Math.sin(time * 0.8) * 6 - mouse.y * 3,
        Math.cos(time * 0.4) * 4 + 3
      );
      light2.current.intensity = 2.5 + Math.cos(time * 1.5) * 0.3;
    }
    
    if (light3.current) {
      light3.current.position.set(
        Math.sin(time * 0.4) * 6,
        Math.cos(time * 0.9) * 7,
        Math.sin(time * 0.6) * 5 + 2
      );
      light3.current.intensity = 2 + Math.sin(time * 3) * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#1a1a2e" />
      <pointLight 
        ref={light1}
        color="#ff3366" 
        intensity={3}
        distance={25}
        decay={2}
      />
      <pointLight 
        ref={light2}
        color="#33aaff" 
        intensity={2.5}
        distance={20}
        decay={2}
      />
      <pointLight 
        ref={light3}
        color="#aa33ff" 
        intensity={2}
        distance={18}
        decay={2}
      />
    </>
  );
}

function CinematicCamera() {
  const { camera } = useThree();
  
  useFrame(({ mouse, clock }) => {
    const time = clock.getElapsedTime();
    
    // Smooth camera movement with cinematic feel
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.08;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.08;
    camera.position.z = 12 + Math.sin(time * 0.3) * 2;
    
    // Subtle rotation for dynamic feel
    camera.rotation.z = mouse.x * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 300;
  
  const particles = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const colorPalette = [
      new THREE.Color('#ff3366'),
      new THREE.Color('#33aaff'),
      new THREE.Color('#aa33ff'),
      new THREE.Color('#ffaa33'),
      new THREE.Color('#33ff66'),
      new THREE.Color('#ff6b9d'),
      new THREE.Color('#45e3ff')
    ];
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 1.2 + 0.3;
    }
    
    return { positions, colors, sizes };
  }, []);
  
  useFrame(({ clock, mouse }) => {
    if (particlesRef.current) {
      const time = clock.getElapsedTime();
      particlesRef.current.rotation.y = time * 0.03;
      particlesRef.current.rotation.x = time * 0.02;
      
      // Mouse interaction with particles
      particlesRef.current.rotation.z = mouse.x * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.15}
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.5;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.x = Math.sin(time * 0.4) * 5 + mouse.x * 2;
      torusRef.current.position.y = Math.cos(time * 0.6) * 3 + mouse.y * 2;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = time * 0.4;
      octahedronRef.current.rotation.z = time * 0.2;
      octahedronRef.current.position.x = Math.cos(time * 0.5) * 4 - mouse.x * 1.5;
      octahedronRef.current.position.y = Math.sin(time * 0.7) * 4 - mouse.y * 1.5;
    }
  });

  return (
    <group>
      <mesh ref={torusRef} position={[3, 2, -5]}>
        <torusGeometry args={[2, 0.5, 16, 32]} />
        <meshPhysicalMaterial
          color="#ff6b9d"
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.8}
          transmission={0.8}
          thickness={0.5}
        />
      </mesh>
      
      <mesh ref={octahedronRef} position={[-3, -2, -8]}>
        <octahedronGeometry args={[2]} />
        <meshPhysicalMaterial
          color="#45e3ff"
          transparent
          opacity={0.4}
          roughness={0.2}
          metalness={0.6}
          transmission={0.7}
          thickness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function PremiumAnimatedBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Moving gradient overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse transform rotate-45"></div>
        <div className="absolute w-full h-full bg-gradient-to-l from-transparent via-pink-500/20 to-transparent animate-pulse transform -rotate-45" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          toneMappingExposure: 1.2
        }}
      >
        <fog attach="fog" args={['#1a1a2e', 15, 60]} />
        <DynamicLighting />
        <CinematicCamera />
        <ParticleField />
        <FloatingGeometry />
        
        <Environment preset="night" environmentIntensity={0.3} />
      </Canvas>
    </div>
  );
}