
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const textColorClass = variant === 'light' 
    ? 'text-white' 
    : variant === 'dark' 
      ? 'text-foreground' 
      : 'text-foreground';
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        {/* Animated shapes */}
        <div className="absolute w-7 h-7 rounded-full bg-primary animate-pulse-slow" />
        <div className="absolute w-6 h-6 rounded-full bg-secondary -rotate-45 animate-pulse-slow [animation-delay:200ms]" />
        
        {/* Main logo shape */}
        <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg">
          <span className="text-white font-bold text-xl">S</span>
        </div>
      </div>
      
      {/* Text part */}
      <div className={cn("font-bold text-xl tracking-tight", textColorClass)}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">SID</span>
        <span>PIN</span>
      </div>
    </div>
  );
}
