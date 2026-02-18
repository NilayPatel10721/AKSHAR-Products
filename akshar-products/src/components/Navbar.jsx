import { motion } from 'framer-motion'
import { Sparkles, Menu } from 'lucide-react'

export default function Navbar({ onMenuOpen }) {
  return (
    <nav className="glass-nav">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Sparkles size={18} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl text-slate-900 tracking-tight">AKSHAR</span>
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-primary -mt-0.5">Products</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm">
          {['Home', 'Catalog', 'Quality', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex btn btn-primary text-sm px-6 py-2.5">
            Bulk Inquiries
          </button>
          <button
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.8)' }}
            onClick={onMenuOpen}
          >
            <Menu size={20} className="text-slate-700" />
          </button>
        </div>
      </div>
    </nav>
  )
}
