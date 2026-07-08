'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Cube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.y += 0.005;

    cubeRef.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <mesh
      ref={cubeRef}
      position={[0, 0, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial
        color="#7C3AED"
        roughness={0.35}
        metalness={0.15}
      />
    </mesh>
  );
}