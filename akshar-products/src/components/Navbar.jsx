import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${
        scrolled
          ? "bg-[#EAE6DF]/80 backdrop-blur-2xl border-b border-[#1F2326]/5 py-4"
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center relative transition-transform duration-700 group-hover:scale-105">
            <img src="/img/logo.png" alt="Akshar Products Logo" className="h-10 md:h-12 object-contain" />
          </div>
          <span className="font-black text-xl md:text-2xl tracking-tighter text-[#1F2326] uppercase hidden sm:block">
            Akshar
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {["Collections", "Innovation", "Sustainability", "Journal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1F2326]/60 hover:text-[#D35400] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D35400] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1F2326]/60 hover:text-[#1F2326] transition-colors">
            Login
          </button>
          <button className="px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] bg-[#1F2326] text-[#EAE6DF] hover:bg-transparent hover:text-[#1F2326] border border-[#1F2326] transition-colors duration-500">
            Get Pricing
          </button>
        </div>

        {/* Hamburger Mobile */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full border border-[#1F2326]/20 text-[#1F2326] hover:bg-[#1F2326] hover:text-[#EAE6DF] transition-colors"
          onClick={onMenuOpen}
        >
          <Menu size={18} />
        </button>
      </div>
    </nav>
  );
}
