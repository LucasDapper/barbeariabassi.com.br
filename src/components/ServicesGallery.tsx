"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "./Lightbox";

const IMAGES = [
  { src: "/Galeria/Servicos/S_001.jpg",  alt: "Corte masculino moderno" },
  { src: "/Galeria/Servicos/S_002.jpg",  alt: "Acabamento de barba" },
  { src: "/Galeria/Servicos/S_003.jpg",  alt: "Corte degradê" },
  { src: "/Galeria/Servicos/S_004.jpg",  alt: "Barba modelada com navalha" },
  { src: "/Galeria/Servicos/S_005.jpeg", alt: "Estilo masculino completo" },
  { src: "/Galeria/Servicos/S_006.jpeg", alt: "Detalhes do corte" },
  { src: "/Galeria/Servicos/S_007.jpeg", alt: "Trabalho de barbearia" },
  { src: "/Galeria/Servicos/S_008.jpeg", alt: "Corte e barba combo" },
  { src: "/Galeria/Servicos/S_009.jpeg", alt: "Acabamento profissional" },
  { src: "/Galeria/Servicos/S_010.jpeg", alt: "Estilo contemporâneo" },
  { src: "/Galeria/Servicos/S_011.jpeg", alt: "Barba premium" },
  { src: "/Galeria/Servicos/S_012.jpeg", alt: "Corte clássico" },
  { src: "/Galeria/Servicos/S_013.jpeg", alt: "Visual impecável" },
  { src: "/Galeria/Servicos/S_014.jpeg", alt: "Resultado final Bassi" },
];

const CARD_W = 260;
const GAP = 12;
const ITEM_W = CARD_W + GAP;
const TOTAL_W = IMAGES.length * ITEM_W;
const SPEED = 0.04; // px per ms (~40px/s)

export default function ServicesGallery() {
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
      <section className="bg-[#3d1a08] py-16">
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="text-center">
            <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
              Nosso trabalho
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Galeria de <span className="text-[#c9a06a]">Serviços</span>
            </h2>
            <p className="text-white/50 mt-3 max-w-lg mx-auto text-sm">
              Cada corte é uma obra. Confira de perto o padrão de qualidade da Barbearia Bassi.
            </p>
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
