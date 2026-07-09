import { Object3D } from "three";

/**
 * Contrato que debe cumplir cualquier comportamiento
 * de animación dentro del motor.
 */
export interface AnimationBehavior {

    /**
     * Actualiza el comportamiento cada frame.
     */
    update(
        object: Object3D,
        elapsedTime: number
    ): void;

}