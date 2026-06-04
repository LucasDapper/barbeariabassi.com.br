"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import Lightbox from "./Lightbox";

const images = [
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

// Layout mosaico para grid-cols-4 (desktop)
// Row 1-2: [0: 2×2] [1: 1×1] [2: 1×1] / [0 cont] [3: 1×1] [4: 1×1]
// Row 3:   [5: 1×1] [6: 2×1] [7: 1×1]
// Row 4-5: [8: 1×2] [9: 1×1] [10: 1×1] [11: 1×1] / [8 cont] [12: 2×1] [13: 1×1]
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function ServicesGallery() {
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
      <section className="bg-[#3d1a08] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[110px] md:auto-rows-[145px]">
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
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
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
