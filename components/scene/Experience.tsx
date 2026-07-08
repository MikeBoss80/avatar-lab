'use client';

import Cube from './Cube';
import Lights from './Lights';
import Controls from './Controls';
import Floor from './Floor';
import EnvironmentScene from '../environment/EnvironmentScene';
import GroundShadows from '../effects/GroundShadows';
import CameraRig from '../camera/CameraRig';
import { Environment } from '@react-three/drei';

export default function Experience() {
  return (
    <>

      <CameraRig />

      <EnvironmentScene />

      <Lights />

      <Cube />

      <Floor />

      <GroundShadows />

      <Controls />
    </>
  );
}