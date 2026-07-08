import { mx_heighttonormal } from "three/tsl";
import { Z_NO_COMPRESSION } from "zlib";

export const SCENE_CONFIG = {
   camera: {
      position: [0, 1.5, 3],
      rotation: [0, 0, 0],
      fov: 45,
      zoom: 1.0,
      foco: 1.0

   },

   lighting: {
      position: [5, 10, 5],
      intensity: 1.0,
      color: 0xffffff

   },

   shadows: {
      type: 'basic',
        resolution: 1024,
        intensity: 0.5
   }
}