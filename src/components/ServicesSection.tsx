import { Flame, Zap, Scissors, User, Layers, Star, Sparkles, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  name: string;
  duration: string;
};

const services: Service[] = [
  { icon: Flame,    name: "Barba com Toalha Quente", duration: "30 min" },
  { icon: Zap,      name: "Barba na Máquina",        duration: "15 min" },
  { icon: Scissors, name: "Barba na Navalha",        duration: "30 min" },
  { icon: User,     name: "Cabelo",                  duration: "30 min" },
  { icon: Layers,   name: "Cabelo e Barba",          duration: "30 min" },
  { icon: Star,     name: "Cabelo Infantil",         duration: "30 min" },
  { icon: Scissors, name: "Cabelo na Tesoura",       duration: "30 min" },
  { icon: Sparkles, name: "Sobrancelha",             duration: "15 min" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-[#1a0f0a]/70 border border-[#c9a06a]/25 rounded-2xl p-5 hover:border-[#c9a06a] hover:-translate-y-1 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-[#c9a06a]/15 rounded-full group-hover:bg-[#c9a06a]/25 transition-colors">
                  <Icon className="w-5 h-5 text-[#c9a06a]" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-white/40 text-xs">
                    <Clock className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
