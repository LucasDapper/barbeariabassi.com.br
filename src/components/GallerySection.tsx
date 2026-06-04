"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Armchair, Lightbulb, ShoppingBag, Star } from "lucide-react";
import Lightbox from "./Lightbox";

const IMAGES = [
  { src: "/Galeria/Barbearia/B_001.jpeg", alt: "Interior da Barbearia Bassi — cadeiras e área de espera" },
  { src: "/Galeria/Barbearia/B_002.jpeg", alt: "Fachada da Barbearia Bassi durante o dia" },
  { src: "/Galeria/Barbearia/B_003.jpeg", alt: "Bancadas profissionais com iluminação LED dourada" },
  { src: "/Galeria/Barbearia/B_004.jpeg", alt: "Fachada iluminada à noite" },
  { src: "/Galeria/Barbearia/B_005.jpeg", alt: "Cadeiras profissionais alinhadas com bancadas e espelhos iluminados" },
  { src: "/Galeria/Barbearia/B_006.jpeg", alt: "Poltrona de barbearia com ambiente ao fundo" },
  { src: "/Galeria/Barbearia/B_007.jpeg", alt: "Fachada da Barbearia Bassi — entrada com poste tradicional" },
  { src: "/Galeria/Barbearia/B_009.jpg", alt: "Ambiente interno da Barbearia Bassi" },
  { src: "/Galeria/Barbearia/B_010.jpg", alt: "Detalhe do espaço da Barbearia Bassi" },
];

const features = [
  { icon: Armchair,    title: "Poltronas Premium",    desc: "Cadeiras profissionais em couro genuíno para máximo conforto durante o atendimento." },
  { icon: Lightbulb,   title: "Frigobar com Cerveja",   desc: "Aqui o atendimento vai além do corte: tem cerveja gelada esperando por você. Porque relaxar faz parte da experiência." },
  { icon: ShoppingBag, title: "Produtos Selecionados", desc: "Prateleiras abastecidas com os melhores produtos masculinos do mercado." },
  { icon: Star,        title: "Estrutura Moderna",     desc: "Piso porcelanato, teto alto e decoração que une tradição e modernidade." },
];

const CARD_W = 260;
const GAP = 12;
const ITEM_W = CARD_W + GAP;
const TOTAL_W = IMAGES.length * ITEM_W;
const SPEED = 0.04; // px per ms (~40px/s)

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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

  const scrollByCard = (dir: number) => {
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
  };

  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) scrollByCard(diff > 0 ? 1 : -1);
    else setTimeout(() => { pausedRef.current = false; }, 100);
  };

  const handleLightboxPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );
  const handleLightboxNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % IMAGES.length)),
    []
  );

  return (
    <>
      <section id="galeria" className="bg-[#0d0704] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
              Conheça o espaço
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Nosso <span className="text-[#c9a06a]">Ambiente</span>
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">
              Um espaço pensado para oferecer a melhor experiência em cuidados masculinos —
              moderno, confortável e com todo o equipamento profissional.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-[#1a0f0a] border border-[#c9a06a]/15 rounded-xl p-4 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#c9a06a]/15 rounded-full mb-3">
                    <Icon className="w-5 h-5 text-[#c9a06a]" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
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

          <div ref={trackRef} className="flex gap-3 pl-4 md:pl-12 will-change-transform">
            {[...IMAGES, ...IMAGES].map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i % IMAGES.length)}
                className="flex-shrink-0 w-[220px] h-[293px] md:w-[260px] md:h-[347px] relative overflow-hidden rounded-xl cursor-pointer group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}
    </>
  );
}
