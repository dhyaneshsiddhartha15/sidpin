import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FloatingSpheres from "@/components/three/floating-sphere";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from "lucide-react";
// import Smoke from "@/components/smoke/Smoke";

interface MousePosition {
  x: number;
  y: number;
}

interface FluidConfig {
  SIM_RESOLUTION: number;
  DYE_RESOLUTION: number;
  DENSITY_DISSIPATION: number;
  VELOCITY_DISSIPATION: number;
  PRESSURE_DISSIPATION: number;
  PRESSURE_ITERATIONS: number;
  CURL: number;
  SPLAT_RADIUS: number;
  SHADING: boolean;
  COLORFUL: boolean;
  PAUSED: boolean;
  BACK_COLOR: { r: number; g: number; b: number };
  TRANSPARENT: boolean;
  BLOOM: boolean;
  BLOOM_ITERATIONS: number;
  BLOOM_RESOLUTION: number;
  BLOOM_INTENSITY: number;
  BLOOM_THRESHOLD: number;
  BLOOM_SOFT_KNEE: number;
}

interface Pointer {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  down: boolean;
  moved: boolean;
  color: { r: number; g: number; b: number };
}

interface GLProgram {
  uniforms: { [key: string]: WebGLUniformLocation | null };
  program: WebGLProgram;
  bind(): void;
}

interface FBO {
  texture: WebGLTexture;
  fbo: WebGLFramebuffer;
  width: number;
  height: number;
  attach(id: number): number;
}

interface DoubleFBO {
  read: FBO;
  write: FBO;
  swap(): void;
}


