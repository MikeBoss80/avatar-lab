'use client';

import { forwardRef } from 'react';
import * as THREE from 'three';

const Cube = forwardRef<THREE.Mesh>((_, ref) => {
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial
        color="#7C3AED"
        roughness={0.35}
        metalness={0.15}
      />
    </mesh>
  );
});

Cube.displayName = 'Cube';

export default Cube;