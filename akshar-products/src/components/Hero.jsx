import { motion } from 'framer-motion'
import { Sparkles, ChevronRight, ShieldCheck, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-bg-warm pt-8 pb-20">

      {/* ── Decorative blobs ── */}
      <div className="blob w-[500px] h-[500px] bg-primary/20 top-[-80px] right-[-100px]" style={{ animationDelay: '0s' }} />
      <div className="blob w-[350px] h-[350px] bg-secondary/25 bottom-[-60px] left-[-80px]" style={{ animationDelay: '3s' }} />
      <div className="blob w-[250px] h-[250px] bg-accent/40 top-[40%] left-[30%]" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── Left: Text ── */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-8 text-primary"
              style={{ background: 'rgba(232,86,58,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(232,86,58,0.2)' }}
            >
              <Sparkles size={14} />
              Established Since 2010
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tight"
            >
              Your fabric's <br />
              <span className="text-primary">favourite</span> <br />
              clean.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg text-slate-500 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              High-performance detergent cakes and powders crafted for superior whiteness and gentle fabric care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary text-base px-10 py-4"
              >
                Explore Products <ChevronRight size={18} />
              </button>
              <button className="btn btn-glass text-base px-8 py-4">
                Our Story
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { value: '25+', label: 'Products' },
                { value: '500+', label: 'Distributors' },
                { value: '15yr', label: 'Experience' },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-slate-900">{s.value}</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Product image in glass frame ── */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Main glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-md"
            >
              <div
                className="rounded-[40px] p-6 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 20px 60px rgba(232,86,58,0.15), 0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                <img
                  src="/img/home_screen.png"
                  alt="Akshar Featured Product"
                  className="w-full h-auto object-contain rounded-[28px] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badge — Quality */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 p-4 rounded-2xl hidden md:flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Quality Certified</div>
                  <div className="text-xs text-slate-400">ISO Standard</div>
                </div>
              </motion.div>

              {/* Floating badge — Rating */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 p-4 rounded-2xl hidden md:flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">4.9 / 5.0</div>
                  <div className="text-xs text-slate-400">Customer Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
