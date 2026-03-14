import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Layout Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HorizontalGallery from "./components/HorizontalGallery";
import ProductCard from "./components/ProductCard";
import SearchFilters from "./components/SearchFilters";
import Footer from "./components/Footer";

// Data
import productsData from "./data/products.json";

gsap.registerPlugin(ScrollTrigger);

// ── ProductGrid ──
function ProductGrid({ filteredProducts }) {
  const { containerRef } = useScrollReveal({
    selector: ".scroll-item",
    stagger: 0.08,
    duration: 1,
    yOffset: 80,
    ease: "power3.out",
    deps: [filteredProducts], // re-run whenever the product list changes
  });

  return (
    <div
      ref={containerRef}
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
    >
      <AnimatePresence mode="popLayout">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </AnimatePresence>
    </div>
  );
}

// ── Philosophy Section (Museum of Money style) ──
function PhilosophySection() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
       gsap.from(".phil-text", {
         y: 100,
         opacity: 0,
         duration: 1.5,
         stagger: 0.1,
         ease: "power4.out",
         scrollTrigger: {
           trigger: sectionRef.current,
           start: "top 70%",
         }
       });

       gsap.to(".phil-line", {
         scaleX: 1,
         duration: 1.5,
         ease: "expo.inOut",
         scrollTrigger: {
           trigger: sectionRef.current,
           start: "top 60%"
         }
       });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 relative z-10 bg-[#EAE6DF] flex flex-col items-center">
       <div className="w-[1px] h-32 bg-[#D35400] mx-auto mb-16 scale-y-0 origin-top phil-line" style={{ transform: "scaleY(1)" }} />
       
       <div className="container mx-auto px-6 max-w-5xl text-center">
         <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D35400] mb-8 phil-text">Our Philosophy</h3>
         
         <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black leading-[0.9] tracking-tighter text-[#1F2326] mb-12">
            <span className="phil-text inline-block">Crafting</span> <span className="phil-text inline-block font-serif italic text-[#1F2326]/60 font-light">Elegance</span> <br/>
            <span className="phil-text inline-block">Through</span> <span className="phil-text inline-block text-[#D35400]">Purity.</span>
         </h2>
         
         <p className="max-w-xl mx-auto text-[#1F2326]/60 font-medium text-lg leading-relaxed phil-text">
           We believe that fabric care is more than just a routine—it's an art form. Since 2010, Akshar has pushed the boundaries of cleaning science, merging advanced formulation with a deep respect for garment integrity.
         </p>
       </div>
    </section>
  );
}

