import { AnimationState } from "@/core/animation/AnimationState";
import { AnimationStateMachine } from "@/core/animation/AnimationStateMachine";

export class AvatarController {
  constructor(
    private readonly stateMachine: AnimationStateMachine
  ) {}

  public idle(): void {
    this.stateMachine.setState(AnimationState.Idle);
  }

  public Breathing(): void {
    this.stateMachine.setState(AnimationState.Breathing);
  }

  public walk(): void {
    this.stateMachine.setState(AnimationState.Walking);
  }

  public pistolAim(): void {
    this.stateMachine.setState(AnimationState.PistolAim);
  }

  public pistolRun(): void {
    this.stateMachine.setState(AnimationState.PistolRun);
  }

  public shoot(): void {
    this.stateMachine.setState(AnimationState.Shooting);
  }

  public talk(): void {
    this.stateMachine.setState(AnimationState.TalkingPhone);
  }

  public talkWhileWalking(): void {
    this.stateMachine.setState(AnimationState.TalkingPhonePacing);
  }
}