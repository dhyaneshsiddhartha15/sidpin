
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MeteorProps {
  size?: number;
  count?: number;
}

export function MeteorEffect({ size = 1, count = 10 }: MeteorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const createMeteor = () => {
      if (!containerRef.current) return;
      
      // Clean up any meteors that have completed their animation
      const oldMeteors = containerRef.current.querySelectorAll('.meteor');
      if (oldMeteors.length > 20) {
        oldMeteors[0].remove();
      }
      
      // Create a new meteor
      const meteor = document.createElement('div');
      meteor.classList.add('meteor-effect', 'meteor');
      
      // Random position and duration
      const startPosition = Math.random() * window.innerWidth;
      const duration = Math.random() * 3000 + 2000; // 2-5 seconds
      const delay = Math.random() * 15000; // 0-15 seconds delay
      
      meteor.style.left = `${startPosition}px`;
      meteor.style.top = '0px';
      meteor.style.width = `${Math.random() * 2 + 1}px`;
      meteor.style.height = `${Math.random() * 100 + 50}px`;
      meteor.style.animationDuration = `${duration}ms`;
      meteor.style.animationDelay = `${delay}ms`;
      
      containerRef.current.appendChild(meteor);
      
      // Remove meteor after animation completes
      setTimeout(() => {
        if (meteor && meteor.parentNode === containerRef.current) {
          meteor.remove();
        }
      }, duration + delay + 1000);
    };
    
    // Create initial meteors
    for (let i = 0; i < count; i++) {
      setTimeout(() => createMeteor(), Math.random() * 3000);
    }
    
    // Continue creating meteors
    const interval = setInterval(createMeteor, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
