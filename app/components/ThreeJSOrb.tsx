"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import React from "react";

// Type definitions
interface SmallSphereProps {
  position: [number, number, number];
  index: number;
}

interface SphereOfSpheresProps {}

interface AmbientParticlesProps {}

// Individual sphere component
function SmallSphere({ position, index }: SmallSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Individual sphere animations
      const time = state.clock.elapsedTime;

      // Pulsing effect based on position and time
      const scale = 1 + Math.sin(time * 2 + index * 0.1) * 0.15;
      meshRef.current.scale.setScalar(scale);

      // Slight rotation
      meshRef.current.rotation.x = time * 0.5 + index;
      meshRef.current.rotation.y = time * 0.3 + index;

      // Color shifting with brighter colors
      const hue = (time * 0.1 + index * 0.02) % 1;
      (meshRef.current.material as THREE.MeshStandardMaterial).color.setHSL(
        hue,
        0.8, // Increased saturation
        0.6 // Increased lightness
      );
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color="#4A90E2"
        metalness={0.3}
        roughness={0.1}
        emissive="#1E3A8A"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Main sphere container
function SphereOfSpheres({}: SphereOfSpheresProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate positions for spheres arranged in a larger sphere
  const spherePositions = useMemo((): [number, number, number][] => {
    const positions: [number, number, number][] = [];
    const radius = 2;
    const levels = 12;

    for (let i = 0; i < levels; i++) {
      const phi = (Math.PI * i) / (levels - 1); // From 0 to π
      const y = radius * Math.cos(phi);
      const ringRadius = radius * Math.sin(phi);

      // Number of spheres in this ring
      const spheresInRing = Math.max(1, Math.floor(ringRadius * 8));

      for (let j = 0; j < spheresInRing; j++) {
        const theta = (2 * Math.PI * j) / spheresInRing;
        const x = ringRadius * Math.cos(theta);
        const z = ringRadius * Math.sin(theta);

        positions.push([x, y, z]);
      }
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire sphere
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;

      // Gentle floating motion
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

      // Overall scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {spherePositions.map((position, index) => (
        <SmallSphere key={index} position={position} index={index} />
      ))}
    </group>
  );
}

// Ambient particles for extra effect
function AmbientParticles({}: AmbientParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 300;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60A5FA"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Central glowing orb
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;

      // Pulsing glow effect
      const scale = 1 + Math.sin(time * 1.5) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#3B82F6"
        metalness={0.1}
        roughness={0.1}
        emissive="#1E40AF"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Main component
export default function SphereAnimation() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "#000000" }}
      >
        {/* Enhanced Lighting setup */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#60A5FA" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#F59E0B" />
        <pointLight position={[0, 5, 0]} intensity={1.5} color="#10B981" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.4}
          penumbra={0.5}
          intensity={1}
          color="#8B5CF6"
        />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.5}
          color="#FFFFFF"
        />

        {/* Central glowing orb */}
        <CentralOrb />

        {/* Main sphere animation */}
        <SphereOfSpheres />

        {/* Ambient particles */}
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
