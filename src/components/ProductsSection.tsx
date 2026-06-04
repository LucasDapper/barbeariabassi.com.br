import Image from "next/image";
import Link from "next/link";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    name: "Pomada Modeladora Matte",
    description:
      "Fixação forte com acabamento opaco e natural. Ideal para penteados modernos e definidos.",
    price: "R$ 49,90",
    image:
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=500&q=80",
    tag: "Mais Vendido",
  },
  {
    name: "Óleo para Barba Premium",
    description:
      "Nutre, amacia e dá brilho à barba com fragrância amadeirada sofisticada.",
    price: "R$ 39,90",
    image:
      "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=500&q=80",
    tag: "Novo",
  },
  {
    name: "Shampoo Anticaspa Pro",
    description:
      "Fórmula especial para couro cabeludo sensível com ação anticaspa e hidratante.",
    price: "R$ 34,90",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80",
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
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[#c9a06a] font-extrabold text-2xl">
                    {product.price}
                  </p>
                  <Link
                    href="https://wa.me/556699159353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#c9a06a] hover:bg-[#b8905a] text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors duration-200"
                  >
                    Solicitar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
