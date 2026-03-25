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
  title: "Musikverein Hellmonsödt",
  description:
    "Der Musikverein Hellmonsödt – Seit Generationen durch Musik verbunden.",
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
