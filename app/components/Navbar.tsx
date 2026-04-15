"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Über uns", href: "#ueber-uns", sectionId: "ueber-uns" },
  { label: "Mitmachen", href: "#mitmachen", sectionId: "mitmachen" },
  { label: "Unterstützen", href: "#unterstuetzen", sectionId: "unterstuetzen" },
  { label: "Aktuelles & Kontakt", href: "#aktuelles", sectionId: "aktuelles" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#fff8f0]/95 backdrop-blur-sm border-b border-[#e8ddd0] transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-[105px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="Musikverein Hellmonsödt" width={50} height={53} className="w-8 h-auto min-[720px]:w-[50px]" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#252525]">Musikverein</p>
            <p className="text-sm text-[#252525]">Hellmonsödt</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[18px] font-medium transition-colors
                  ${isActive ? "text-[#00628e]" : "text-[#575756] hover:text-[#00628e]"}
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#00628e]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#252525] focus-visible:outline-2 focus-visible:outline-[#00628e] focus-visible:outline-offset-2 focus-visible:rounded"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fff8f0] border-t border-[#e8ddd0] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[18px] font-medium transition-colors
                  ${isActive ? "text-[#00628e] font-semibold" : "text-[#575756] hover:text-[#00628e]"}
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
