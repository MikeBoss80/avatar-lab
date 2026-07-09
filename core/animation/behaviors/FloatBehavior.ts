import { Object3D } from "three";

import { AnimationBehavior } from "../AnimationBehavior";

export interface FloatOptions {
    height?: number;
    speed?: number;
    rotationSpeed?: number;
}

export class FloatBehavior implements AnimationBehavior {

    private readonly options: Required<FloatOptions>;

    constructor(options: FloatOptions = {}) {

        this.options = {

            height: 0.15,

            speed: 1,

            rotationSpeed: 0.005,

            ...options

        };

    }

    update(
        object: Object3D,
        elapsedTime: number
    ): void {

        object.rotation.y += this.options.rotationSpeed;

        object.position.y =
            Math.sin(
                elapsedTime * this.options.speed
            ) * this.options.height;

    }

}