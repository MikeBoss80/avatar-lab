'use client';

import { useRef } from 'react';
import * as THREE from 'three';

import Cube from './Cube';
import Lights from './Lights';
import Controls from './Controls';
import Floor from './Floor';
import EnvironmentScene from '../environment/EnvironmentScene';
import GroundShadows from '../effects/GroundShadows';
import CameraRig from '../camera/CameraRig';

import AnimationController from '../animations/AnimationController';

import { FloatBehavior } from '@/core/animation/behaviors/FloatBehavior';
import { RotateBehavior } from '@/core/animation/behaviors/RotateBehavior';

import { AvatarConfig } from '@/core/Avatar/AvatarConfig';


import Model from './Model';
import { AssetPaths } from '@/core/assets/AssetPaths';

export default function Experience() {
  const objectRef = useRef<THREE.Group>(null);

  const cubeBehaviors = [
    new FloatBehavior(),
    new RotateBehavior(),
  ];

  return (
    <>
      <CameraRig />

      <EnvironmentScene />

      <Lights />

      <Model
        ref={objectRef}
        {...AvatarConfig.model}
      />

      <AnimationController
        target={objectRef}
        behaviors={AvatarConfig.behaviors}
      />

      <Floor />

      <GroundShadows />

      <Controls />
    </>
  );
}