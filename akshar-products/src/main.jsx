import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Lenis Smooth Scroll ──────────────────────────────────────────────────────
// Buttery-smooth momentum scrolling. Lenis adds the `lenis` class to <html>
// automatically so our CSS overrides kick in.
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 2,
});

// Keep GSAP ScrollTrigger in sync with Lenis virtual scroll position
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Expose globally so components can call window.__lenis.scrollTo('#section')
window.__lenis = lenis;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
