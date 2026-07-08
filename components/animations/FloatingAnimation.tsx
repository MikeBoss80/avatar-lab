'use client';

import { AnimationSystem } from '@/core/animation/AnimationSystem';
import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import * as THREE from 'three';

interface Props {
  target: RefObject<THREE.Mesh | null>;
}

export default function FloatingAnimation({ target }: Props) {
  useFrame((state)=>{

   if(!target.current) return;

   AnimationSystem.float(

      target.current,

      state.clock.elapsedTime

   );

});

  return null;
}