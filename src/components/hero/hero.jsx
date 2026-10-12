import { useState, useRef } from "react";
import useHeroScene from "./useHeroScene";
import HeroOverlay from "./heroOverlay";
import "./hero.css";
import "./spinner.css";

export default function Hero() {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useHeroScene(mountRef, setLoading);

  return (
    <section className="hero">
      <div ref={mountRef} className="hero-canvas" />

      <HeroOverlay loading={loading} />

      <div className={`hero-loading ${loading ? "hero-loading--visible" : ""}`}>
        <div className="hero-loading__ring" />
        <div className="hero-loading__text">Loading</div>
      </div>
    </section>
  );
}