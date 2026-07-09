'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

import { AnimationSystem } from '@/core/animation/AnimationSystem';
import { FloatBehavior } from '@/core/animation/behaviors/FloatBehavior';

interface AnimationControllerProps {
    target: MutableRefObject<Mesh | null>;
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