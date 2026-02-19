import { motion } from 'framer-motion'
import { Sparkles, Menu, ArrowRight } from 'lucide-react'

export default function Navbar({ onMenuOpen }) {
  return (
    <nav className="glass-nav px-6 md:px-12 py-5 lg:py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo — Natural Pop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-500">
            <Sparkles size={20} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl text-slate-800 tracking-tighter">AKSHAR</span>
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mt-0.5">Premium</span>
          </div>
        </motion.div>

        {/* Global Navigation Links */}
        <div className="hidden lg:flex items-center gap-12 font-black text-[11px] uppercase tracking-[0.25em] text-slate-400">
          {['Home', 'Catalog', 'Story', 'Labs'].map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="hover:text-slate-800 transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-5">
          <button className="hidden sm:flex btn btn-primary text-xs px-8 py-3.5 group">
            Partner with Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            className="lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-slate-100 hover:bg-slate-50 transition-colors shadow-sm"
            onClick={onMenuOpen}
          >
            <Menu size={22} className="text-slate-700" />
          </button>
        </div>
      </div>
    </nav>
  )
}
