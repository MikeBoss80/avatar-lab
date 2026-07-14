import { AnimationPlayer } from "./AnimationPlayer";
import { AnimationMap } from "./AnimationMap";
import { AnimationState } from "./AnimationState";

export class AnimationStateMachine {
  private currentState?: AnimationState;

  constructor(
    private readonly player: AnimationPlayer
  ) {}

  public setState(state: AnimationState): void {
    if (this.currentState === state) {
      return;
    }

    this.currentState = state;

    const clip = AnimationMap[state];

    this.player.play(clip);
  }

  public getState(): AnimationState | undefined {
    return this.currentState;
  }
}