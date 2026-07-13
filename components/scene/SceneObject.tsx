'use client';

import { forwardRef } from 'react';
import * as THREE from 'three';

export interface SceneObjectProps {
  children: React.ReactNode;

  position?: [number, number, number];

  rotation?: [number, number, number];

  scale?: number | [number, number, number];

  castShadow?: boolean;

  receiveShadow?: boolean;
}

const SceneObject = forwardRef<THREE.Group, SceneObjectProps>(
  (
    {
      children,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      scale = 1,
      castShadow = true,
      receiveShadow = true,
    },
    ref
  ) => {
    return (
      <group
        ref={ref}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        {children}
      </group>
    );
  }
);

SceneObject.displayName = 'SceneObject';

export default SceneObject;