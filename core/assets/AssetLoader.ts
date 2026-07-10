import { Object3D } from 'three';
import { GLTFAssetLoader } from './loaders/GLTFAssetLoader';

export class AssetLoader {

    private readonly gltfLoader =
        new GLTFAssetLoader();

    async load(
        path: string
    ): Promise<Object3D> {

        return this.gltfLoader.load(path);

    }

}