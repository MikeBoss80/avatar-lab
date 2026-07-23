import { AnimationPlayer } from "../animation/AnimationPlayer";
import { AnimationMap } from "../animation/AnimationMap";
import { AvatarState } from "core/avatar/AvatarState";

export class AvatarStateMachine {
  private currentState?: AvatarState;

  constructor(
    private readonly player: AnimationPlayer
  ) {}

  public setState(state: AvatarState): void {
    if (this.currentState === state) {
      return;
    }

    this.currentState = state;

    const clip = AnimationMap[state];

    this.player.play(clip);
  }

  public getState(): AvatarState | undefined {
    return this.currentState;
  }
}