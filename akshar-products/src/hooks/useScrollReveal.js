import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal
 * Attaches a GSAP ScrollTrigger stagger animation to `containerRef`'s children
 * matching `selector`.
 *
 * @param {object} opts
 * @param {string}  opts.selector     - CSS selector for items inside the container
 * @param {number}  opts.stagger      - stagger delay between items (default 0.07)
 * @param {number}  opts.duration     - per-item tween duration (default 0.9)
 * @param {number}  opts.yOffset      - initial Y translate in px (default 60)
 * @param {string}  opts.ease         - GSAP ease string (default 'power3.out')
 * @param {any[]}   opts.deps         - extra deps that trigger re-run (e.g., filtered list)
 * @returns {{ containerRef }}
 */
export function useScrollReveal({
  selector = ".scroll-item",
  stagger = 0.07,
  duration = 0.9,
  yOffset = 60,
  ease = "power3.out",
  deps = [],
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector, containerRef.current);
      if (!items.length) return;

      // Kill any existing ScrollTriggers for these items before re-creating
      ScrollTrigger.getAll()
        .filter((st) => items.includes(st.trigger))
        .forEach((st) => st.kill());

      // Set initial hidden state
      gsap.set(items, { opacity: 0, y: yOffset, scale: 0.95 });

      // Batch them so many cards entering together don't fire individually
      ScrollTrigger.batch(items, {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger,
            duration,
            ease,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: yOffset,
            scale: 0.95,
            stagger: stagger / 2,
            duration: duration * 0.6,
            ease: "power2.in",
            overwrite: true,
          }),
        start: "top 90%",
        end: "top 20%",
      });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, stagger, duration, yOffset, ease, ...deps]);

  return { containerRef };
}
