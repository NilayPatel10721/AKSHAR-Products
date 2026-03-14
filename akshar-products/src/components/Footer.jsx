import {
  Facebook,
  Instagram,
  Twitter,
  Sparkles,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="pt-32 pb-16 relative overflow-hidden bg-[#EAE6DF]"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#1F2326]/10" />
      <div className="blob w-[600px] h-[600px] bg-[#D35400] opacity-[0.03] bottom-[-100px] right-[-100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 text-center md:text-left">
          {/* Brand Identity */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="flex items-center justify-center relative transition-transform duration-700 group-hover:scale-105">
                <img src="/img/logo.png" alt="Akshar Products Logo" className="h-12 object-contain" />
              </div>
              <div className="flex flex-col leading-none hidden sm:flex">
                <span className="font-black text-3xl text-[#1F2326] tracking-tighter uppercase">
                  Akshar
                </span>
              </div>
            </div>
            <p className="text-[#1F2326]/60 leading-relaxed mb-10 text-[13px] font-medium tracking-wide">
              Redefining laundry excellence with pure, advanced formulations designed for the modern household since 2010.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-[#1F2326]/10 text-[#1F2326] hover:bg-[#1F2326] hover:text-[#EAE6DF] transition-all cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Sets */}
          <div>
            <h4 className="font-black text-[#1F2326] mb-8 uppercase tracking-[0.25em] text-[10px]">
              Collections
            </h4>
            <ul className="space-y-4 text-[#1F2326]/60 text-sm font-bold">
              {[
                "Detergent Cakes",
                "Premium Powders",
                "Liquid Hygiène",
                "Industrial Bulk",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#D35400] transition-colors relative inline-block group">
                    {l}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D35400] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#1F2326] mb-8 uppercase tracking-[0.25em] text-[10px]">
              Resources
            </h4>
            <ul className="space-y-4 text-[#1F2326]/60 text-sm font-bold">
              {[
                "Quality Labs",
                "Usage Guide",
                "Sustainability",
                "Distributorship",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#D35400] transition-colors relative inline-block group">
                    {l}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D35400] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-black text-[#1F2326] mb-8 uppercase tracking-[0.25em] text-[10px]">
              Headquarters
            </h4>
            <div className="space-y-4 text-[#1F2326]/60 font-bold text-sm">
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <MapPin
                  size={16}
                  className="text-[#D35400] mt-0.5 flex-shrink-0"
                />
                <span className="leading-relaxed">
                  Phase 3, G.I.D.C Estate,
                  <br />
                  Rajkot, GJ 360001
                </span>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail size={16} className="text-[#D35400] flex-shrink-0" />
                <a
                  href="mailto:contact@akshar.in"
                  className="hover:text-[#D35400] transition-colors"
                >
                  info@aksharproducts.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Integrity Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#1F2326]/10">
          <p className="text-[9px] font-black text-[#1F2326]/40 tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Akshar Products. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-[#1F2326]/40 tracking-[0.3em] uppercase">
            {["Compliance", "Legal", "Privacy"].map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-[#1F2326] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
