'use client';

import Cube from './Cube';
import Lights from './Lights';
import Controls from './Controls';
import Floor from './Floor';
import EnvironmentScene from '../environment/EnvironmentScene';
import GroundShadows from '../effects/GroundShadows';
import CameraRig from '../camera/CameraRig';
import FloatingAnimation from '../animations/FloatingAnimation';
import { Environment } from '@react-three/drei';


import { useRef } from 'react';
import * as THREE from 'three';



export default function Experience() {
  const cubeRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <CameraRig />

      <EnvironmentScene />

      <Lights />

      <Cube ref={cubeRef} />

      <FloatingAnimation target={cubeRef} />

      <Floor />

      <GroundShadows />

      <Controls />
    </>
  );
}