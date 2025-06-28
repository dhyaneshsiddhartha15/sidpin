
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Work3DCard } from './work-3d-card';

interface Project {
  title: string;
  description: string;
  details: string;
  imageSrc: string;
  link: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Create a parallax effect for the showcase title
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  
  return (
    <motion.div 
      ref={containerRef} 
      className="w-full"
      style={{ opacity }}
    >
      <div className="mb-12">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-center"
          style={{ y: titleY }}
        >
          Explore Our Creative Portfolio
        </motion.h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Work3DCard 
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
