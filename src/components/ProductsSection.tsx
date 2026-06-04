import Image from "next/image";
import Link from "next/link";

type Product = {
  name: string;
  description: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    name: "Fox For Men Pasta Black",
    description:
      "Pasta Premium com fixação extra forte e acabamento escurecido. Perfeita para definir e modelar com estilo.",
    image: "/Galeria/Produtos/P_001.jpg",
    tag: "Mais Vendido",
  },
  {
    name: "Fox One Premium Modelador",
    description:
      "Modelador profissional de fixação média que modela e fixa o penteado sem pesar, para todos os tipos de cabelo.",
    image: "/Galeria/Produtos/P_002.jpg",
    tag: "Novo",
  },
  {
    name: "Fox For Men Leave-In",
    description:
      "Leave-in de uso diário com hidratação intensa, proteção térmica, controle do frizz e brilho sem enxágue.",
    image: "/Galeria/Produtos/P_003.jpg",
    tag: "Exclusivo",
  },
];

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-[#0d0704] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            Leve para Casa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Nossos <span className="text-[#c9a06a]">Produtos</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Produtos profissionais selecionados pelos nossos especialistas para
            manter seu estilo em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-[#1a0f0a] border border-[#c9a06a]/20 rounded-2xl overflow-hidden hover:border-[#c9a06a]/60 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#c9a06a] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <Link
                  href="https://wa.me/556699159353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#c9a06a] hover:bg-[#b8905a] text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] shadow-md shadow-[#c9a06a]/20"
                >
                  Solicitar pelo WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
