"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WA = "https://wa.me/556699159353";
const CARD_W = 260;
const GAP = 12;
const ITEM_W = CARD_W + GAP;

type Item = { name: string; description: string; image: string };

const products: Item[] = [
  { name: "Fox For Men Gel Cola",         description: "Fixação forte com efeito brilho intenso. Acabamento molhado e duradouro. 300g.",                    image: "/Galeria/Produtos/P_001.jpeg" },
  { name: "Fox For Men Pó Matte",         description: "Pó modelador que dá volume e textura sem pesar. Acabamento opaco. 7g.",                            image: "/Galeria/Produtos/P_002.jpeg" },
  { name: "Classe A Óleo para Barba",     description: "Hidrata, suaviza e fortalece a barba, deixando-a saudável e brilhante. 30ml.",                     image: "/Galeria/Produtos/P_004.jpeg" },
  { name: "Fox For Men Pasta Premium",    description: "Fixação extra forte para todos os tipos de cabelo, sem ressecamento. 80g.",                         image: "/Galeria/Produtos/P_005.jpeg" },
  { name: "Fox For Men Cera WAX Matte",   description: "Cera modeladora com fixação máxima e acabamento matte. Nova fórmula. 70g.",                        image: "/Galeria/Produtos/P_006.jpeg" },
  { name: "Fox For Men Creme Pistache",   description: "Creme modelador efeito úmido com vitamina E. Ideal para cachos e ondas. 80g.",                     image: "/Galeria/Produtos/P_007.jpeg" },
  { name: "Fox For Men Wax Toque Seco",   description: "Wax de fixação forte com acabamento toque seco. Para todos os cabelos. 80g.",                      image: "/Galeria/Produtos/P_008.jpeg" },
  { name: "Fox Shampoo Anticaspa",        description: "Com zinco, controla oleosidade sem ressecar. Alívio desde a primeira aplicação. 240ml.",           image: "/Galeria/Produtos/P_009.jpeg" },
  { name: "Fox For Men Leave-In",         description: "Hidratação intensa, proteção térmica e controle do frizz. Sem enxágue. 240ml.",                    image: "/Galeria/Produtos/P_010.jpeg" },
  { name: "Fox For Men Grooming",         description: "Para barba, cabelo e bigode. Proporciona volume, textura e aspecto natural. 240ml.",               image: "/Galeria/Produtos/P_011.jpeg" },
  { name: "Fox For Men Creme Teá",        description: "Creme modelador efeito teá, equilíbrio perfeito de fixação e brilho. 80g.",                        image: "/Galeria/Produtos/P_012.jpeg" },
  { name: "Fox For Men Balm para Barba",  description: "Hidrata e define a barba, amacia os fios e reduz a cutícula. 120ml.",                              image: "/Galeria/Produtos/P_013.jpeg" },
  { name: "Fox For Men Shampoo 4 em 1",   description: "Cabelo, barba, corpo e ação condicionante. O essencial em um só frasco. 240ml.",                   image: "/Galeria/Produtos/P_014.jpeg" },
  { name: "Minoxidil 5% Kirkland",        description: "Solução tópica para estimular o crescimento capilar. Tratamento completo para 6 meses. 60ml.",     image: "/Galeria/Produtos/P_015.jpeg" },
];

const perfumes: Item[] = [
  { name: "Mary Kay Authentic Hero Style", description: "Deo Colônia de aroma marcante e sofisticado. A fragrância do estilo autêntico. 100ml.",         image: "/Galeria/Perfumes/PE_001.jpeg" },
  { name: "Mary Kay Authentic Hero",       description: "Desodorante Colônia clássico com toque amadeirado. Para quem carrega presença onde vai. 100ml.", image: "/Galeria/Perfumes/PE_002.jpeg" },
  { name: "Mary Kay Upscale Black",        description: "Deo Colônia com notas intensas e elegantes. O perfume para quem faz a diferença. 75ml.",         image: "/Galeria/Perfumes/PE_003.jpeg" },
];

function ProductCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * ITEM_W, behavior: "smooth" });
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) scrollByCard(diff > 0 ? 1 : -1);
  };

  return (
    <div className="relative">
      <button
        onClick={() => scrollByCard(-1)}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/60 hover:bg-[#c9a06a] text-white rounded-full items-center justify-center transition-colors duration-200"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scrollByCard(1)}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/60 hover:bg-[#c9a06a] text-white rounded-full items-center justify-center transition-colors duration-200"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-scroll px-4 md:px-12 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="flex-shrink-0 w-[220px] md:w-[260px] bg-[#1a0f0a] border border-[#c9a06a]/20 rounded-2xl overflow-hidden hover:border-[#c9a06a]/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
          >
            <div className="relative h-48 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="260px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
              <div>
                <h3 className="text-white font-bold text-sm leading-tight mb-1">{item.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.description}</p>
              </div>
              <Link
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center bg-[#c9a06a] hover:bg-[#b8905a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all duration-200 hover:scale-[1.02]"
              >
                Solicitar pelo WhatsApp
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-[#0d0704] py-20">

      {/* Produtos */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            Leve para Casa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Nossos <span className="text-[#c9a06a]">Produtos</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Produtos profissionais selecionados pelos nossos especialistas para manter seu estilo em casa.
          </p>
        </div>
      </div>

      <ProductCarousel items={products} />

      {/* Divisor */}
      <div className="max-w-6xl mx-auto px-4 my-14">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#c9a06a]/20" />
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium px-2">
            Fragrâncias
          </span>
          <div className="flex-1 h-px bg-[#c9a06a]/20" />
        </div>
      </div>

      {/* Perfumes */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nossos <span className="text-[#c9a06a]">Perfumes</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Fragrâncias exclusivas para completar o visual e marcar presença onde você chegar.
          </p>
        </div>
      </div>

      <ProductCarousel items={perfumes} />

    </section>
  );
}
