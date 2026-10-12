import { useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { createRingGroup } from "./ring";
import { loadCenteredModel } from "./modelLoader";

export default function useHeroScene(mountRef, setLoading) {
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let mounted = true;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.9, 7.2);

    // const ambient = new THREE.AmbientLight(0xF5BF18, 0.2);
    // scene.add(ambient);

    const statueLight = new THREE.PointLight(0xFBFAF2, .2, 5, 2);
    statueLight.position.set(0, .5, 7);
    scene.add(statueLight);

    

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      1.5,
      0.1,
      0.0
    );
    composer.addPass(bloomPass);

    const ring = createRingGroup();
    scene.add(ring.group);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    loadCenteredModel("/models/aspasia8K.glb")
      .then((model) => {
        if (!mounted) return;
        modelGroup.add(model);
        camera.lookAt(0, 0.15, 0);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading GLB:", error);
        if (mounted) setLoading(false);
      });

    const animate = () => {
      if (!mounted) return;
      requestAnimationFrame(animate);
      composer.render();
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
      bloomPass.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mounted = false;
      window.removeEventListener("resize", handleResize);
      ring.dispose();
      renderer.dispose();
      composer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
    
  }, [mountRef, setLoading]);
}