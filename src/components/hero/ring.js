import * as THREE from "three";

export function createRingGroup() {
  const ringGroup = new THREE.Group();
  ringGroup.position.set(0, 1.6, -1.1);

  const coreGeometry = new THREE.TorusGeometry(2.32, 0.045, 32, 220);
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xB81104 });
  const coreRing = new THREE.Mesh(coreGeometry, coreMaterial);

  const auraGeometry = new THREE.TorusGeometry(2.45, 0.22, 32, 220);
  const auraMaterial = new THREE.MeshBasicMaterial({
    color: 0xF5BF18,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });
  const auraRing = new THREE.Mesh(auraGeometry, auraMaterial);

  ringGroup.add(coreRing);
  ringGroup.add(auraRing);

  return {
    group: ringGroup,
    dispose() {
      coreGeometry.dispose();
      coreMaterial.dispose();
      auraGeometry.dispose();
      auraMaterial.dispose();
    },
  };
}