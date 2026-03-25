import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[105px] bg-[#fff8f0] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left: text */}
          <div className="flex-1 max-w-[542px]">
            {/* Headline */}
            <div className="mb-6">
              <h1 className="text-[96px] font-bold leading-tight text-[#252525] font-[family-name:var(--font-palanquin)]">
                Musikverein
              </h1>
              <h1 className="text-[96px] font-normal leading-tight text-[#cb6615] font-[family-name:var(--font-palanquin)]">
                Hellmonsödt
              </h1>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <MusicNote />
              <p className="text-[50px] leading-tight text-[#00628e] font-[family-name:var(--font-birthstone-bounce)]">
                Seit Generationen durch Musik verbunden
              </p>
            </div>

            {/* Description */}
            <p className="text-[18px] text-[#252525] leading-relaxed mb-8">
              Der Musikverein Hellmonsödt zählt derzeit 65 engagierte Mitglieder,
              die mit Leidenschaft und Hingabe die kulturelle Vielfalt unserer
              Gemeinde bereichern.
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

          {/* Right: image */}
          <div className="flex-1 relative w-full max-w-[680px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/2]">
              <Image
                src="/images/gruppenbild.jpg"
                alt="Gruppenphoto Musikverein Hellmonsödt"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Logo badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <Image src="/images/logo.svg" alt="Logo" width={80} height={90} />
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
