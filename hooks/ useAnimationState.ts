'use client';

import { useState } from 'react';
import { AnimationState } from '@/lib/animationStates';

export function useAnimationState() {
  const [state, setState] = useState(AnimationState.FLOAT);

  return {
    state,
    setState,
  };
}