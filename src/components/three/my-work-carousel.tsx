
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Html, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index: number;
  totalCards: number;
  currentRotation: number;
  onClick: (index: number) => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  link,
  index, 
  totalCards,
  currentRotation,
  onClick
}: ProjectCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Load texture
  const texture = useTexture(imageUrl);
  
  // Calculate the card's position in the carousel
  const angle = (index / totalCards) * Math.PI * 2;
  const radius = 5; // Controls carousel size
  
  const cardPosition = useRef({
    x: Math.sin(angle) * radius,
    y: 0,
    z: Math.cos(angle) * radius
  });
  
  // Apply rotation to the carousel
  useFrame(() => {
    if (!meshRef.current) return;
    
    // Calculate position with current rotation
    const rotatedAngle = angle + currentRotation;
    const x = Math.sin(rotatedAngle) * radius;
    const z = Math.cos(rotatedAngle) * radius;
    
    // Smooth transition to new position
    meshRef.current.position.x += (x - meshRef.current.position.x) * 0.1;
    meshRef.current.position.z += (z - meshRef.current.position.z) * 0.1;
    
    // Make cards face the center
    meshRef.current.rotation.y = Math.atan2(
      meshRef.current.position.x,
      meshRef.current.position.z
    ) + Math.PI;
    
    // Apply hover effect
    if (hovered) {
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1.1, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1.1, 0.1);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1.1, 0.1);
    } else {
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.1);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1, 0.1);
    }
  });
  
  // Calculate if this card is currently facing forward (to determine if it's "active")
  const isFrontFacing = Math.abs((angle + currentRotation) % (Math.PI * 2)) < Math.PI / totalCards;
  
  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
  };
  
  const handleClick = (e: any) => {
    e.stopPropagation();
    onClick(index);
  };
  
  return (
    <mesh
      ref={meshRef}
      position={[cardPosition.current.x, cardPosition.current.y, cardPosition.current.z]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {/* Card Geometry */}
      <planeGeometry args={[1.8, 1.2, 1, 1]} />
      <meshStandardMaterial map={texture} />
      
      {/* Title text floating above the card */}
      {isFrontFacing && (
        <Html position={[0, 0.8, 0.1]} center>
          <div className="bg-black/70 p-2 rounded-md text-white text-center w-48 pointer-events-none">
            <h3 className="font-bold text-sm">{title}</h3>
            <p className="text-xs text-white/80 truncate">{description}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
};

// Decorative ribbon that circles the carousel
const Ribbon = ({ totalCards, currentRotation }: { totalCards: number, currentRotation: number }) => {
  const ribbonPoints = [];
  const radius = 5.3; // Slightly larger than card carousel
  const height = -0.3;
  const segments = 64;
  
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    ribbonPoints.push(new THREE.Vector3(x, height + Math.sin(angle * 3) * 0.1, z));
  }
  
  const ribbonRef = useRef<THREE.Mesh>(null);
  
  // Create a smooth ribbon curve
  const curve = new THREE.CatmullRomCurve3(ribbonPoints);
  const ribbonGeometry = new THREE.TubeGeometry(curve, 64, 0.05, 8, true);
  
  useFrame(() => {
    if (!ribbonRef.current) return;
    
    // Rotate the ribbon slightly as the carousel turns
    ribbonRef.current.rotation.y = currentRotation * 0.1;
  });
  
  return (
    <mesh ref={ribbonRef}>
      <primitive object={ribbonGeometry} />
      <meshStandardMaterial
        color={0xFFFFFF}
        emissive={0x6688FF}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// Main carousel scene
const CarouselScene = ({ 
  projects,
  onSelectProject 
}: { 
  projects: Array<{
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }>;
  onSelectProject: (index: number) => void;
}) => {
  const [rotation, setRotation] = useState(0);
  const targetRotation = useRef(0);
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const dragStartRef = useRef(0);
  const isDraggingRef = useRef(false);
  
  // Set initial camera position
  useEffect(() => {
    camera.position.set(0, 1, 9);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  // Handle scroll events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * 0.001;
      targetRotation.current += delta;
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      dragStartRef.current = e.clientX;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const delta = (e.clientX - dragStartRef.current) * 0.005;
        targetRotation.current -= delta;
        dragStartRef.current = e.clientX;
      }
    };
    
    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };
    
    // Attach event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  // Smooth rotation animation
  useFrame(() => {
    setRotation(prev => prev + (targetRotation.current - prev) * 0.1);
  });
  
  // Handle project selection
  const handleProjectClick = (index: number) => {
    onSelectProject(index);
  };
  
  return (
    <group>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Project cards */}
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          index={index}
          totalCards={projects.length}
          currentRotation={rotation}
          onClick={handleProjectClick}
        />
      ))}
      
      {/* Decorative ribbon */}
      <Ribbon totalCards={projects.length} currentRotation={rotation} />
    </group>
  );
};

interface MyWorkCarouselProps {
  projects: Array<{
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }>;
  onSelectProject?: (index: number) => void;
  className?: string;
}

const MyWorkCarousel = ({ projects, onSelectProject, className }: MyWorkCarouselProps) => {
  const handleSelectProject = (index: number) => {
    if (onSelectProject) {
      onSelectProject(index);
    } else {
      // Default behavior: navigate to the project link
      window.open(projects[index].link, '_blank');
    }
  };
  
  return (
    <div className={`w-full h-[500px] relative ${className || ''}`}>
      <Canvas shadows>
        <CarouselScene 
          projects={projects}
          onSelectProject={handleSelectProject}
        />
      </Canvas>
      
      {/* Instruction overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
        Scroll or drag to navigate
      </div>
    </div>
  );
};

export default MyWorkCarousel;
