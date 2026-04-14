import type { Metadata } from "next";
import { Palanquin, Birthstone_Bounce, Lexend } from "next/font/google";
import "./globals.css";

const palanquin = Palanquin({
  variable: "--font-palanquin",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const birthstoneBounce = Birthstone_Bounce({
  variable: "--font-birthstone-bounce",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musikverein-hellmonsoedt.vercel.app"),
  title: {
    default: "Musikverein Hellmonsödt",
    template: "%s | Musikverein Hellmonsödt",
  },
  description:
    "Der Musikverein Hellmonsödt – 61 aktive MusikerInnen aus dem Mühlviertel. Konzerte, Ausrückungen & Jugendmusik in Hellmonsödt, Oberösterreich.",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://musikverein-hellmonsoedt.vercel.app",
    siteName: "Musikverein Hellmonsödt",
    title: "Musikverein Hellmonsödt",
    description:
      "Der Musikverein Hellmonsödt – 61 aktive MusikerInnen aus dem Mühlviertel. Konzerte, Ausrückungen & Jugendmusik in Hellmonsödt, Oberösterreich.",
    images: [{ url: "/images/gruppenbild1.jpg", width: 1200, height: 630, alt: "Musikverein Hellmonsödt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Musikverein Hellmonsödt",
    description:
      "Der Musikverein Hellmonsödt – 61 aktive MusikerInnen aus dem Mühlviertel. Konzerte, Ausrückungen & Jugendmusik in Hellmonsödt, Oberösterreich.",
    images: ["/images/gruppenbild1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${palanquin.variable} ${birthstoneBounce.variable} ${lexend.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-palanquin)]">
        {children}
      </body>
    </html>
  );
}
