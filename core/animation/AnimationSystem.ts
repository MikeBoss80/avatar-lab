import { Object3D } from "three";
import { AnimationBehavior } from "./AnimationBehavior";

export class AnimationSystem {

    /**
     * Lista de comportamientos registrados.
     */
    private behaviors: AnimationBehavior[] = [];

    /**
     * Registra un nuevo comportamiento.
     */
    add(behavior: AnimationBehavior): void {
        this.behaviors.push(behavior);
    }

    /**
     * Elimina un comportamiento registrado.
     */
    remove(behavior: AnimationBehavior): void {
        this.behaviors = this.behaviors.filter(
            current => current !== behavior
        );
    }

    /**
     * Ejecuta todos los comportamientos registrados.
     */
    update(
        object: Object3D,
        elapsedTime: number
    ): void {

        for (const behavior of this.behaviors) {
            behavior.update(
                object,
                elapsedTime
            );
        }

    }

}