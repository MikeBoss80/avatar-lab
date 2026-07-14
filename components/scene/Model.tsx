'use client';

import { forwardRef } from 'react';
import * as THREE from 'three';

import SceneObject from './SceneObject';

import { useGLTF } from '@react-three/drei';


export interface ModelProps {
  path: string;

  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

const Model = forwardRef<THREE.Group, ModelProps>(
  (
    {
      path,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      scale = 1,
    },
    ref
  ) => {
    const { scene } = useGLTF(path);

    return (
      <SceneObject
        ref={ref}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <primitive object={scene} />
      </SceneObject>
    );
  }
);

Model.displayName = 'Model';

export default Model;