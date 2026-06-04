"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Fechar"
      >
        <X className="w-7 h-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 md:left-6 z-10 text-white/60 hover:text-white transition-colors p-3"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <div
        className="relative w-full max-w-5xl mx-16 md:mx-24 flex items-center justify-center"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={1200}
          height={900}
          className="object-contain w-full rounded-lg select-none"
          style={{ maxHeight: "88vh" }}
          priority
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 md:right-6 z-10 text-white/60 hover:text-white transition-colors p-3"
        aria-label="Próxima"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-sm tabular-nums">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
