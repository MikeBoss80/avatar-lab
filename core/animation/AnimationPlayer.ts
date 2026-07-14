import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  LoopRepeat,
  Object3D,
} from "three";

export class AnimationPlayer {
  private readonly mixer: AnimationMixer;

  private readonly clips: AnimationClip[];

  private currentAction?: AnimationAction;

  constructor(
    scene: Object3D,
    clips: AnimationClip[]
  ) {
    this.mixer = new AnimationMixer(scene);
    this.clips = clips;
  }

  update(delta: number): void {
    this.mixer.update(delta);
  }

  play(name: string): boolean {
    if (!name) {
      console.warn("No animation name provided.");
      return false;
    }

    console.log("Buscando:", name);
    console.log(
      "Disponibles:",
      this.clips.map((c) => c.name)
    );

    const clip = this.clips.find(
      (clip) => clip.name === name
    );

    if (!clip) {
      console.warn(`Animation "${name}" not found.`);
      return false;
    }

    this.currentAction?.fadeOut(0.25);

    const action = this.mixer.clipAction(clip);

    action.reset();
    action.setLoop(LoopRepeat, Infinity);
    action.fadeIn(0.25);
    action.play();

    this.currentAction = action;

    return true;
  }
}