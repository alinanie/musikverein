"use client";
import { useEffect, useState } from "react";

// "musikvereinhellmonsoedt@gmail.com" stored as char codes – never appears as plain text in HTML
const EMAIL_CODES = [109,117,115,105,107,118,101,114,101,105,110,104,101,108,108,109,111,110,115,111,101,100,116,64,103,109,97,105,108,46,99,111,109];

function MailIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function ObfuscatedMailLink({ color = "#00628e", className = "" }: { color?: string; className?: string }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(EMAIL_CODES.map((c) => String.fromCharCode(c)).join(""));
  }, []);

  if (!email) {
    // Placeholder while JS hasn't run yet – no email visible in HTML source
    return (
      <span className={`inline-flex items-center gap-2 font-semibold text-[15px] ${className}`} style={{ color }}>
        <MailIcon color={color} />
        <span className="opacity-0 select-none">loading</span>
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center gap-2 font-semibold text-[15px] hover:underline ${className}`}
      style={{ color }}
    >
      <MailIcon color={color} />
      {email}
    </a>
  );
}
