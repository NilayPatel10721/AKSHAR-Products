import { Facebook, Instagram, Twitter, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10 relative overflow-hidden">
      {/* Glass surface */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'rgba(255,255,255,0.35)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.6)',
        }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Sparkles size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-xl text-slate-900 tracking-tight">AKSHAR</span>
                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-primary -mt-0.5">Products</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              Crafting premium cleaning solutions that redefine purity for households across India since 2010.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                  }}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Catalog</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              {['Detergent Powders', 'Premium Cakes', 'Cleaning Kits', 'Wholesale Packs'].map(l => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              {['Usage Guide', 'Safety Data', 'Quality Assurance', 'Distributorship'].map(l => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Headquarters</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
              Phase 3, G.I.D.C Industrial Estate,<br />
              Rajkot, Gujarat — 360001<br />
              India
            </p>
            <div
              className="p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.8)',
              }}
            >
              <p className="font-black text-slate-900 text-sm">+91 91234 56780</p>
              <p className="text-xs text-slate-400 mt-0.5">info@aksharproducts.in</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase"
          style={{ borderTop: '1px solid rgba(255,255,255,0.5)' }}
        >
          <p>© 2026 Akshar Products Pvt Ltd</p>
          <div className="flex gap-8">
            {['Compliance', 'Legal Terms', 'Supply Chain'].map(l => (
              <a key={l} href="#" className="hover:text-slate-600 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
