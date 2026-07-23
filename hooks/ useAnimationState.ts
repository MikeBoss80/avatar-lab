'use client';

import { useState } from 'react';
import { AvatarState } from '@/lib/AvatarStates';

export function useAvatarState() {
  const [state, setState] = useState(AvatarState.FLOAT);

  return {
    state,
    setState,
  };
}