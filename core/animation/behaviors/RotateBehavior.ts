import { Object3D } from "three";

import { AnimationBehavior } from "../AnimationBehavior";

export interface RotateOptions {

    speed?: number;

    axis?: "x" | "y" | "z";

}

const DEFAULT_ROTATE_OPTIONS: Required<RotateOptions> = {

    speed: 0.0001,

    axis: "y",

};

export class RotateBehavior
implements AnimationBehavior {

    private readonly options:
        Required<RotateOptions>;

    constructor(
        options: RotateOptions = {}
    ) {

        this.options = {
            ...DEFAULT_ROTATE_OPTIONS,

            ...options,
        };
    }

    update(
        object: Object3D,
        elapsedTime: number
    ): void {
        object.rotation[
            this.options.axis
        ] += this.options.speed;
    }
}