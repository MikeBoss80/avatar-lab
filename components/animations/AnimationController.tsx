'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Object3D  } from 'three';
import * as THREE from 'three';

import { AnimationSystem } from '@/core/animation/AnimationSystem';
import { AnimationBehavior } from "@/core/animation/AnimationBehavior";


interface AnimationControllerProps {
  target: MutableRefObject<THREE.Object3D | null>;
  behaviors: AnimationBehavior[];
}

export default function AnimationController({
    target,
    behaviors
}: AnimationControllerProps) {

    const animationSystem =
        useRef(new AnimationSystem());

    useEffect(() => {
  behaviors.forEach((behavior) => {
    animationSystem.current.add(behavior);
  });
}, [behaviors]);

    useFrame(({ clock }) => {

        if (!target.current) return;

        animationSystem.current.update(
            target.current,
            clock.elapsedTime
        );

    });

    return null;
}