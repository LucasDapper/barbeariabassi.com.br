"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Maximize2, Armchair, Lightbulb, ShoppingBag, Star } from "lucide-react";
import Lightbox from "./Lightbox";

const images = [
  {
    src: "/Galeria/Barbearia/B_001.jpeg",
    alt: "Interior da Barbearia Bassi — cadeiras e área de espera",
    caption: "Ambiente acolhedor",
  },
  {
    src: "/Galeria/Barbearia/B_002.jpeg",
    alt: "Fachada da Barbearia Bassi durante o dia",
    caption: "Nossa fachada",
  },
  {
    src: "/Galeria/Barbearia/B_003.jpeg",
    alt: "Bancadas profissionais com iluminação LED dourada",
    caption: "Estações de trabalho",
  },
  {
    src: "/Galeria/Barbearia/B_004.jpeg",
    alt: "Fachada iluminada à noite",
    caption: "Aberto até as 19h",
  },
  {
    src: "/Galeria/Barbearia/B_005.jpeg",
    alt: "Cadeiras profissionais alinhadas com bancadas e espelhos iluminados",
    caption: "Cadeiras premium em couro",
  },
  {
    src: "/Galeria/Barbearia/B_006.jpeg",
    alt: "Poltrona de barbearia com ambiente ao fundo",
    caption: "Conforto em cada detalhe",
  },
  {
    src: "/Galeria/Barbearia/B_007.jpeg",
    alt: "Fachada da Barbearia Bassi — entrada com poste tradicional",
    caption: "Av. Acácias, 2120B",
  },
];

// Layout mosaico grid-cols-3 (desktop)
// Row 1-2: [0: 2×2] [1: 1×1] / [0 cont] [2: 1×1]
// Row 3:   [3: 1×1] [4: 2×1]
// Row 4:   [5: 1×1] [6: 2×1]
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

const features = [
  {
    icon: Armchair,
    title: "Poltronas Premium",
    desc: "Cadeiras profissionais em couro genuíno para máximo conforto durante o atendimento.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação LED",
    desc: "Bancadas com iluminação LED dourada — ambiente sofisticado e funcional para o barbeiro.",
  },
  {
    icon: ShoppingBag,
    title: "Produtos Selecionados",
    desc: "Prateleiras abastecidas com os melhores produtos masculinos do mercado.",
  },
  {
    icon: Star,
    title: "Estrutura Moderna",
    desc: "Piso porcelanato, teto alto e decoração que une tradição e modernidade.",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  );
  const handleNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    []
  );

  return (
    <>
      <section id="galeria" className="bg-[#0d0704] py-20 px-4">
        <div className="max-w-6xl mx-auto">
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

          {/* Destaques do espaço */}
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

          {/* Mosaico de fotos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[185px]">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${spans[i]}`}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium drop-shadow">
                    {img.caption}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white drop-shadow-lg flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
