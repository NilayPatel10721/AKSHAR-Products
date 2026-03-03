import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

// ── Magnetic-tilt card effect using Framer Motion springs ───────────────────
function useTilt() {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 300, damping: 30, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(rawY, [-0.5, 0.5], [8, -8]),
    springCfg,
  );
  const rotateY = useSpring(
    useTransform(rawX, [-0.5, 0.5], [-8, 8]),
    springCfg,
  );
  const glowX = useSpring(useTransform(rawX, [-0.5, 0.5], [0, 100]), springCfg);
  const glowY = useSpring(useTransform(rawY, [-0.5, 0.5], [0, 100]), springCfg);

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave };
}

// ── Card entrance variant (used by GSAP hook too; framer handles the hover) ──
const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function ProductCard({ product }) {
  const { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave } =
    useTilt();

  return (
    /* scroll-item class is picked up by the GSAP ScrollTrigger hook */
    <motion.div
      className="scroll-item"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        className="glass-card group flex flex-col h-full p-2 cursor-pointer"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ z: 20 }}
        transition={{ duration: 0.4 }}
      >
        {/* ── Spotlight glow tracks the cursor ── */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(14,165,233,0.18) 0%, transparent 65%)`,
            ),
          }}
        />

        {/* ── Visual Area ── */}
        <div className="aspect-[4/5] rounded-[24px] bg-slate-50 relative overflow-hidden flex items-center justify-center p-10 transition-colors duration-500 group-hover:bg-white">
          {/* Subtle radial glow behind the product */}
          <div className="absolute inset-0 radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Shimmer sweep */}
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <div className="shimmer-sweep" />
          </div>

          {product.tag && (
            <div className="absolute top-5 left-5 z-10">
              <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-white border border-slate-100 text-slate-400 shadow-sm">
                {product.tag}
              </span>
            </div>
          )}

          <motion.img
            whileHover={{ scale: 1.12, y: -6 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain relative z-10"
            style={{ filter: "drop-shadow(0 20px 40px rgba(14,165,233,0.18))" }}
          />

          <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <motion.div
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white"
              whileHover={{ scale: 1.15, backgroundColor: "#e8563a" }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>
        </div>

        {/* ── Details Area ── */}
        <div className="p-6 pt-8 flex flex-col flex-1 relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                {product.category}
              </span>
              <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-100">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-black text-amber-700">
                {product.rating}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-500 line-clamp-2 mb-8 leading-relaxed font-medium">
            {product.description}
          </p>

          {/* CTA */}
          <div className="mt-auto pt-6 border-t border-slate-100">
            <motion.button
              className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Inquire Details
              <motion.span
                initial={{ opacity: 0, x: -4 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