export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // const ballRef = useRef<HTMLDivElement>(null);
  const ballOuterRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const ballRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fluidSimRef = useRef<any>(null);
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };
  
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);
  
      document.addEventListener('mousemove', handleMouseMove);
      
      const interactiveElements = document.querySelectorAll('h1, h6, p, span');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, []);
  
    useEffect(() => {
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${mousePos.x - 10}px, ${mousePos.y - 10}px)`;
      }
    }, [mousePos]);
  
    const colorHover = (event: React.MouseEvent<HTMLDivElement>) => {
      if (fluidSimRef.current && fluidSimRef.current.colorHover) {
        fluidSimRef.current.colorHover(event.nativeEvent);
      }
    };
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      // Initialize WebGL Fluid Simulation
      const initFluidSimulation = () => {
        const config: FluidConfig = {
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 0.97,
          VELOCITY_DISSIPATION: 0.98,
          PRESSURE_DISSIPATION: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.5,
          SHADING: false,
          COLORFUL: false,
          PAUSED: false,
          BACK_COLOR: { r: 2, g: 3, b: 15 },
          TRANSPARENT: false,
          BLOOM: true,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.8,
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.7
        };
  
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
  
        const pointers: Pointer[] = [];
        const splatStack: number[] = [];
        const bloomFramebuffers: FBO[] = [];
  
        class PointerPrototype implements Pointer {
          id = -1;
          x = 0;
          y = 0;
          dx = 0;
          dy = 0;
          down = false;
          moved = false;
          color = { r: 30, g: 0, b: 300 };
        }
  
        pointers.push(new PointerPrototype());
  
        const getWebGLContext = (canvas: HTMLCanvasElement) => {
          const params = {
            alpha: true,
            depth: false,
            stencil: false,
            antialias: false,
            preserveDrawingBuffer: false
          };
  
          let gl = canvas.getContext('webgl2', params) as WebGL2RenderingContext;
          const isWebGL2 = !!gl;
          if (!isWebGL2) {
            gl = (canvas.getContext('webgl', params) || 
                  canvas.getContext('experimental-webgl', params)) as WebGL2RenderingContext;
          }
  
          let halfFloat: any;
          let supportLinearFiltering: any;
          if (isWebGL2) {
            gl.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
          } else {
            halfFloat = gl.getExtension('OES_texture_half_float');
            supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
          }
  
          gl.clearColor(0.0, 0.0, 0.0, 1.0);
  
          const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat?.HALF_FLOAT_OES;
          let formatRGBA: any;
          let formatRG: any;
          let formatR: any;
  
          const getSupportedFormat = (gl: WebGL2RenderingContext, internalFormat: number, format: number, type: number) => {
            if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
              switch (internalFormat) {
                case gl.R16F:
                  return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                case gl.RG16F:
                  return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                default:
                  return null;
              }
            }
            return { internalFormat, format };
          };
  
          const supportRenderTextureFormat = (gl: WebGL2RenderingContext, internalFormat: number, format: number, type: number) => {
            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
  
            const fbo = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  
            const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
            return status === gl.FRAMEBUFFER_COMPLETE;
          };
  
          if (isWebGL2) {
            formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
          } else {
            formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
          }
  
          return {
            gl,
            ext: {
              formatRGBA,
              formatRG,
              formatR,
              halfFloatTexType,
              supportLinearFiltering
            }
          };
        };
  
        const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
  
        const { gl, ext } = getWebGLContext(canvas);
  
        if (isMobile()) config.SHADING = false;
        if (!ext.supportLinearFiltering) {
          config.SHADING = false;
          config.BLOOM = false;
        }
  
        class GLProgramClass implements GLProgram {
          uniforms: { [key: string]: WebGLUniformLocation | null } = {};
          program: WebGLProgram;
  
          constructor(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
            this.program = gl.createProgram()!;
  
            gl.attachShader(this.program, vertexShader);
            gl.attachShader(this.program, fragmentShader);
            gl.linkProgram(this.program);
  
            if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
              throw new Error(gl.getProgramInfoLog(this.program) || 'Program link failed');
            }
  
            const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < uniformCount; i++) {
              const uniformInfo = gl.getActiveUniform(this.program, i);
              if (uniformInfo) {
                this.uniforms[uniformInfo.name] = gl.getUniformLocation(this.program, uniformInfo.name);
              }
            }
          }
  
          bind() {
            gl.useProgram(this.program);
          }
        }
  
        const compileShader = (type: number, source: string): WebGLShader => {
          const shader = gl.createShader(type)!;
          gl.shaderSource(shader, source);
          gl.compileShader(shader);
  
          if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader) || 'Shader compilation failed');
          }
  
          return shader;
        };
  
        // Shader sources
        const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
          precision highp float;
          attribute vec2 aPosition;
          varying vec2 vUv;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform vec2 texelSize;
  
          void main () {
              vUv = aPosition * 0.5 + 0.5;
              vL = vUv - vec2(texelSize.x, 0.0);
              vR = vUv + vec2(texelSize.x, 0.0);
              vT = vUv + vec2(0.0, texelSize.y);
              vB = vUv - vec2(0.0, texelSize.y);
              gl_Position = vec4(aPosition, 0.0, 1.0);
          }
        `);
  
        const clearShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying highp vec2 vUv;
          uniform sampler2D uTexture;
          uniform float value;
  
          void main () {
              gl_FragColor = value * texture2D(uTexture, vUv);
          }
        `);
  
        const colorShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          uniform vec4 color;
  
          void main () {
              gl_FragColor = color;
          }
        `);
  
        const displayShader = compileShader(gl.FRAGMENT_SHADER, `
          precision highp float;
          precision highp sampler2D;
          varying vec2 vUv;
          uniform sampler2D uTexture;
  
          void main () {
              vec3 C = texture2D(uTexture, vUv).rgb;
              float a = max(C.r, max(C.g, C.b));
              gl_FragColor = vec4(C, a);
          }
        `);
  
        const displayBloomShader = compileShader(gl.FRAGMENT_SHADER, `
          precision highp float;
          precision highp sampler2D;
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform sampler2D uBloom;
          uniform sampler2D uDithering;
          uniform vec2 ditherScale;
  
          void main () {
              vec3 C = texture2D(uTexture, vUv).rgb;
              vec3 bloom = texture2D(uBloom, vUv).rgb;
              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;
              noise = noise * 2.0 - 1.0;
              bloom += noise / 800.0;
              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));
              C += bloom;
              float a = max(C.r, max(C.g, C.b));
              gl_FragColor = vec4(C, a);
          }
        `);
  
        const bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying vec2 vUv;
          uniform sampler2D uTexture;
          uniform vec3 curve;
          uniform float threshold;
  
          void main () {
              vec3 c = texture2D(uTexture, vUv).rgb;
              float br = max(c.r, max(c.g, c.b));
              float rq = clamp(br - curve.x, 0.0, curve.y);
              rq = curve.z * rq * rq;
              c *= max(rq, br - threshold) / max(br, 0.0001);
              gl_FragColor = vec4(c, 0.0);
          }
        `);
  
        const bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uTexture;
  
          void main () {
              vec4 sum = vec4(0.0);
              sum += texture2D(uTexture, vL);
              sum += texture2D(uTexture, vR);
              sum += texture2D(uTexture, vT);
              sum += texture2D(uTexture, vB);
              sum *= 0.25;
              gl_FragColor = sum;
          }
        `);
  
        const bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uTexture;
          uniform float intensity;
  
          void main () {
              vec4 sum = vec4(0.0);
              sum += texture2D(uTexture, vL);
              sum += texture2D(uTexture, vR);
              sum += texture2D(uTexture, vT);
              sum += texture2D(uTexture, vB);
              sum *= 0.25;
              gl_FragColor = sum * intensity;
          }
        `);
  
        const splatShader = compileShader(gl.FRAGMENT_SHADER, `
          precision highp float;
          precision highp sampler2D;
          varying vec2 vUv;
          uniform sampler2D uTarget;
          uniform float aspectRatio;
          uniform vec3 color;
          uniform vec2 point;
          uniform float radius;
  
          void main () {
              vec2 p = vUv - point.xy;
              p.x *= aspectRatio;
              vec3 splat = exp(-dot(p, p) / radius) * color;
              vec3 base = texture2D(uTarget, vUv).xyz;
              gl_FragColor = vec4(base + splat, 1.0);
          }
        `);
  
        const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
          precision highp float;
          precision highp sampler2D;
          varying vec2 vUv;
          uniform sampler2D uVelocity;
          uniform sampler2D uSource;
          uniform vec2 texelSize;
          uniform float dt;
          uniform float dissipation;
  
          void main () {
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              gl_FragColor = dissipation * texture2D(uSource, coord);
              gl_FragColor.a = 1.0;
          }
        `);
  
        const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uVelocity;
  
          void main () {
              float L = texture2D(uVelocity, vL).x;
              float R = texture2D(uVelocity, vR).x;
              float T = texture2D(uVelocity, vT).y;
              float B = texture2D(uVelocity, vB).y;
  
              vec2 C = texture2D(uVelocity, vUv).xy;
              if (vL.x < 0.0) { L = -C.x; }
              if (vR.x > 1.0) { R = -C.x; }
              if (vT.y > 1.0) { T = -C.y; }
              if (vB.y < 0.0) { B = -C.y; }
  
              float div = 0.5 * (R - L + T - B);
              gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
          }
        `);
  
        const curlShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uVelocity;
  
          void main () {
              float L = texture2D(uVelocity, vL).y;
              float R = texture2D(uVelocity, vR).y;
              float T = texture2D(uVelocity, vT).x;
              float B = texture2D(uVelocity, vB).x;
              float vorticity = R - L - T + B;
              gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
          }
        `);
  
        const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
          precision highp float;
          precision highp sampler2D;
          varying vec2 vUv;
          varying vec2 vL;
          varying vec2 vR;
          varying vec2 vT;
          varying vec2 vB;
          uniform sampler2D uVelocity;
          uniform sampler2D uCurl;
          uniform float curl;
          uniform float dt;
  
          void main () {
              float L = texture2D(uCurl, vL).x;
              float R = texture2D(uCurl, vR).x;
              float T = texture2D(uCurl, vT).x;
              float B = texture2D(uCurl, vB).x;
              float C = texture2D(uCurl, vUv).x;
  
              vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
              force /= length(force) + 0.0001;
              force *= curl * C;
              force.y *= -1.0;
  
              vec2 vel = texture2D(uVelocity, vUv).xy;
              gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
          }
        `);
  
        const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uPressure;
          uniform sampler2D uDivergence;
  
          void main () {
              float L = texture2D(uPressure, vL).x;
              float R = texture2D(uPressure, vR).x;
              float T = texture2D(uPressure, vT).x;
              float B = texture2D(uPressure, vB).x;
              float C = texture2D(uPressure, vUv).x;
              float divergence = texture2D(uDivergence, vUv).x;
              float pressure = (L + R + B + T - divergence) * 0.25;
              gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
          }
        `);
  
        const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
          precision mediump float;
          precision mediump sampler2D;
          varying highp vec2 vUv;
          varying highp vec2 vL;
          varying highp vec2 vR;
          varying highp vec2 vT;
          varying highp vec2 vB;
          uniform sampler2D uPressure;
          uniform sampler2D uVelocity;
  
          void main () {
              float L = texture2D(uPressure, vL).x;
              float R = texture2D(uPressure, vR).x;
              float T = texture2D(uPressure, vT).x;
              float B = texture2D(uPressure, vB).x;
              vec2 velocity = texture2D(uVelocity, vUv).xy;
              velocity.xy -= vec2(R - L, T - B);
              gl_FragColor = vec4(velocity, 0.0, 1.0);
          }
        `);
  
        // Initialize programs
        const clearProgram = new GLProgramClass(baseVertexShader, clearShader);
        const colorProgram = new GLProgramClass(baseVertexShader, colorShader);
        const displayProgram = new GLProgramClass(baseVertexShader, displayShader);
        const displayBloomProgram = new GLProgramClass(baseVertexShader, displayBloomShader);
        const bloomPrefilterProgram = new GLProgramClass(baseVertexShader, bloomPrefilterShader);
        const bloomBlurProgram = new GLProgramClass(baseVertexShader, bloomBlurShader);
        const bloomFinalProgram = new GLProgramClass(baseVertexShader, bloomFinalShader);
        const splatProgram = new GLProgramClass(baseVertexShader, splatShader);
        const advectionProgram = new GLProgramClass(baseVertexShader, advectionShader);
        const divergenceProgram = new GLProgramClass(baseVertexShader, divergenceShader);
        const curlProgram = new GLProgramClass(baseVertexShader, curlShader);
        const vorticityProgram = new GLProgramClass(baseVertexShader, vorticityShader);
        const pressureProgram = new GLProgramClass(baseVertexShader, pressureShader);
        const gradientSubtractProgram = new GLProgramClass(baseVertexShader, gradientSubtractShader);
  
        // Blit function
        const blit = (() => {
          gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
          gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(0);
  
          return (destination: WebGLFramebuffer | null) => {
            gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
          };
        })();
  
        // FBO creation functions
        const createFBO = (w: number, h: number, internalFormat: number, format: number, type: number, param: number): FBO => {
          gl.activeTexture(gl.TEXTURE0);
          const texture = gl.createTexture()!;
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
  
          const fbo = gl.createFramebuffer()!;
          gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
          gl.viewport(0, 0, w, h);
          gl.clear(gl.COLOR_BUFFER_BIT);
  
          return {
            texture,
            fbo,
            width: w,
            height: h,
            attach(id: number) {
              gl.activeTexture(gl.TEXTURE0 + id);
              gl.bindTexture(gl.TEXTURE_2D, texture);
              return id;
            }
          };
        };
  
        const createDoubleFBO = (w: number, h: number, internalFormat: number, format: number, type: number, param: number): DoubleFBO => {
          let fbo1 = createFBO(w, h, internalFormat, format, type, param);
          let fbo2 = createFBO(w, h, internalFormat, format, type, param);
  
          return {
            get read() { return fbo1; },
            set read(value) { fbo1 = value; },
            get write() { return fbo2; },
            set write(value) { fbo2 = value; },
            swap() {
              const temp = fbo1;
              fbo1 = fbo2;
              fbo2 = temp;
            }
          };
        };
  
        const createTextureAsync = (url: string) => {
          const texture = gl.createTexture()!;
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
  
          const obj = {
            texture,
            width: 1,
            height: 1,
            attach(id: number) {
              gl.activeTexture(gl.TEXTURE0 + id);
              gl.bindTexture(gl.TEXTURE_2D, texture);
              return id;
            }
          };
  
          return obj;
        };
  
        const getResolution = (resolution: number) => {
          let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
          if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
  
          const max = Math.round(resolution * aspectRatio);
          const min = Math.round(resolution);
  
          if (gl.drawingBufferWidth > gl.drawingBufferHeight) {
            return { width: max, height: min };
          } else {
            return { width: min, height: max };
          }
        };
  
        // Initialize framebuffers
        let simWidth: number, simHeight: number, dyeWidth: number, dyeHeight: number;
        let density: DoubleFBO, velocity: DoubleFBO, divergence: FBO, curl: FBO, pressure: DoubleFBO, bloom: FBO;
  
        const ditheringTexture = createTextureAsync("LDR_RGB1_0.png");
  
        const initFramebuffers = () => {
          const simRes = getResolution(config.SIM_RESOLUTION);
          const dyeRes = getResolution(config.DYE_RESOLUTION);
  
          simWidth = simRes.width;
          simHeight = simRes.height;
          dyeWidth = dyeRes.width;
          dyeHeight = dyeRes.height;
  
          const texType = ext.halfFloatTexType;
          const rgba = ext.formatRGBA;
          const rg = ext.formatRG;
          const r = ext.formatR;
          const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
  
          density = createDoubleFBO(dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, texType, filtering);
          velocity = createDoubleFBO(simWidth, simHeight, rg.internalFormat, rg.format, texType, filtering);
          divergence = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, gl.NEAREST);
          curl = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, gl.NEAREST);
          pressure = createDoubleFBO(simWidth, simHeight, r.internalFormat, r.format, texType, gl.NEAREST);
  
          initBloomFramebuffers();
        };
  
        const initBloomFramebuffers = () => {
          const res = getResolution(config.BLOOM_RESOLUTION);
          const texType = ext.halfFloatTexType;
          const rgba = ext.formatRGBA;
          const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
  
          bloom = createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);
  
          bloomFramebuffers.length = 0;
          for (let i = 0; i < config.BLOOM_ITERATIONS; i++) {
            let width = res.width >> (i + 1);
            let height = res.height >> (i + 1);
  
            if (width < 2 || height < 2) break;
  
            const fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
            bloomFramebuffers.push(fbo);
          }
        };
  
        // Utility functions
        const generateColor = () => {
          const HSVtoRGB = (h: number, s: number, v: number) => {
            let r: number, g: number, b: number;
            const i = Math.floor(h * 6);
            const f = h * 6 - i;
            const p = v * (1 - s);
            const q = v * (1 - f * s);
            const t = v * (1 - (1 - f) * s);
  
            switch (i % 6) {
              case 0: r = v; g = t; b = p; break;
              case 1: r = q; g = v; b = p; break;
              case 2: r = p; g = v; b = t; break;
              case 3: r = p; g = q; b = v; break;
              case 4: r = t; g = p; b = v; break;
              case 5: r = v; g = p; b = q; break;
              default: r = g = b = 0;
            }
  
            return { r, g, b };
          };
  
          const c = HSVtoRGB(Math.random(), 1.0, 1.0);
          c.r *= 0.15;
          c.g *= 0.15;
          c.b *= 0.15;
          return c;
        };
  
        const splat = (x: number, y: number, dx: number, dy: number, color: { r: number; g: number; b: number }) => {
          gl.viewport(0, 0, simWidth, simHeight);
          splatProgram.bind();
          gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
          gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
          gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
          gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
          gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100.0);
          blit(velocity.write.fbo);
          velocity.swap();
  
          gl.viewport(0, 0, dyeWidth, dyeHeight);
          gl.uniform1i(splatProgram.uniforms.uTarget, density.read.attach(0));
          gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
          blit(density.write.fbo);
          density.swap();
        };
  
        const multipleSplats = (amount: number) => {
          for (let i = 0; i < amount; i++) {
            const color = generateColor();
            color.r *= 10.0;
            color.g *= 10.0;
            color.b *= 10.0;
            const x = canvas.width * Math.random();
            const y = canvas.height * Math.random();
            const dx = 1000 * (Math.random() - 0.5);
            const dy = 1000 * (Math.random() - 0.5);
            splat(x, y, dx, dy, color);
          }
        };
  
        const resizeCanvas = () => {
          if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            initFramebuffers();
          }
        };
  
        const applyBloom = (source: FBO, destination: FBO) => {
          if (bloomFramebuffers.length < 2) return;
  
          let last = destination;
  
          gl.disable(gl.BLEND);
          bloomPrefilterProgram.bind();
          const knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;
          const curve0 = config.BLOOM_THRESHOLD - knee;
          const curve1 = knee * 2;
          const curve2 = 0.25 / knee;
          gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
          gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);
          gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
          gl.viewport(0, 0, last.width, last.height);
          blit(last.fbo);
  
          bloomBlurProgram.bind();
          for (let i = 0; i < bloomFramebuffers.length; i++) {
            const dest = bloomFramebuffers[i];
            gl.uniform2f(bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
            gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
            gl.viewport(0, 0, dest.width, dest.height);
            blit(dest.fbo);
            last = dest;
          }
  
          gl.blendFunc(gl.ONE, gl.ONE);
          gl.enable(gl.BLEND);
  
          for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
            const baseTex = bloomFramebuffers[i];
            gl.uniform2f(bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
            gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
            gl.viewport(0, 0, baseTex.width, baseTex.height);
            blit(baseTex.fbo);
            last = baseTex;
          }
  
          gl.disable(gl.BLEND);
          bloomFinalProgram.bind();
          gl.uniform2f(bloomFinalProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
          gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));
          gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
          gl.viewport(0, 0, destination.width, destination.height);
          blit(destination.fbo);
        };
  
        const render = (target: WebGLFramebuffer | null) => {
          if (config.BLOOM) applyBloom(density.read, bloom);
  
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          gl.enable(gl.BLEND);
  
          const width = target === null ? gl.drawingBufferWidth : dyeWidth;
          const height = target === null ? gl.drawingBufferHeight : dyeHeight;
  
          gl.viewport(0, 0, width, height);
  
          if (!config.TRANSPARENT) {
            colorProgram.bind();
            const bc = config.BACK_COLOR;
            gl.uniform4f(colorProgram.uniforms.color, bc.r / 255, bc.g / 255, bc.b / 255, 1);
            blit(target);
          }
  
          const program = config.BLOOM ? displayBloomProgram : displayProgram;
          program.bind();
          gl.uniform1i(program.uniforms.uTexture, density.read.attach(0));
          if (config.BLOOM) {
            gl.uniform1i(program.uniforms.uBloom, bloom.attach(1));
            gl.uniform1i(program.uniforms.uDithering, ditheringTexture.attach(2));
            const scale = { x: width / ditheringTexture.width, y: height / ditheringTexture.height };
            gl.uniform2f(program.uniforms.ditherScale, scale.x, scale.y);
          }
  
          blit(target);
        };
  
        const input = () => {
          if (splatStack.length > 0) {
            multipleSplats(splatStack.pop()!);
          }
  
          for (let i = 0; i < pointers.length; i++) {
            const p = pointers[i];
            if (p.moved) {
              splat(p.x, p.y, p.dx, p.dy, p.color);
              p.moved = false;
            }
          }
        };
  
        const step = (dt: number) => {
          gl.disable(gl.BLEND);
          gl.viewport(0, 0, simWidth, simHeight);
  
          curlProgram.bind();
          gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
          gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
          blit(curl.fbo);
  
          vorticityProgram.bind();
          gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
          gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
          gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
          gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
          gl.uniform1f(vorticityProgram.uniforms.dt, dt);
          blit(velocity.write.fbo);
          velocity.swap();
  
          divergenceProgram.bind();
          gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
          gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
          blit(divergence.fbo);
  
          clearProgram.bind();
          gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
          gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
          blit(pressure.write.fbo);
          pressure.swap();
  
          pressureProgram.bind();
          gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
          gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
          for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
            gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
            blit(pressure.write.fbo);
            pressure.swap();
          }
  
          gradientSubtractProgram.bind();
          gl.uniform2f(gradientSubtractProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
          gl.uniform1i(gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
          gl.uniform1i(gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
          blit(velocity.write.fbo);
          velocity.swap();
  
          advectionProgram.bind();
          gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
          const velocityId = velocity.read.attach(0);
          gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
          gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
          gl.uniform1f(advectionProgram.uniforms.dt, dt);
          gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
          blit(velocity.write.fbo);
          velocity.swap();
  
          gl.viewport(0, 0, dyeWidth, dyeHeight);
          gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
          gl.uniform1i(advectionProgram.uniforms.uSource, density.read.attach(1));
          gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
          blit(density.write.fbo);
          density.swap();
        };
  
        const update = () => {
          resizeCanvas();
          input();
          if (!config.PAUSED) step(0.016);
          render(null);
          requestAnimationFrame(update);
        };
  
        // Event listeners
        canvas.addEventListener('mousemove', (e) => {
          pointers[0].moved = pointers[0].down;
          pointers[0].dx = (e.offsetX - pointers[0].x) * 5.0;
          pointers[0].dy = (e.offsetY - pointers[0].y) * 5.0;
          pointers[0].x = e.offsetX;
          pointers[0].y = e.offsetY;
        });
  
        canvas.addEventListener('mousedown', () => {
          pointers[0].down = true;
          pointers[0].color = generateColor();
        });
  
        window.addEventListener('mouseup', () => {
          pointers[0].down = false;
        });
  
        // Color hover function for external use
        const colorHover = (e: MouseEvent) => {
          pointers[0].down = true;
          pointers[0].color = generateColor();
          pointers[0].moved = pointers[0].down;
          pointers[0].dx = (e.clientX - pointers[0].x) * 5.0;
          pointers[0].dy = (e.clientY - pointers[0].y) * 5.0;
          pointers[0].x = e.clientX;
          pointers[0].y = e.clientY;
        };
  
        // Initialize and start
        initFramebuffers();
        multipleSplats(parseInt(String(Math.random() * 20)) + 5);
        update();
  
        return { colorHover };
      };
  
      const fluidSim = initFluidSimulation();
      fluidSimRef.current = fluidSim;
  
      return () => {
        // Cleanup if needed
      };
    }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "sidpin.com@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+91  74538 69244",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "Near Miyawala Dharamshala, Birla Farm, Haripur Kalan, Uttarakhand 249205,India",
      description: "Our headquarters location"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM",
      description: "IST (Indian Standard Time)"
    }
  ];

  // const faqs = [
  //   {
  //     question: "What is the best programming language for web development?",
  //     answer: "It depends on your goals. Popular choices include PHP, Python, JavaScript (Node.js), and frameworks like Laravel, React, or Angular. We help you choose the right technology stack based on your specific project requirements, scalability needs, and business objectives."
  //   },
  //   {
  //     question: "What are the advantages of using a web framework?",
  //     answer: "Frameworks accelerate development, improve code quality, enhance security, and enable scalable solutions. They provide pre-built components, follow best practices, and offer standardized patterns that make development more efficient and maintainable."
  //   },
  //   {
  //     question: "What is the difference between client-side and server-side scripting?",
  //     answer: "Client-side scripting (JavaScript) runs on the browser and handles user interface interactions, while server-side scripting (PHP, Python, Node.js) runs on the server to create dynamic content, handle databases, and manage business logic."
  //   },
  //   {
  //     question: "How long does it take to develop a website?",
  //     answer: "Timeline varies based on complexity. A simple business website takes 2-4 weeks, while complex e-commerce or custom applications may take 6-12 weeks. We provide detailed timelines during the planning phase."
  //   },
  //   {
  //     question: "Do you provide ongoing support and maintenance?",
  //     answer: "Yes, we offer comprehensive support and maintenance packages including security updates, content updates, performance monitoring, backup management, and technical support to keep your website running smoothly."
  //   },
  //   {
  //     question: "What is responsive web design?",
  //     answer: "Responsive design ensures your website looks and functions perfectly on all devices - smartphones, tablets, and desktops. It automatically adjusts layout, images, and content to provide optimal user experience across different screen sizes."
  //   }
  // ];

  // const toggleFaq = (index: number) => {
  //   setOpenFaq(openFaq === index ? null : index);
  // };

  return (
    <div className="min-h-screen relative font-outfit">
      {/* Hero Section */}

      {/* <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <FloatingSpheres numberOfSpheres={10} />
        <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Contact Us</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to start your project? Get in touch with our team for a free consultation and quote.
            </motion.p>
          </div>
        </div>
      </section> */}

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          <div
            className="container mx-auto px-4 py-20 min-h-screen flex items-center"
            onMouseMove={colorHover}
          >
        {/* <div className="min-h-screen bg-gray-900 text-white overflow-hidden"> */}
        <div className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999999999999999999]">
        <div
          ref={ballRef}
          className={`absolute w-5 h-5 bg-purple-500 rounded-full transition-transform duration-200 ease-out ${
            isHovering ? 'scale-200 bg-purple-500' : ''
          }`}
          style={{
            background: 'rgba(255, 114, 114, 0.8)',
            transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transformOrigin: 'center center'
          }}
        />
      </div>
        <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gradient text-6xl md:text-8xl font-bold mb-6 mouse-move boom"> Let's Talk Us</span>
      {/* <Smoke /> */}
        </div>
        </div>
        {/* </div> */}

      <style jsx>{`
        .scale-200 {
          transform: scale(2) !important;
        }
      `}</style>

      </section>


      {/* Contact Info Cards */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-md transition-all duration-300 border-border/50 text-center h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
                <CardHeader className="text-center relative">
                  <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+91  74538 69244"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="wordpress">WordPress Development</option>
                          <option value="custom">Custom Web Development</option>
                          <option value="ecommerce">E-commerce Development</option>
                          <option value="consulting">Web Development Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Project inquiry"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-input rounded-md resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                        required
                      />
                    </div>
                    
                    <div>
                      <CTAButton className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send Message
                      </CTAButton>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our web development services and process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/30 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    {openFaq === index && (
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Location Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Based in the beautiful state of Uttarakhand, serving clients globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-lg border border-border/50 overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Uttarakhand, India</h3>
                <p className="text-muted-foreground">
                  Our team is based in Uttarakhand, providing local expertise with global standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
