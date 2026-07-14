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

  play(name: string): void {
    const clip = AnimationClip.findByName(this.clips, name);

    if (!clip) {
      console.warn(`Animation "${name}" not found.`);
      return;
    }

    this.currentAction?.stop();

    this.currentAction = this.mixer.clipAction(clip);
    this.currentAction.reset();
    this.currentAction.setLoop(LoopRepeat, Infinity);
    this.currentAction.play();
  }

  getClips(): AnimationClip[] {
    return this.clips;
  }
}