'use client';

import { Canvas } from '@react-three/fiber';
import Experience from '@/components/scene/Experience';

export default function Home() {
  return (
    <main className="h-screen w-screen bg-black">
      <Canvas>
        <Experience />
      </Canvas>
    </main>
  );
}