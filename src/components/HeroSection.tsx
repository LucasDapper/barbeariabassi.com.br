import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
        alt="Barbearia Bassi – ambiente profissional"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#5e3019]/85 via-[#1a0f0a]/80 to-[#0d0704]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <span className="text-[#c9a06a] text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
          Experiência Premium em Cuidados Masculinos
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

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="https://wa.me/556699159353"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a06a] hover:bg-[#b8905a] text-white font-bold py-4 px-10 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c9a06a]/30"
          >
            Agendar um Horário
          </Link>
          <a
            href="#servicos"
            className="border-2 border-[#c9a06a] text-[#c9a06a] hover:bg-[#c9a06a] hover:text-white font-bold py-4 px-10 rounded-full text-base md:text-lg transition-all duration-300"
          >
            Ver Serviços
          </a>
        </div>

        <div className="flex items-center gap-6 mt-4 text-white/60 text-sm">
          <span>⏰ Seg–Sáb 08h–19h</span>
          <span className="w-px h-4 bg-white/30" />
          <span>📍 Av. Acácias, 2120B</span>
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
