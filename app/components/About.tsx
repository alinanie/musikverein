import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-[#faf3ea] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: image */}
          <div className="flex-1 relative w-full max-w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/ausrueckung.jpg"
                alt="Musikverein bei einer Ausrückung"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1 max-w-[540px]">
            <h2 className="text-[48px] font-bold text-[#252525] mb-6 font-[family-name:var(--font-palanquin)]">
              Wer wir sind
            </h2>
            <p className="text-[18px] text-[#252525] leading-relaxed mb-10">
              Wir sind ein lebendiger Musikverein mit aktuell 65 aktiven
              MusikerInnen, die eines vereint: die Leidenschaft für symphonische
              Blasmusik und die Freude an der Gemeinschaft. Wir haben es uns zum
              Ziel gesetzt, Menschen durch Musik zu verbinden.
            </p>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-[#252525] mb-2">Tradition</h3>
                <p className="text-[16px] text-[#575756] leading-relaxed">
                  Bewahrung kultureller Werte und musikalischer Wurzeln seit Jahrzehnten.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-[18px] font-bold text-[#252525] mb-2">Gemeinschaft</h3>
                <p className="text-[16px] text-[#575756] leading-relaxed">
                  Zusammenhalt über Generationen hinweg, vom Jungmusiker bis zum Ehrenmitglied.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="flex items-center gap-3">
              <MusicNote />
              <p className="text-[40px] text-[#00628e] font-[family-name:var(--font-birthstone-bounce)] leading-tight">
                Musik ist eine Sprache, die jeder versteht
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MusicNote() {
  return (
    <svg width="38" height="34" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M15 4L38 0V10L15 14V4Z" fill="#00628e" />
      <circle cx="9" cy="32" r="7" fill="#00628e" />
      <circle cx="32" cy="27" r="7" fill="#00628e" />
      <rect x="13" y="4" width="3" height="28" fill="#00628e" />
      <rect x="36" y="0" width="3" height="27" fill="#00628e" />
    </svg>
  );
}
