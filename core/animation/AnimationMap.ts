import { AvatarState } from "core/avatar/AvatarState";

export const AnimationMap: Record<AvatarState, string> = {
  [AvatarState.Idle]: "idle",
  [AvatarState.Breathing]: "Breathing Idle",
  [AvatarState.Walking]: "walking",
  [AvatarState.PistolAim]: "Pistol Aim",
  [AvatarState.PistolRun]: "Pistol Run",
  [AvatarState.Shooting]: "Shooting",
  [AvatarState.TalkingPhone]: "Talking On A Cell Phone",
  [AvatarState.TalkingPhonePacing]: "Talking Phone Pacing",
};