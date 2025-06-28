
import React, { useRef } from 'react';
import { CTAButton } from './cta-button';
import { motion } from 'framer-motion';
import FluidBackground from './three/fluid-background';

interface LetsTalkProps {
  title?: string;
  description?: string;
  ctaText?: string;
  bgImageUrl?: string;
}

export function LetsTalk({
  title = "Let's Talk",
  description = "Dreaming big? Need insights? Got a question?\nWe're here for you no matter who you are!",
  ctaText = "Get in Touch",
  bgImageUrl = "/lovable-uploads/563d2d61-a2bf-4e2e-a5bf-114ddabc48f2.png"
}: LetsTalkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden glass-panel"
    >
      {/* Interactive content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6">{title}</h3>
          <p className="text-xl md:text-2xl mb-10 whitespace-pre-line">
            {description}
          </p>
          <CTAButton>{ctaText}</CTAButton>
        </motion.div>
      </div>
      
      {/* Fluid background */}
      <FluidBackground 
        color1="#9b87f5" 
        color2="#0EA5E9" 
        color3="#D946EF" 
      />
    </div>
  );
}
