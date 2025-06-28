
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex shader - responsible for the position of each point
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
  }
`;

// Fragment shader - creates the fluid ink effect
const fragmentShader = `
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Simplex 2D noise function
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  void main() {
    // Mouse influence
    vec2 mouse = uMouse * 0.5 + 0.5; // Convert from [-1,1] to [0,1]
    
    // Create flowing noise patterns
    float noise1 = snoise(vUv * 2.0 + uTime * 0.1 + mouse.x * 0.3);
    float noise2 = snoise(vUv * 3.0 - uTime * 0.15 + mouse.y * 0.3);
    float noise3 = snoise(vUv * 1.0 + uTime * 0.2 - mouse.x * 0.3);
    
    // Distance from center for radial effect
    vec2 centeredUv = vUv - 0.5;
    float distanceFromCenter = length(centeredUv);
    
    // Create flowing color patterns
    vec3 color1 = uColor1 * (0.5 + 0.5 * sin(noise1 * 3.0 + uTime * 0.5));
    vec3 color2 = uColor2 * (0.5 + 0.5 * cos(noise2 * 3.0 + uTime * 0.3));
    vec3 color3 = uColor3 * (0.5 + 0.5 * sin(noise3 * 3.0 + uTime * 0.2));
    
    // Mix colors based on noise and distance
    vec3 finalColor = mix(
      mix(color1, color2, clamp(noise1 * 0.5 + 0.5, 0.0, 1.0)),
      color3,
      clamp(noise3 * 0.6 + 0.4, 0.0, 1.0)
    );
    
    // Add subtle dark borders for more fluid-like effect
    float edge = smoothstep(0.4, 0.5, distanceFromCenter);
    finalColor = mix(finalColor, vec3(0.0, 0.0, 0.0), edge);
    
    // Apply overall darkness to enhance visibility of text
    finalColor *= 0.8;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface FluidMaterialProps {
  mouse: { current: [number, number] };
  time: { current: number };
  resolution: [number, number];
  color1?: THREE.Color;
  color2?: THREE.Color;
  color3?: THREE.Color;
}

// Custom fluid material using shaders
const FluidMaterial = ({ mouse, time, resolution, color1, color2, color3 }: FluidMaterialProps) => {
  const shaderRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: [0, 0] },
    uResolution: { value: resolution },
    uColor1: { value: color1 || new THREE.Color(0.6, 0.2, 0.8) }, // Purple
    uColor2: { value: color2 || new THREE.Color(0.2, 0.6, 0.9) }, // Blue
    uColor3: { value: color3 || new THREE.Color(0.9, 0.4, 0.7) }  // Pink
  }), [color1, color2, color3, resolution]);

  useFrame(() => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = time.current;
      shaderRef.current.uniforms.uMouse.value = mouse.current;
    }
  });

  return (
    <shaderMaterial
      ref={shaderRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  );
};

// The fluid background scene 
const FluidScene = ({ color1, color2, color3 }: { 
  color1?: THREE.Color;
  color2?: THREE.Color;
  color3?: THREE.Color;
}) => {
  const mouse = useRef<[number, number]>([0, 0]);
  const time = useRef<number>(0);
  const { viewport, size } = useThree();
  const resolution: [number, number] = [size.width, size.height];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1]
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    time.current = state.clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <FluidMaterial 
        mouse={mouse} 
        time={time} 
        resolution={resolution} 
        color1={color1}
        color2={color2}
        color3={color3}
      />
    </mesh>
  );
};

interface FluidBackgroundProps {
  color1?: string;
  color2?: string;
  color3?: string;
  className?: string;
}

const FluidBackground = ({ color1, color2, color3, className }: FluidBackgroundProps) => {
  // Convert string colors to THREE.Color objects if provided
  const threeColor1 = color1 ? new THREE.Color(color1) : undefined;
  const threeColor2 = color2 ? new THREE.Color(color2) : undefined;
  const threeColor3 = color3 ? new THREE.Color(color3) : undefined;

  return (
    <div className={`absolute inset-0 bg-black z-0 ${className || ''}`}>
      <Canvas>
        <FluidScene 
          color1={threeColor1}
          color2={threeColor2}
          color3={threeColor3}
        />
      </Canvas>
    </div>
  );
};

export default FluidBackground;
