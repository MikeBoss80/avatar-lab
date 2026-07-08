import * as THREE from "three";

export interface FloatOptions {
  height?: number;
  speed?: number;
  rotationSpeed?: number;
}

export class AnimationSystem {
  static float(
    object: THREE.Object3D,
    elapsedTime: number,
    options: FloatOptions = {}
  ) {
    const {
      height = 0.15,
      speed = 1,
      rotationSpeed = 0.005,
    } = options;

    object.rotation.y += rotationSpeed;

    object.position.y =
      Math.sin(elapsedTime * speed) * height;
  }
}