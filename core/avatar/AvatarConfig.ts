import { ModelProps } from "@/components/scene/Model";
import { FloatBehavior } from "@/core/animation/behaviors/FloatBehavior";
import { RotateBehavior } from "@/core/animation/behaviors/RotateBehavior";
import { AssetPaths } from "@/core/assets/AssetPaths";
import { AnimationBehavior } from "../animation/AnimationBehavior";

export interface AvatarConfiguration {
  model: ModelProps;
  behaviors: AnimationBehavior[];
}

export const AvatarConfig: AvatarConfiguration = {
  model: {
    path: AssetPaths.models.avatar,
    scale: 1,
    position: [0, -1, 0],
    rotation: [0, Math.PI, 0],
  },

  behaviors: [
    new FloatBehavior(),
    new RotateBehavior(),
  ],
};