import { AssetPaths } from "core/assets/AssetPaths";
import { ModelProps } from "@/components/scene/Model";

export const AvatarConfig: ModelProps = {
  path: AssetPaths.models.avatar,

  scale: 0.01,

  position: [0, -1, 0],

  rotation: [0, Math.PI, 0],
};