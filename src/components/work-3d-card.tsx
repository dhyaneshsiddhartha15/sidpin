
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Project {
  title: string;
  description: string;
  details: string;
  imageSrc: string;
  link: string;
}

interface Work3DCardProps {
  project: Project;
  index: number;
}

export function Work3DCard({ project, index }: Work3DCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  // Staggered animation delay based on index
  const animationDelay = index * 0.1;
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation values (center is 0,0)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation in degrees
    const maxRotation = 8;
    
    setRotateX(((y - centerY) / centerY) * -maxRotation);
    setRotateY(((x - centerX) / centerX) * maxRotation);
  };
  
  const resetRotation = () => {
    setRotateX(0);
    setRotateY(0);
    setHovered(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="w-full h-full"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={resetRotation}
        className="relative w-full h-[380px] perspective-1000 transform-gpu"
      >
        <motion.div
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
          }}
          className="w-full h-full"
        >
          <Card className="w-full h-full rounded-xl overflow-hidden shadow-xl border-border/30">
            <Link to={project.link} className="block w-full h-full">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Glare effect on hover */}
                {hovered && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                )}
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-heading">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-2">{project.description}</p>
                    </div>
                  </HoverCardTrigger>
                  
                  <HoverCardContent className="w-80 bg-black/80 backdrop-blur-md text-white border-none">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm">{project.details}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* View Project Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                    View Project
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.div>
              </div>

              {/* 3D shadow effect */}
              <div 
                className="absolute -bottom-4 left-1/2 w-[90%] h-[10px] transform -translate-x-1/2 bg-black/20 blur-md rounded-full"
                style={{
                  transform: `translateX(-50%) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`,
                }}
              />
            </Link>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
