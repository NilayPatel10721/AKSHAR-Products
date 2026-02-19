import { motion } from 'framer-motion'
import { Sparkles, ChevronRight, ShieldCheck, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-cool pt-24 pb-32">

      {/* ── Background Elements ── */}
      <div className="blob w-[700px] h-[700px] bg-secondary/10 top-[-10%] right-[-10%]" />
      <div className="blob w-[500px] h-[500px] bg-accent/20 bottom-[-5%] left-[-5%]" />
      <div className="absolute inset-0 radial-glow opacity-60" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ── Text Content ── */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.25em] text-secondary mb-10 bg-white/60 backdrop-blur-md border border-white"
            >
              <Sparkles size={14} className="text-secondary" />
              Premium Fabric Care Since 2010
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-[100px] font-black text-slate-800 leading-[0.9] mb-10 tracking-tighter"
            >
              Purely <br />
              <span className="text-primary">Brilliant.</span> <br />
              Extra Fresh.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 mb-14 leading-relaxed font-medium"
            >
              High-performance laundry solutions meticulously engineered for superior whiteness and gentle hygiene.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary px-12 py-5 text-lg"
              >
                Shop Collection
              </button>
              <button className="flex items-center gap-3 font-black text-slate-400 hover:text-slate-600 transition-colors text-lg group">
                Quality Labs <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* ── Product Visual with Glow ── */}
          <div className="w-full lg:w-2/5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              {/* Radial Light Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] radial-glow animate-pulse pointer-events-none z-0" style={{ animationDuration: '4s' }} />

              {/* Product Showcase */}
              <div className="relative z-10 p-4">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative drop-shadow-[0_40px_80px_rgba(14,165,233,0.15)]"
                >
                  <img
                    src="/img/home_screen.png"
                    alt="Akshar Featured Product"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </motion.div>
                
                {/* Minimal Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-[10%] -right-12 p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl hidden md:flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="font-black text-slate-800 text-sm tracking-tight">ISO-Certified Labs</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Standards</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute bottom-[20%] -left-12 p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl hidden md:flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
                    <Heart size={22} fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-black text-slate-800 text-sm tracking-tight">Kind to Fabric</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gentle Formula</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
