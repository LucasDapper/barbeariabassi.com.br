import Image from "next/image";
import { MapPin } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.99a8.19 8.19 0 004.79 1.52V7.07a4.85 4.85 0 01-1.02-.38z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/barbearia_bassi/",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Barbearia-Bassi/61581430212070/?mibextid=wwXIfr&rdid=PUEjEGLE4Lebwm6z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXS2spsxC%2F%3Fmibextid%3DwwXIfr",
    icon: <FacebookIcon />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@barbearia.bassi?_t=ZM-90Bp7pLx0iC&_r=1",
    icon: <TikTokIcon />,
  },
  {
    label: "Como chegar",
    href: "https://maps.google.com/?q=Av.+das+Ac%C3%A1cias,+2120+B,+Sinop-MT",
    icon: <MapPin className="w-5 h-5" />,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/Galeria/Barbearia/B_008.jpg"
        alt="Barbearia Bassi — fachada"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#5e3019]/50 via-[#1a0f0a]/55 to-[#0d0704]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <span className="text-[#c9a06a] text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
          Experiência Premium em Cada Detalhe
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Barbearia{" "}
          <span className="text-[#c9a06a] drop-shadow-lg">Bassi</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/85 font-light">
          &ldquo;Seu visual em dia é na{" "}
          <strong className="text-[#c9a06a] font-extrabold not-italic">
            BASSI
          </strong>
          &rdquo;
        </p>

        <div className="flex items-center gap-6 text-white/60 text-sm">
          <span>⏰ Seg a Sáb, 08h às 19h</span>
          <span className="w-px h-4 bg-white/30" />
          <span>📍 Av. Acácias, 2120B</span>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center gap-3 mt-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#c9a06a] text-white/80 hover:text-white border border-white/15 hover:border-[#c9a06a] transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-[#c9a06a]"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
