import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#fff8f0] border-t border-[#e8ddd0] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="Musikverein Hellmonsödt" width={42} height={46} />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-[#252525]">Musikverein</p>
              <p className="text-sm text-[#252525]">Hellmonsödt</p>
            </div>
          </div>

          {/* Address */}
          <address className="not-italic text-[14px] text-[#575756] leading-relaxed text-center md:text-left">
            <p className="font-semibold text-[#252525]">Musikverein Hellmonsödt</p>
            <p>Marktplatz 1</p>
            <p>4202 Hellmonsödt</p>
          </address>

          {/* Footer links */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-[14px] text-[#575756] hover:text-[#00628e] transition-colors">
              Impressum
            </a>
            <a href="#" className="text-[14px] text-[#575756] hover:text-[#00628e] transition-colors">
              Datenschutz
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-[#e8ddd0] text-center">
          <p className="text-[10px] text-[#575756] font-[family-name:var(--font-lexend)]">
            © 2026 Musikverein Hellmonsödt. Harmonie in Tradition und Gemeinschaft.
          </p>
        </div>
      </div>
    </footer>
  );
}
