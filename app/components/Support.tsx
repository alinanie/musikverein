import AnimateIn from "./AnimateIn";
import ObfuscatedMailLink from "./ObfuscatedMailLink";

export default function Support() {
  return (
    <section id="unterstuetzen" className="bg-[#fff8f0] py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline */}
        <AnimateIn>
          <div className="mb-14">
            <h2 className="text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
              Musik braucht Unterstützung
            </h2>
            <p className="text-[18px] text-[#575756] mt-2 max-w-2xl">
              Ob als förderndes Mitglied, Sponsor, durch eine Spende oder tatkräftige Mithilfe – jede Form der Unterstützung hilft uns, die Musik in Hellmonsödt lebendig zu halten.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Fördernde Mitgliedschaft */}
          <AnimateIn delay={0}>
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#00628e] flex items-center justify-center mb-5">
                <HeartIcon />
              </div>
              <h3 className="text-[22px] font-bold text-[#252525] mb-3 font-[family-name:var(--font-palanquin)]">
                Fördernde Mitgliedschaft
              </h3>
              <p className="text-[16px] text-[#575756] leading-relaxed flex-1">
                Du musst kein Instrument spielen, um ein Teil von uns zu sein. Als förderndes Mitglied trägst du dazu bei, dass unser Verein weiterhin für die Gemeinde musizieren kann.
              </p>
            </div>
          </AnimateIn>

          {/* Sponsoring */}
          <AnimateIn delay={120}>
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#cb6615] flex items-center justify-center mb-5">
                <StarIcon />
              </div>
              <h3 className="text-[22px] font-bold text-[#252525] mb-3 font-[family-name:var(--font-palanquin)]">
                Sponsoring & Werbepartner
              </h3>
              <p className="text-[16px] text-[#575756] leading-relaxed flex-1">
                Werde Werbepartner des Musikvereins Hellmonsödt! Ob Inserat im Programmheft, Logo auf unserem Plakat oder Präsenz auf unserer Website – wir finden gemeinsam die passende Form der Zusammenarbeit.
              </p>
            </div>
          </AnimateIn>

          {/* Spenden */}
          <AnimateIn delay={240}>
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#00628e] flex items-center justify-center mb-5">
                <GiftIcon />
              </div>
              <h3 className="text-[22px] font-bold text-[#252525] mb-3 font-[family-name:var(--font-palanquin)]">
                Spenden
              </h3>
              <p className="text-[16px] text-[#575756] leading-relaxed flex-1">
                Mit einer Spende unterstützt du direkt unsere Arbeit – von der Anschaffung neuer Noten bis zur Ausrüstung unserer Jugend. Jeder Beitrag zählt und kommt direkt der Musik zugute.
              </p>
            </div>
          </AnimateIn>

          {/* Mithelfen */}
          <AnimateIn delay={360}>
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#cb6615] flex items-center justify-center mb-5">
                <HandsIcon />
              </div>
              <h3 className="text-[22px] font-bold text-[#252525] mb-3 font-[family-name:var(--font-palanquin)]">
                Mithelfen
              </h3>
              <p className="text-[16px] text-[#575756] leading-relaxed flex-1">
                Ob beim Kuchenstand am Herbstfest oder als Marketenderin bei der Marschwertung – helfende Hände sind bei uns immer willkommen, ganz ohne Notenkenntnisse. Schau einfach vorbei oder melde dich bei uns!
              </p>
            </div>
          </AnimateIn>

        </div>

        {/* Unified contact CTA */}
        <AnimateIn delay={100}>
          <div className="mt-12 bg-white rounded-2xl px-8 py-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[15px] sm:text-[17px] text-[#252525] font-medium">
              Klingt interessant?{" "}
              <span className="text-[#575756] font-normal">Wir freuen uns auf deine Nachricht!</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <ObfuscatedMailLink color="#00628e" className="text-[13px] sm:text-[15px]" />
              <span className="hidden sm:block text-[#e8ddd0]">|</span>
              <a
                href="https://www.facebook.com/MusikvereinHellmonsodt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#cb6615] font-semibold text-[15px] hover:underline"
              >
                <FacebookIcon />
                Auf Facebook schreiben
              </a>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function HandsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}


function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#cb6615">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
