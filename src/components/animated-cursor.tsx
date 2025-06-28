
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCursorProps {
  color?: string;
}

export function AnimatedCursor({ color = 'rgba(155, 135, 245, 0.2)' }: AnimatedCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show cursor effect on larger screens
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!isVisible) return null;
  
  return (
    <motion.div 
      className="fixed w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-20 z-0"
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.05
      }}
      style={{
        background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`
      }}
    />
  );
}
