import { Object3D } from "three";

import { AnimationBehavior } from "../AnimationBehavior";

export interface FloatOptions {
    height?: number;
    speed?: number;
}

export class FloatBehavior implements AnimationBehavior {

    private readonly options: Required<FloatOptions>;

    constructor(options: FloatOptions = {}) {

        this.options = {

            height: 0.015,

            speed: 0.01,

            ...options

        };

    }

    update(
        object: Object3D,
        elapsedTime: number
    ): void {


        object.position.y =
            Math.sin(
                elapsedTime * this.options.speed
            ) * this.options.height;

    }

}