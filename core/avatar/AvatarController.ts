import { AvatarState } from "core/avatar/AvatarState";
import { AvatarStateMachine } from "@/core/avatar/AvatarStateMachine";

export class AvatarController {
  constructor(
    private readonly stateMachine: AvatarStateMachine
  ) {}

  public idle(): void {
    this.stateMachine.setState(AvatarState.Idle);
  }

  public Breathing(): void {
    this.stateMachine.setState(AvatarState.Breathing);
  }

  public walk(): void {
    this.stateMachine.setState(AvatarState.Walking);
  }

  public pistolAim(): void {
    this.stateMachine.setState(AvatarState.PistolAim);
  }

  public pistolRun(): void {
    this.stateMachine.setState(AvatarState.PistolRun);
  }

  public shoot(): void {
    this.stateMachine.setState(AvatarState.Shooting);
  }

  public talk(): void {
    this.stateMachine.setState(AvatarState.TalkingPhone);
  }

  public talkWhileWalking(): void {
    this.stateMachine.setState(AvatarState.TalkingPhonePacing);
  }
} 