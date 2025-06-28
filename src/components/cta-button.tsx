
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

type CTAButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
};

const buttonStyles = cva(
  "font-heading font-semibold py-6 px-8 shadow-md transition-all duration-300 rounded-full transform hover:scale-105 active:scale-95 relative overflow-hidden btn-3d",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary to-secondary text-black hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/30",
        secondary: "bg-gradient-to-r from-secondary to-secondary/80 text-black hover:from-secondary/90 hover:to-secondary shadow-lg shadow-secondary/30",
        outline: "border-2 border-primary text-primary hover:bg-primary/10 shadow-lg shadow-primary/20 hover:shadow-primary/30",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function CTAButton({
  children,
  onClick,
  className,
  variant = "primary",
  size = "default",
  asChild = false,
}: CTAButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        buttonStyles({ variant }),
        "relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity hover:translate-y-[-3px] hover:shadow-xl transition-all duration-300",
        className
      )}
      size={size}
      asChild={asChild}
    >
      {asChild ? (
        children
      ) : (
        <>
          <span className="relative z-10">{children}</span>
          <span className="absolute -bottom-1 left-1/2 w-[95%] h-[40%] -translate-x-1/2 bg-black/20 blur-sm rounded-full transform scale-x-90 z-0"></span>
        </>
      )}
    </Button>
  );
}
