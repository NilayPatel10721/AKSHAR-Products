import { Facebook, Instagram, Twitter, Sparkles, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-16 relative overflow-hidden bg-bg-cool">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="blob w-[600px] h-[600px] bg-white opacity-40 bottom-[-100px] right-[-100px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 text-center md:text-left">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl text-slate-800 tracking-tighter">AKSHAR</span>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary mt-0.5">Premium</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-10 text-[15px] font-medium">
              Redefining laundry excellence with fresh formulas designed for the modern household since 2010.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-slate-100 text-slate-400 hover:text-primary hover:border-primary/20 transition-all cursor-pointer shadow-sm"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Sets */}
          <div>
            <h4 className="font-black text-slate-800 mb-8 uppercase tracking-[0.25em] text-[11px]">Collections</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              {['Detergent Cakes', 'Premium Powders', 'Liquid Hygiène', 'Industrial Bulk'].map(l => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-800 mb-8 uppercase tracking-[0.25em] text-[11px]">Resources</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              {['Quality Labs', 'Usage Guide', 'Sustainability', 'Distributorship'].map(l => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-black text-slate-800 mb-8 uppercase tracking-[0.25em] text-[11px]">Headquarters</h4>
            <div className="space-y-4 text-slate-500 font-bold text-sm">
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <MapPin size={18} className="text-slate-300 mt-0.5 flex-shrink-0" />
                <span>Phase 3, G.I.D.C Estate,<br />Rajkot, GJ 360001</span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail size={18} className="text-slate-300 flex-shrink-0" />
                <a href="mailto:contact@akshar.in" className="hover:text-primary transition-colors">info@aksharproducts.in</a>
              </div>
            </div>
            <div className="mt-8 px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <p className="font-black text-slate-800 text-sm">Customer Helpline</p>
                <p className="text-primary font-black mt-1">+91 91234 56780</p>
            </div>
          </div>
        </div>

        {/* Legal Integrity Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200/50">
          <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
            © 2026 Akshar Products India — All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
            {['Compliance', 'Legal', 'Privacy'].map(l => (
              <a key={l} href="#" className="hover:text-slate-800 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
