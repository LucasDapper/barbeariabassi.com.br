import { Scissors, User, Package, Sparkles } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  name: string;
  description: string;
  price: string;
};

const services: Service[] = [
  {
    icon: Scissors,
    name: "Corte de Cabelo",
    description:
      "Corte moderno e personalizado, adaptado ao seu estilo e formato de rosto por mãos especializadas.",
    price: "R$ 35,00",
  },
  {
    icon: User,
    name: "Barba Premium",
    description:
      "Barba aparada e modelada com navalha quente, toalha morna e produtos hidratantes de alta qualidade.",
    price: "R$ 30,00",
  },
  {
    icon: Package,
    name: "Combo Cabelo + Barba",
    description:
      "O pacote completo para um visual sofisticado: corte impecável mais barba premium em uma única sessão.",
    price: "R$ 60,00",
  },
  {
    icon: Sparkles,
    name: "Sobrancelha",
    description:
      "Design e aparação de sobrancelhas com acabamento preciso para um visual harmonioso e marcante.",
    price: "R$ 15,00",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#5e3019] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Nossos <span className="text-[#c9a06a]">Serviços</span>
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto text-sm">
            Cada serviço é executado com precisão e cuidado, utilizando
            produtos premium para garantir o melhor resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-[#1a0f0a]/70 border border-[#c9a06a]/25 rounded-2xl p-6 text-center hover:border-[#c9a06a] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9a06a]/15 rounded-full mb-5 group-hover:bg-[#c9a06a]/25 transition-colors">
                  <Icon className="w-7 h-7 text-[#c9a06a]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-5 pt-4 border-t border-[#c9a06a]/20 w-full">
                  <p className="text-[#c9a06a] font-extrabold text-2xl">
                    {service.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://wa.me/556699159353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c9a06a] hover:bg-[#b8905a] text-white font-bold py-4 px-10 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Agendar Agora
          </Link>
        </div>
      </div>
    </section>
  );
}
