import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card group flex flex-col h-full p-2"
    >
      {/* Visual Area */}
      <div className="aspect-[4/5] rounded-[24px] bg-slate-50 relative overflow-hidden flex items-center justify-center p-10 transition-colors duration-500 group-hover:bg-white">
        
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {product.tag && (
          <div className="absolute top-5 left-5 z-10">
            <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-white border border-slate-100 text-slate-400 shadow-sm">
              {product.tag}
            </span>
          </div>
        )}
        
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain relative z-10"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(14,165,233,0.12))' }}
        />

        <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-6 pt-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
              {product.category}
            </span>
            <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-100">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-black text-amber-700">{product.rating}</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-8 leading-relaxed font-medium">
          {product.description}
        </p>

        {/* Pricing & CTA */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
          <span className="text-2xl font-black text-slate-800">{product.price}</span>
          <button className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-primary transition-colors">
            Inquire Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}
