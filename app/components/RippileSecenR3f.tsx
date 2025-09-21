"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Icosahedron } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { ShaderPass } from "postprocessing";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";

const MAX_RIPPLES = 10;
type Ripple = { center: THREE.Vector2; startTime: number };

interface RippleSceneR3FProps {
  position?: "center" | "left" | "right" | "top" | "bottom";
  scale?: [number, number, number];
}

function Scene({
  position = "center",
  scale = [1, 1, 1],
}: RippleSceneR3FProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { size, gl } = useThree();
  const aspect = size.width / size.height;

  // Calculate position based on prop
  const getPosition = (): [number, number, number] => {
    switch (position) {
      case "left":
        return [-2, 0, 0];
      case "right":
        return [2, 0, 0];
      case "top":
        return [0, 2, 0];
      case "bottom":
        return [0, -2, 0];
      case "center":
      default:
        return [0, 0, 0];
    }
  };

  // Ripples
  const ripplesRef = useRef<Ripple[]>([]);
  const rippleDuration = 25; // seconds

  // Ripple shader material (postprocessing ShaderPass expects a ShaderMaterial)
  const rippleMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        // tDiffuse is filled by ShaderPass automatically
        tDiffuse: { value: null },
        centers: {
          value: Array(MAX_RIPPLES)
            .fill(0)
            .map(() => new THREE.Vector2(0.5, 0.5)),
        },
        times: { value: Array(MAX_RIPPLES).fill(0.0) },
        rippleActive: { value: Array(MAX_RIPPLES).fill(0.0) },
        maxRadius: { value: 1.0 },
        amplitude: { value: 0.03 },
        secondaryAmplitude: { value: 0.01 },
        speed: { value: 0.3 },
        frequency: { value: 10.0 },
        aspect: { value: aspect },
        smoothing: { value: 0.95 },
        sigma: { value: 0.6 },
        fadeDuration: { value: 6.0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        #define PI 3.14159265359
        #define MAX_RIPPLES ${MAX_RIPPLES}
        uniform sampler2D tDiffuse;
        uniform vec2 centers[MAX_RIPPLES];
        uniform float times[MAX_RIPPLES];
        uniform float rippleActive[MAX_RIPPLES];
        uniform float maxRadius;
        uniform float amplitude;
        uniform float secondaryAmplitude;
        uniform float speed;
        uniform float frequency;
        uniform float aspect;
        uniform float smoothing;
        uniform float sigma;
        uniform float fadeDuration;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 totalWave = vec2(0.0);
          for (int i = 0; i < MAX_RIPPLES; i++) {
            if (rippleActive[i] > 0.0) {
              vec2 aspectUV = vec2((uv.x - centers[i].x) * aspect, uv.y - centers[i].y);
              float dist = length(aspectUV);
              float t = times[i] * speed;
              if (dist < t) {
                float normDist = dist / maxRadius;
                float decay = 1.0 / (1.0 + sigma * normDist * normDist);
                float timeFade = pow(smoothstep(fadeDuration, fadeDuration - 2.0, times[i]), 2.0);
                float smoothFactor = smoothstep(1.0 - smoothing, 1.0, normDist);
                float primaryWave = amplitude * sin(frequency * (t - dist)) * decay * (1.0 - smoothFactor) * timeFade;
                float secondaryWave = secondaryAmplitude * sin(0.5 * frequency * (t - dist) + PI) * decay * (1.0 - smoothFactor) * timeFade;
                totalWave += normalize(aspectUV) * (primaryWave + secondaryWave);
              }
            }
          }
          uv += totalWave;
          gl_FragColor = texture2D(tDiffuse, clamp(uv, 0.0, 1.0));
        }
      `,
    });
  }, [aspect]);

  // ShaderPass instance (stable)
  const ripplePass = useMemo(
    () => new ShaderPass(rippleMaterial, "tDiffuse"),
    [rippleMaterial]
  );

  // Keep aspect uniform in sync
  useEffect(() => {
    (rippleMaterial.uniforms.aspect as any).value = aspect;
  }, [aspect, rippleMaterial.uniforms.aspect]);

  // Double-click → add ripple
  useEffect(() => {
    const onDblClick = (e: MouseEvent) => {
      const center = new THREE.Vector2(
        e.clientX / size.width,
        1 - e.clientY / size.height
      );
      const startTime = performance.now() / 1000;
      ripplesRef.current.push({ center, startTime });
      if (ripplesRef.current.length > MAX_RIPPLES) ripplesRef.current.shift();
    };
    gl.domElement.addEventListener("dblclick", onDblClick);
    return () => gl.domElement.removeEventListener("dblclick", onDblClick);
  }, [gl.domElement, size.width, size.height]);

  // Pause when hidden
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const vis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", vis);
    return () => document.removeEventListener("visibilitychange", vis);
  }, []);

  // Animate
  useFrame(() => {
    if (paused) return;

    if (groupRef.current) {
      groupRef.current.rotation.x += 0.002;
      groupRef.current.rotation.y += 0.003;
    }

    const now = performance.now() / 1000;
    const centers = rippleMaterial.uniforms.centers.value as THREE.Vector2[];
    const times = rippleMaterial.uniforms.times.value as number[];
    const active = rippleMaterial.uniforms.rippleActive.value as number[];
    for (let i = 0; i < MAX_RIPPLES; i++) {
      const r = ripplesRef.current[i];
      if (r) {
        centers[i].copy(r.center);
        times[i] = now - r.startTime;
        active[i] = times[i] < rippleDuration ? 1.0 : 0.0;
      } else {
        active[i] = 0.0;
      }
    }
    ripplesRef.current = ripplesRef.current.filter(
      (r) => now - r.startTime < rippleDuration
    );
  });

  // Stars
  const stars = useMemo(() => {
    const starCount = 1000;
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 200;
    return pos;
  }, []);

  // Outer surface points
  const outerPositions = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.15, 3);
    const a = geo.attributes.position as THREE.BufferAttribute;
    const arr = new Float32Array(a.count * 3);
    for (let i = 0; i < a.count; i++) {
      arr[i * 3 + 0] = a.getX(i);
      arr[i * 3 + 1] = a.getY(i);
      arr[i * 3 + 2] = a.getZ(i);
    }
    geo.dispose();
    return arr;
  }, []);

  return (
    <>
      <OrbitControls enableDamping dampingFactor={0.08} />

      {/* Stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            args={[stars, 3]}
            attach="attributes-position"
            array={stars}
            itemSize={3}
            count={stars.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} sizeAttenuation color={"cyan"} />
      </points>

      {/* Main group */}
      <group ref={groupRef} position={getPosition()} scale={scale}>
        <Icosahedron args={[1, 3]}>
          <meshStandardMaterial
            color={0x222222}
            roughness={0.5}
            metalness={1}
            flatShading
            transparent
            opacity={0.7}
          />
        </Icosahedron>

        <Icosahedron args={[1.15, 3]}>
          <meshBasicMaterial
            color={0xffffff}
            wireframe
            transparent
            opacity={0.1}
          />
        </Icosahedron>

        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[outerPositions, 3]}
              attach="attributes-position"
              array={outerPositions}
              itemSize={3}
              count={outerPositions.length / 3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.025} color={"cyan"} />
        </points>
      </group>

      {/* Postprocessing */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.5}
          luminanceThreshold={0.05}
          luminanceSmoothing={0.4}
        />
        {/* Use postprocessing ShaderPass via primitive */}
        <primitive object={ripplePass} />
      </EffectComposer>

      <pointLight position={[5, 5, 5]} intensity={1} />
    </>
  );
}

export default function RippleSceneR3F({
  position = "center",
  scale = [1, 1, 1],
}: RippleSceneR3FProps) {
  const [setHover] = useState(false);
  // Remove this line: useCursor(hover);

  return (
    <Canvas
      className="block h-screen w-screen"
      dpr={[1, 1.75]}
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        alpha: false,
        preserveDrawingBuffer: false,
      }}
      camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 5] }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Scene position={position} scale={scale} />
    </Canvas>
  );
}
