import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export function loadCenteredModel(path) {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(
      path,
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;

            if (child.material) {
              child.material = child.material.clone();
              child.material.metalness = 0;
              child.material.roughness = 1;
              child.material.color = new THREE.Color(0x050505);
              child.material.emissive = new THREE.Color(0x000000);
              child.material.toneMapped = false;
            }
          }
        });

        model.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.75 / maxDim;
        model.scale.setScalar(scale);

        model.position.y -= 0.95;

        resolve(model);
      },
      undefined,
      reject
    );
  });
}