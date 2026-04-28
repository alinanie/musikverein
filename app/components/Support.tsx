import Image from "next/image";
import AnimateIn from "./AnimateIn";
import ObfuscatedMailLink from "./ObfuscatedMailLink";

export default function Support() {
  return (
    <section id="unterstuetzen" className="bg-[#fff8f0] pt-16 min-[720px]:pt-24">
      <div className="max-w-7xl mx-auto px-6 pb-16 min-[720px]:pb-24">

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
              <p className="text-[16px] text-[#575756] leading-relaxed mb-5">
                Ob beim Kuchenstand am Herbstfest oder als Marketenderin bei der Marschwertung – helfende Hände sind bei uns immer willkommen, ganz ohne Notenkenntnisse. Tritt unserer WhatsApp-Helfer-Gruppe bei, und erfahre, wann und wo wir Mithilfe gebrauchen können.
              </p>
              {/* QR Code */}
              <div className="flex flex-col items-center gap-3 mb-5 flex-1">
                <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-[#e8ddd0]">
                  <Image
                    src="/images/qr-code-helfer.png"
                    alt="QR-Code WhatsApp Helfer-Gruppe"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-[13px] text-[#575756] text-center leading-snug">
                  QR-Code mit der Smartphone-Kamera scannen, den WhatsApp-Link öffnen und „Gruppe beitreten" auswählen.
                </p>
              </div>
              {/* WhatsApp CTA */}
              <a
                href="https://chat.whatsapp.com/C2qkY37aTgTK8wimnuF3im?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-[15px] px-5 py-2.5 rounded-full hover:bg-[#1ebe5d] transition-colors"
              >
                <WhatsAppIcon />
                WhatsApp Gruppe öffnen
              </a>
            </div>
          </AnimateIn>

        </div>

      </div>

      {/* Full-width contact CTA */}
      <AnimateIn delay={100}>
        <div className="bg-[#00628e] py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
            <div>
              <p className="text-[28px] min-[720px]:text-[36px] font-bold text-white font-[family-name:var(--font-palanquin)] leading-tight">
                Klingt interessant?
              </p>
              <p className="text-[17px] text-white/80 mt-2">
                Wir freuen uns auf deine Nachricht!
              </p>
            </div>
            <ObfuscatedMailLink color="white" className="text-[15px] sm:text-[17px] bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full" />
          </div>
        </div>
      </AnimateIn>
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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


