'use client';

import { forwardRef } from 'react';
import * as THREE from 'three';

import SceneObject from './SceneObject';

const Cube = forwardRef<THREE.Group>((_, ref) => {
  return (
    <SceneObject ref={ref}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
          color="#7C3AED"
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>
    </SceneObject>
  );
});

Cube.displayName = 'Cube';

export default Cube;