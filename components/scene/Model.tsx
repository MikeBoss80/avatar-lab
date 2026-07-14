'use client';

import { forwardRef, useEffect, useRef } from 'react';
import * as THREE from 'three';
import SceneObject from './SceneObject';
import { useGLTF } from '@react-three/drei';
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimationPlayer } from "@/core/animation/AnimationPlayer";
import { AvatarConfig } from '@/core/avatar/AvatarConfig';

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
        const { scene, animations } = useGLTF(path);

        const player = useMemo(() => {
        return new AnimationPlayer(scene, animations);
        }, [scene, animations]);

        useEffect(() => {
        player.play(AvatarConfig.defaultAnimation);
        }, [player]);

        useFrame((_, delta) => {
        player.update(delta);
        });
    
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