"use client";

import { useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_W = 320;
const GAP = 16;
const ITEM_W = CARD_W + GAP;
const SPEED = 0.04;

type Testimonial = { name: string; text: string; initial: string };

const testimonials: Testimonial[] = [
  { name: "Lucas Dapper Dos Santos",       initial: "L", text: "Atendimento excelente tanto para crianças quanto para adultos. Profissionais muito competentes, ambiente descontraído para fazer networking e dar boas risadas, além de sair com um corte impecável. Recomendo!" },
  { name: "Moriel De Almeida Martins",     initial: "M", text: "Espaço muito bem climatizado, organizado! Luiz Fernando sempre muito bem atencioso, meu filho de 6 meses no primeiro corte de cabelo. Fernando já é referência!!!" },
  { name: "Adjair José",                   initial: "A", text: "Barbearia de excelência, profissionais e serviços de qualidade, além do atendimento rápido e resultados que superam as nossas expectativas, sou cliente e recomendo!" },
  { name: "Aline Oliveira de Jesus",       initial: "A", text: "Barbearia Bassi é linda, atendimento maravilhoso, espaço organizado. A melhor de Sinop! Parabéns Luiz e equipe, continuem atendendo em excelência 👏👏" },
  { name: "Rafael Freire",                 initial: "R", text: "Atendimento nota 10, corte do jeito que o cliente desejar, preço justo. Recomendo ✂️👏" },
  { name: "Neuza Giane Dapper",            initial: "N", text: "Excelente atendimento, local moderno e aconchegante! Fácil localização. E o melhor: um preço acessível. Parabéns!!!" },
  { name: "Elisandra Da Silva Conceição",  initial: "E", text: "Corte do meu marido e meu filho sensacional. Meu filho ficou super feliz com o corte." },
  { name: "Gabriel Muller",               initial: "G", text: "Barbearia com atendimento excelente, ambiente aconchegante e profissionalismo sem igual!" },
  { name: "Flavio Sousa",                  initial: "F", text: "Super atendimento, mão de obra qualificada e ambiente muito agradável." },
];

const TOTAL_W = testimonials.length * ITEM_W;

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#c9a06a]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const animRef = useRef<number>(0);
  const lastTRef = useRef<number>(0);
  const xRef = useRef(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const step = (t: number) => {
      const dt = lastTRef.current ? t - lastTRef.current : 0;
      lastTRef.current = t;
      if (!pausedRef.current && trackRef.current) {
        xRef.current += SPEED * dt;
        if (xRef.current >= TOTAL_W) xRef.current -= TOTAL_W;
        trackRef.current.style.transform = `translateX(-${xRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scrollByCard = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    pausedRef.current = true;
    xRef.current += dir * ITEM_W;
    if (xRef.current < 0) xRef.current += TOTAL_W;
    if (xRef.current >= TOTAL_W) xRef.current -= TOTAL_W;
    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(-${xRef.current}px)`;
    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = "";
      pausedRef.current = false;
    }, 450);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) scrollByCard(diff > 0 ? 1 : -1);
    else setTimeout(() => { pausedRef.current = false; }, 100);
  };

  return (
    <section id="avaliacoes" className="bg-[#0d0704] py-20">
      <div className="max-w-6xl mx-auto px-4 mb-14">
        <div className="text-center">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Avaliações <span className="text-[#c9a06a]">Google</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating />
            <span className="text-white font-bold">5.0</span>
            <span className="text-gray-500 text-sm">(+50 avaliações)</span>
            <GoogleIcon />
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={() => scrollByCard(-1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-[#c9a06a] text-white rounded-full items-center justify-center transition-colors duration-200"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-[#c9a06a] text-white rounded-full items-center justify-center transition-colors duration-200"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div ref={trackRef} className="flex gap-4 pl-4 md:pl-12 will-change-transform">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#1a0f0a] border border-[#c9a06a]/20 rounded-2xl p-6 hover:border-[#c9a06a]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a06a] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                    {t.initial}
                  </div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                </div>
                <GoogleIcon />
              </div>
              <StarRating />
              <p className="text-gray-400 text-sm leading-relaxed mt-3">{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center px-4">
        <p className="text-gray-500 text-sm mb-5">
          Gostou do atendimento? Deixe sua avaliação no Google e nos ajude a crescer!
        </p>
        <a
          href="https://share.google/l0u99tnWlaYOuYV9r"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3.5 px-8 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <GoogleIcon />
          Avaliar no Google
        </a>
      </div>
    </section>
  );
}
