import { AnimationState } from "./AnimationState";

export const AnimationMap: Record<AnimationState, string> = {
  [AnimationState.Idle]: "idle",
  [AnimationState.Breathing]: "Breathing Idle",
  [AnimationState.Walking]: "walking",
  [AnimationState.PistolAim]: "Pistol Aim",
  [AnimationState.PistolRun]: "Pistol Run",
  [AnimationState.Shooting]: "Shooting",
  [AnimationState.TalkingPhone]: "Talking On A Cell Phone",
  [AnimationState.TalkingPhonePacing]: "Talking Phone Pacing",
};