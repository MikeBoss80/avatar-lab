'use client';

export default function Lights() {
  return (
    <>
      {/* Luz ambiente */}
      <ambientLight intensity={0.25} />

      {/* Key Light */}
      <directionalLight
        castShadow
        position={[5, 6, 5]}
        intensity={5.8}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill Light */}
      <directionalLight
        position={[-4, 3, 2]}
        intensity={1.8}
      />

      {/* Back Light */}
      <directionalLight
        position={[0, 5, -6]}
        intensity={2.2}
      />
    </>
  );
}