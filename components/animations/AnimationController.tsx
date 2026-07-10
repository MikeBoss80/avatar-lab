'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Object3D  } from 'three';

import { AnimationSystem } from '@/core/animation/AnimationSystem';
import { FloatBehavior } from '@/core/animation/behaviors/FloatBehavior';
import { RotateBehavior } from '@/core/animation/behaviors/ RotateBehavior';

interface AnimationControllerProps {
    target: MutableRefObject<Object3D | null>;
}

export default function AnimationController({
    target,
}: AnimationControllerProps) {

    const animationSystem =
        useRef(new AnimationSystem());

    useEffect(() => {

        animationSystem.current.add(
            new FloatBehavior()
        );
        animationSystem.current.add(
            new RotateBehavior({
                speed: 0.002,
            })
        );

    }, []);

    useFrame(({ clock }) => {

        if (!target.current) return;

        animationSystem.current.update(
            target.current,
            clock.elapsedTime
        );

    });

    return null;
}