import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  className?: string;
};

const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    alt: "Barbeiro realizando corte de cabelo",
    className: "col-span-2 row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Detalhe de barba bem feita",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Corte masculino moderno",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Serviço de barba premium",
  },
  {
    src: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600&q=80",
    alt: "Ferramentas profissionais de barbearia",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Estilo masculino com barba",
  },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="bg-[#1a0f0a] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            Conheça o espaço
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Nossa <span className="text-[#c9a06a]">Galeria</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl ${item.className ?? ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#5e3019]/20 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
