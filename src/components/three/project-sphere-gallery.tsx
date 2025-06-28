
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectProps {
  title: string;
  description: string;
  position: [number, number, number];
  url: string;
  imageUrl: string;
}

// Images from unsplash for demo purposes
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1545389336-cf090694435e",
  "https://images.unsplash.com/photo-1575408264798-b50b252663e6",
  "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
  "https://images.unsplash.com/photo-1532968980994-550a8a5d6c1e",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
  "https://images.unsplash.com/photo-1598901847995-3bb087773203"
];

function ProjectSphere({ project, index, onClick }: { project: ProjectProps; index: number; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { camera } = useThree();
  
  // Create texture loader
  const textureLoader = new THREE.TextureLoader();
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  // Load texture safely
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      project.imageUrl,
      (loadedTexture) => {
        loadedTexture.wrapS = loadedTexture.wrapT = THREE.RepeatWrapping;
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
      }
    );
    
    return () => {
      if (texture) {
        texture.dispose();
      }
    };
  }, [project.imageUrl]);

  // Manual animation state instead of react-spring
  const [scale, setScale] = useState<[number, number, number]>([1, 1, 1]);
  const targetScale = useRef<[number, number, number]>([1, 1, 1]);
  const targetPosition = useRef<[number, number, number]>(project.position);
  
  // Update scale and position based on hover and click states
  useEffect(() => {
    targetScale.current = hovered ? [1.2, 1.2, 1.2] : [1, 1, 1];
    
    if (clicked) {
      targetPosition.current = [
        camera.position.x, 
        camera.position.y, 
        camera.position.z + 2
      ] as [number, number, number];
      
      // Reset after animation
      const timeout = setTimeout(() => {
        setClicked(false);
        targetPosition.current = project.position;
      }, 300);
      
      return () => clearTimeout(timeout);
    } else {
      targetPosition.current = project.position;
    }
  }, [hovered, clicked, project.position, camera.position]);

  // Hover and click handlers
  const handlePointerOver = (e: React.PointerEvent<THREE.Mesh>) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
  };
  
  const handleClick = (e: React.MouseEvent<THREE.Mesh>) => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => {
      onClick();
    }, 300);
  };

  // Animate the sphere
  useFrame((state) => {
    if (meshRef.current) {
      // Slow continuous rotation
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      
      // Add some hover effect when needed
      if (hovered) {
        meshRef.current.rotation.y += 0.01;
      }
      
      // Smooth animation for scale
      meshRef.current.scale.x += (targetScale.current[0] - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale.current[1] - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale.current[2] - meshRef.current.scale.z) * 0.1;
      
      // Smooth animation for position
      meshRef.current.position.x += (targetPosition.current[0] - meshRef.current.position.x) * 0.1;
      meshRef.current.position.y += (targetPosition.current[1] - meshRef.current.position.y) * 0.1;
      meshRef.current.position.z += (targetPosition.current[2] - meshRef.current.position.z) * 0.1;
      
      // Add a slight "breathing" effect based on time
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y += Math.sin(time * 0.8 + index) * 0.002;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={project.position}
      onPointerOver={handlePointerOver as any}
      onPointerOut={handlePointerOut}
      onClick={handleClick as any}
      castShadow
    >
      <sphereGeometry args={[1.2, 32, 32]} />
      {texture ? (
        <meshStandardMaterial 
          map={texture} 
          emissive={new THREE.Color(hovered ? 0x444444 : 0x000000)} 
          metalness={0.2}
          roughness={0.7}
        />
      ) : (
        <meshStandardMaterial 
          color={hovered ? 0x5588ff : 0x3366cc}
          emissive={new THREE.Color(hovered ? 0x444444 : 0x000000)}
          metalness={0.2}
          roughness={0.7}
        />
      )}
    </mesh>
  );
}

export default function ProjectSphereGallery({ projects }: { projects: Omit<ProjectProps, "position" | "imageUrl">[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Enhanced projects with position and images
  const enhancedProjects = projects.map((project, i) => {
    // Create a distribution in a spherical pattern
    const phi = Math.acos(-1 + (2 * i) / Math.max(projects.length, 1));
    const theta = Math.sqrt(Math.max(projects.length, 1) * Math.PI) * phi;
    
    // Calculate position with some randomization
    const x = 3.5 * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 2;
    const y = 3.5 * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 2;
    const z = 3.5 * Math.cos(phi) + (Math.random() - 0.5) * 2;
    
    return {
      ...project,
      position: [x, y, z] as [number, number, number],
      imageUrl: `${PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length]}?q=80&w=500&auto=format&fit=crop`
    };
  });
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    
    setMousePosition({ x, y });
  };
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollPercentage = 1 - (rect.top / window.innerHeight);
      setScrollPosition(scrollPercentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scene component that rotates based on scroll and mouse position
  const Scene = () => {
    const groupRef = useRef<THREE.Group>(null);
    
    useFrame(() => {
      if (groupRef.current) {
        // Rotate based on mouse position (reduced effect for subtlety)
        groupRef.current.rotation.y += (mousePosition.x * 0.01 - groupRef.current.rotation.y) * 0.05;
        groupRef.current.rotation.x += (mousePosition.y * 0.01 - groupRef.current.rotation.x) * 0.05;
        
        // Add rotation based on scroll position
        groupRef.current.rotation.y = Math.PI * 2 * (scrollPosition * 0.2);
      }
    });
    
    const handleProjectClick = (url: string) => {
      window.open(url, '_blank');
    };
    
    return (
      <group ref={groupRef}>
        {enhancedProjects.map((project, index) => (
          <ProjectSphere 
            key={index} 
            project={project as ProjectProps} 
            index={index} 
            onClick={() => handleProjectClick(project.url)} 
          />
        ))}
      </group>
    );
  };
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-[70vh] relative"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        shadows
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Scene />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent z-10" />
    </div>
  );
}
