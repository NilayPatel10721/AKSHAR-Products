import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card group flex flex-col h-full p-6"
    >
      {/* Tag */}
      {product.tag && (
        <div
          className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-primary"
          style={{ background: 'rgba(232,86,58,0.12)', border: '1px solid rgba(232,86,58,0.25)' }}
        >
          {product.tag}
        </div>
      )}

      {/* Image area */}
      <div
        className="aspect-square rounded-[20px] mb-6 flex items-center justify-center p-6 overflow-hidden relative"
        style={{ background: 'rgba(255,255,255,0.6)' }}
      >
        <motion.img
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.5, type: 'spring' }}
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Meta */}
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
          {product.category}
        </span>
        <div
          className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-amber-600"
          style={{ background: 'rgba(245,166,35,0.12)' }}
        >
          <Star size={11} fill="currentColor" />
          <span className="text-xs font-black">{product.rating}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
        {product.name}
      </h3>

      <p className="text-sm text-slate-400 line-clamp-2 mb-6 leading-relaxed flex-1">
        {product.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/60">
        <span className="text-xl font-black text-slate-900">{product.price}</span>
        <button
          className="px-5 py-2 rounded-xl text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #e8563a, #f5a623)',
            boxShadow: '0 4px 14px rgba(232,86,58,0.35)',
          }}
        >
          View Details
        </button>
      </div>
    </motion.div>
  )
}
