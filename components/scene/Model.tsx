'use client';

import { forwardRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import SceneObject from './SceneObject';

import { AnimationPlayer } from '@/core/animation/AnimationPlayer';

import { AnimationStateMachine } from "@/core/animation/AnimationStateMachine";
import { AnimationState } from "@/core/animation/AnimationState";

import { AvatarController } from "@/core/avatar/AvatarController";

import { InputController } from "@/core/input/InputController";


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

    const stateMachine = useMemo(() => {
      return new AnimationStateMachine(player);
    }, [player]);

    const controller = useMemo(() => {
      return new AvatarController(stateMachine);
    }, [stateMachine]);

    const input = useMemo(() => {
      return new InputController(controller);
    }, [controller]);
    
    useEffect(() => {
      controller.Breathing();
    }, [controller]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        input.handleKeyDown(event.key);
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [input]);

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