// ── Film / Video Reveal Section ──
function BrandFilm() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        scale: 1, /* From scale 1.2 in CSS */
        borderRadius: "48px",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 md:py-20 bg-[#EAE6DF] relative overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[80vh]">
       <div className="w-full max-w-[90vw] h-[50vh] md:h-[70vh] relative z-10 shadow-[0_40px_100px_rgba(31,35,38,0.15)] flex items-center justify-center group overflow-hidden" ref={imgRef} style={{ scale: 1.2, transformOrigin: 'center center' }}>
          
          <img src="/img/WhatsApp Image 2026-01-19 at 2.10.09 PM (2).jpeg" alt="Akshar Formulation" className="w-full h-full object-cover filter saturate-[1.2] brightness-[0.85] transition-transform duration-[2s] group-hover:scale-105" />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2326]/80 via-transparent to-transparent mix-blend-multiply" />

          {/* Play Button */}
          <div className="absolute z-20 flex flex-col items-center cursor-pointer">
             <div className="w-24 h-24 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center group-hover:bg-[#D35400] group-hover:border-[#D35400] transition-colors duration-500 hover:scale-110">
                <Play fill="white" size={32} className="text-white ml-2" />
             </div>
             <p className="mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-white">Watch The Process</p>
          </div>
       </div>
    </section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Soap");

  const categories = useMemo(() => {
    return [...new Set(productsData.map((p) => p.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const savedScrollRef = useRef(null);
  const handleCategoryChange = useCallback((cat) => {
    savedScrollRef.current = window.scrollY;
    setActiveCategory(cat);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (savedScrollRef.current !== null) {
          window.scrollTo({ top: savedScrollRef.current, behavior: "instant" });
          savedScrollRef.current = null;
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#EAE6DF] font-outfit text-[#1F2326]">
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />

      {/* ── Menu Overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-[#1F2326]/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 z-[70] shadow-2xl p-10 flex flex-col bg-[#F5F2EB] border-l border-[#1F2326]/5"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-[#1F2326]/40">
                  Directory
                </span>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#1F2326]/10 hover:bg-[#1F2326] hover:text-[#EAE6DF] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-8 text-3xl font-black text-[#1F2326] tracking-tighter">
                {["Collections", "Innovation", "Sustainability", "Journal", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-[#D35400] transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]">{item}</span>
                    <ChevronRight
                      size={24}
                      className="text-[#1F2326]/20 group-hover:text-[#D35400] transition-colors"
                    />
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-10 border-t border-[#1F2326]/10">
                <button className="btn btn-primary w-full justify-center py-4 text-xs tracking-[0.2em]">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Intro */}
      <Hero />

      {/* Horizontal Scroll Awards-Style Component */}
      <HorizontalGallery />

      {/* Philosophy Text Reveal */}
      <PhilosophySection />

      {/* Full-width Film Component */}
      <BrandFilm />

      {/* ── Catalog Section ── */}
      <section id="catalog" className="py-32 relative z-10 bg-[#EAE6DF]">
        <div className="container mx-auto px-6 md:px-12 relative">
          
          {/* Header Title for Catalog */}
          <div className="text-center md:text-left mb-20 md:flex justify-between items-end border-b border-[#1F2326]/10 pb-10">
            <div>
               <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#D35400] mb-4 font-black">
                 Complete Index
               </h3>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1F2326] leading-none">
                 The Full <br/><span className="font-serif font-light italic">Collection.</span>
               </h2>
            </div>
          </div>

          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
            categories={categories}
          />

          <div className="mt-16">
            {filteredProducts.length > 0 ? (
              <ProductGrid filteredProducts={filteredProducts} />
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-40 rounded-[48px] border border-white bg-white/40 shadow-sm"
              >
                <div className="text-6xl mb-6 opacity-20 filter grayscale">🔍</div>
                <h3 className="text-3xl font-black text-[#1F2326] mb-4 tracking-tighter">
                  Nothing Found
                </h3>
                <p className="text-[#1F2326]/60 mb-10 max-w-sm mx-auto font-medium">
                  We couldn't unearth any products matching your specific formulations.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("");
                  }}
                  className="font-black text-[10px] uppercase tracking-[0.2em] text-[#D35400] hover:text-[#1F2326] transition-colors underline underline-offset-8"
                >
                  Reset Library Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="py-40 px-6 relative bg-[#1F2326] text-[#EAE6DF] overflow-hidden flex items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#D35400] opacity-[0.05] blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#EAE6DF] opacity-[0.03] blur-[100px] pointer-events-none mix-blend-screen" />

        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#E67E22] mb-6 font-black">
              Distributor Network
            </h3>
            
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter leading-[0.9] mb-12">
              Join the <br/>
              <span className="font-serif font-light italic text-[#EAE6DF]/60">Ecosystem.</span>
            </h2>
            
            <p className="text-[#EAE6DF]/60 max-w-lg mx-auto mb-16 text-lg font-medium leading-relaxed">
              Unlock exclusive wholesale pricing, premium brand assets, and dedicated formulation support. Over 500+ partners trust the Akshar standard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Business Email Address"
                className="flex-1 w-full px-8 py-5 rounded-full bg-white/5 border border-white/10 text-[#EAE6DF] placeholder:text-[#EAE6DF]/30 focus:outline-none focus:border-[#D35400] transition-all font-medium text-sm text-center sm:text-left"
              />
              <button className="px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] bg-[#D35400] text-[#EAE6DF] hover:bg-transparent hover:text-[#D35400] border border-[#D35400] transition-colors duration-500 w-full sm:w-auto">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
