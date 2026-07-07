'use client';

import { OrbitControls } from '@react-three/drei';

export default function Controls() {
  return (
    <OrbitControls
      enableDamping
      dampingFactor={0.08}
      maxPolarAngle={Math.PI / 1.8}
      minDistance={3}
      maxDistance={8}
    />
  );
}