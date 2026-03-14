import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);
  const bgRef = useRef(null);

  // Images grouped at the bottom to match the screenshot
  const floatingImages = [
    { src: "/img/home_screen.png", alt: "Dishwash", bottom: "45%", left: "5%", size: "w-32 h-32 md:w-48 md:h-48", delay: 0, rotate: -6 },
    { src: "/img/WhatsApp Image 2026-01-19 at 2.10.11 PM (2).jpeg", alt: "Liquid Cleaner", bottom: "35%", right: "5%", size: "w-40 h-40 md:w-56 md:h-56", delay: 0.2, rotate: 4 },
    { src: "/img/WhatsApp Image 2026-01-19 at 2.09.59 PM (1).jpeg", alt: "Detergent Pack", bottom: "5%", left: "15%", size: "w-48 h-32 md:w-64 md:h-44", delay: 0.4, rotate: -2 },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Mobile-Optimized Entrance Animation
      const tl = gsap.timeline();
      
      // Top text reveal
      tl.from(".hero-text-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });
      
      // Buttons reveal
      tl.from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6");

      // Floating images pop in from bottom
      tl.from(".floating-img-wrapper", {
        y: 150,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.2)"
      }, "-=0.8");

      // 2. Strong Parallax Scrolling Effect for Background Products
      gsap.to(bgRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top",
          end: "bottom top",
          scrub: true
        }
      });

      // Dramatically scroll the products upwards
      gsap.utils.toArray('.floating-img-wrapper').forEach((img, i) => {
        gsap.to(img, {
          y: -150 - (i * 80), // Strong differential parallax
          rotation: (i % 2 === 0 ? 12 : -12),
          scale: 1.05 + (i * 0.05),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] overflow-hidden flex flex-col pt-32 pb-4 bg-[#F2F6F3]"
    >
      {/* Background Aesthetics */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-[#0A4226] opacity-[0.03] blur-[80px] rounded-full animate-[blob_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[70vw] h-[70vw] bg-[#0A4226] opacity-[0.04] blur-[100px] rounded-full animate-[blob_15s_ease-in-out_infinite]" />
      </div>

      {/* ── Main Content Container ── */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center flex-1 w-full max-w-4xl">
        
        {/* Top Text Content */}
        <div ref={textRef} className="flex flex-col items-center text-center w-full mt-2 pointer-events-auto z-20">
          
          <h1 className="text-[3.5rem] leading-[0.9] sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] tracking-tighter text-[#166A40] mb-6 w-full font-serif italic">
            <div className="overflow-hidden py-2 inline-block">
              <span className="block hero-text-reveal">
                Akshar Products <span className="text-[#D32F2F] not-italic text-[5rem] md:text-[7rem] leading-[0]">.</span>
              </span>
            </div>
          </h1>

          <div className="overflow-hidden mb-10 w-full max-w-lg mx-auto">
            <p className="hero-text-reveal text-[15px] sm:text-base text-[#166A40]/80 font-semibold leading-relaxed">
              Experience unparalleled hygiene with our scientifically formulated detergent, phenyl, and dishwash liquids. Crafted for safety, effectiveness, and a sparkling home.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 w-full px-2 max-w-sm">
            <button className="hero-btn w-full py-5 rounded-full font-black text-[12px] uppercase tracking-widest bg-[#0F3B24] text-white hover:bg-[#166A40] active:scale-95 transition-all duration-300 shadow-xl shadow-[#0F3B24]/20 flex justify-center items-center gap-2">
              Explore Products
              <ArrowUpRight size={16} className="text-white shrink-0" />
            </button>
            <button className="hero-btn w-full py-5 rounded-full font-black text-[12px] uppercase tracking-widest bg-transparent border border-[#0F3B24]/10 text-[#0F3B24] hover:bg-white/50 active:scale-95 transition-all duration-300 backdrop-blur-sm shadow-sm">
              Become Distributor
            </button>
          </div>
        </div>

      </div>

      {/* ── Floating Product Showcase - Anchored to Bottom Area ── */}
      <div ref={imagesRef} className="absolute bottom-16 inset-x-0 h-[400px] pointer-events-none z-10">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          
          {/* Base Glow */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] bg-white opacity-40 blur-[60px] rounded-full pointer-events-none" />

          {floatingImages.map((img, i) => (
            <div 
              key={i} 
              className={`floating-img-wrapper absolute z-${30 - i * 10}`}
              style={{ bottom: img.bottom, left: img.left, right: img.right }}
            >
              {/* Static Rotation Layer */}
              <div style={{ transform: `rotate(${img.rotate}deg)` }}>
                {/* CSS Float Animation Layer */}
                <div 
                  className={`bg-white/50 p-2 md:p-3 backdrop-blur-xl border border-white/60 rounded-[24px] md:rounded-[32px] shadow-[0_20px_40px_rgba(10,66,38,0.12)] overflow-hidden ${img.size} flex items-center justify-center`}
                  style={{ 
                    animation: `float-${i % 2 === 0 ? 'slow' : 'fast'} ${6 + i}s ease-in-out infinite`,
                    animationDelay: `${img.delay}s` 
                  }}
                >
                  {/* Content Layer */}
                  <div className="w-full h-full relative rounded-[16px] md:rounded-[24px] overflow-hidden bg-white flex items-center justify-center">
                     <img 
                       src={img.src} 
                       alt={img.alt} 
                       className="w-full h-full object-contain mix-blend-multiply scale-[1.05]" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/70 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      {/* Aesthetic Scroll Indicator */}
      <div className="absolute bottom-6 right-6 lg:right-12 text-[10px] font-black tracking-[0.4em] text-[#0A4226]/50 flex items-center gap-4 z-20">
        <span>S C R O L L</span>
        <div className="w-12 h-[1px] bg-[#0A4226]/30" />
      </div>

    </section>
  );
}
