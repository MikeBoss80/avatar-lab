'use client';

import Cube from './Cube';
import Lights from './Lights';
import Controls from './Controls';
import Floor from './Floor';
import EnvironmentScene from '../environment/EnvironmentScene';
import GroundShadows from '../effects/GroundShadows';
import CameraRig from '../camera/CameraRig';
import { Environment } from '@react-three/drei';


import { useRef } from 'react';
import * as THREE from 'three';
import AnimationController from '../animations/AnimationController';



export default function Experience() {
  const cubeRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <CameraRig />

      <EnvironmentScene />

      <Lights />

      <Cube ref={cubeRef} />

      <AnimationController  target={cubeRef} />

      <Floor />

      <GroundShadows />

      <Controls />
    </>
  );
}