"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const offset = window.scrollY * 0.2;
      imageRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Count-up animation for 65
  useEffect(() => {
    const duration = 1500;
    const target = 65;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const timeout = setTimeout(() => requestAnimationFrame(tick), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="pt-[105px] bg-[#fff8f0] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left: text */}
          <div className="flex-1 max-w-[542px]">
            {/* Headline */}
            <div className="mb-6">
              <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.05] text-[#252525] font-[family-name:var(--font-palanquin)]">
                Musikverein
              </h1>
              <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-normal leading-[1.05] text-[#cb6615] font-[family-name:var(--font-palanquin)]">
                Hellmonsödt
              </h1>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="animate-wiggle">
                <MusicNote />
              </span>
              <p className="text-[28px] min-[720px]:text-[50px] leading-tight text-[#00628e] font-[family-name:var(--font-birthstone-bounce)]">
                Seit Generationen durch Musik verbunden
              </p>
            </div>

            {/* Description with animated count */}
            <p className="text-[18px] text-[#252525] leading-relaxed mb-8">
              Der Musikverein Hellmonsödt zählt derzeit{" "}
              <span className="font-bold text-[#cb6615]">{count}</span>{" "}
              engagierte Mitglieder, die mit Leidenschaft und Hingabe die
              kulturelle Vielfalt unserer Gemeinde bereichern.
            </p>

            {/* CTA */}
            <a
              href="#aktuelles"
              className="inline-flex items-center gap-2 bg-[#cb6615] text-white font-semibold text-[18px] px-8 py-4 rounded-full hover:bg-[#b55a12] transition-colors"
            >
              Komm in Kontakt
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>

          {/* Right: image with parallax */}
          <div className="flex-1 relative w-full max-w-[680px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] min-[720px]:aspect-[3/2]">
              <div ref={imageRef} className="absolute inset-0 scale-110">
                <Image
                  src="/images/gruppenbild1.jpg"
                  alt="Gruppenphoto Musikverein Hellmonsödt"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute bottom-2 right-2 text-[11px] text-white/75 bg-black/35 px-1.5 py-0.5 rounded pointer-events-none select-none z-10">
                © Wilhelm Wolfmayr
              </span>
            </div>
            {/* Logo badge */}
            <div className="absolute -bottom-4 -left-4 min-[720px]:-bottom-6 min-[720px]:-left-6 bg-white rounded-xl min-[720px]:rounded-2xl p-3 min-[720px]:p-4 shadow-xl">
              <Image src="/images/logo.svg" alt="Logo" width={48} height={54} className="min-[720px]:w-[80px] min-[720px]:h-[90px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MusicNote() {
  return (
    <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M15 4L38 0V10L15 14V4Z" fill="#00628e" />
      <circle cx="9" cy="32" r="7" fill="#00628e" />
      <circle cx="32" cy="27" r="7" fill="#00628e" />
      <rect x="13" y="4" width="3" height="28" fill="#00628e" />
      <rect x="36" y="0" width="3" height="27" fill="#00628e" />
    </svg>
  );
}
