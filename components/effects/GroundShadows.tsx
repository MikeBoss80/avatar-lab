'use client';

import { ContactShadows } from '@react-three/drei';

export default function GroundShadows() {
  return (
    <ContactShadows
      position={[0, -0.99, 0]}
      opacity={0.6}
      scale={10}
      blur={2.5}
      far={4}
    />
  );
}