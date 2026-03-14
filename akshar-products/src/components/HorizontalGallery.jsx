import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productsData from "../data/products.json";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const containerRef = useRef(null);
  const wrapRef = useRef(null);
  
  // Get featured products
  const featured = productsData.filter(p => ["Best Seller", "Popular", "Premium"].includes(p.tag)).slice(0, 5);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const scrollWidth = wrapRef.current.scrollWidth - window.innerWidth + (window.innerWidth * 0.1);

      // Pin and scroll horizontally
      gsap.to(wrapRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.5,
          start: "center center",
          end: `+=${scrollWidth}`,
          anticipatePin: 1
        }
      });

      // Scale images subtly as they scroll
      gsap.utils.toArray('.hg-img').forEach((img) => {
        gsap.to(img, {
          x: 100, // Parallax inside the card
          ease: "none",
          scrollTrigger: {
            containerAnimation: gsap.getById("horizontal"),
            trigger: img,
            start: "left right",
            end: "right left",
            scrub: true
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-[#1F2326] text-[#EAE6DF] relative overflow-hidden flex items-center">
      
      {/* Background massive text */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center overflow-hidden">
        <h2 className="text-[35vw] font-black tracking-tighter leading-none whitespace-nowrap ml-[-15%]">
          PREMIUM
        </h2>
      </div>

      <div className="w-full h-full flex flex-col justify-center max-w-[100vw] relative z-10 pt-20">
        
        {/* Header Section */}
        <div className="px-6 md:px-12 lg:px-24 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#E67E22] mb-6 font-black">
              Featured Vault
            </h3>
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.85]">
              The Gold <br/>
              <span className="font-serif font-light italic text-[#D35400]">Standard.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[#EAE6DF]/60 font-medium pb-2 leading-relaxed">
            Explore our most coveted formulations. Purity crafted with uncompromising precision and over a decade of expertise.
          </p>
        </div>

        {/* Horizontal Track */}
        <div ref={wrapRef} className="flex gap-6 md:gap-12 px-6 md:px-12 lg:px-24 pb-20 items-center h-[55vh]">
          {featured.map((item, i) => (
            <div key={item.id} className="w-[85vw] md:w-[45vw] lg:w-[32vw] shrink-0 h-[100%] group relative cursor-pointer">
              
              <div className="w-full h-full bg-[#EAE6DF] rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Background Color Base */}
                <div className="absolute inset-0 bg-[#F5F2EB]" />

                {/* Parallax Image Wrapper */}
                <div className="absolute inset-0 w-[120%] -left-[10%] p-16 flex items-center justify-center">
                   <img src={item.image} className="hg-img w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(44,62,80,0.15)] group-hover:scale-110 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
                </div>
                
                {/* Text Overlay Masked */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                   
                   <div className="overflow-hidden">
                     <h4 className="text-3xl font-black text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-100">
                       {item.name}
                     </h4>
                   </div>
                   
                   <div className="overflow-hidden mt-2">
                     <p className="text-white/80 font-medium uppercase tracking-[0.2em] text-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-200">
                       {item.tag || "Premium Collection"}
                     </p>
                   </div>
                   
                   <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-700 ease-[0.16,1,0.3,1] delay-300">
                     <ArrowUpRight size={28} className="text-white" />
                   </div>

                </div>
              </div>
            </div>
          ))}

          {/* End Card */}
          <div className="w-[85vw] md:w-[25vw] shrink-0 h-full flex flex-col items-center justify-center py-10 pl-2">
             <div className="w-full h-full rounded-[32px] border border-[#EAE6DF]/10 flex flex-col items-center justify-center hover:bg-[#EAE6DF]/5 transition-colors duration-500 cursor-pointer">
               <button className="text-6xl font-black text-transparent [-webkit-text-stroke:2px_#EAE6DF] uppercase tracking-tighter">
                  View <br/> Catalog
               </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
