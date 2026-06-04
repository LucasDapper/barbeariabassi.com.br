import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#1a0f0a] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagem com moldura dourada */}
        <div className="relative">
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
              alt="Interior elegante da Barbearia Bassi"
              fill
              className="object-cover"
            />
          </div>
          {/* Moldura decorativa */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#c9a06a]/50 rounded-2xl -z-10" />
          {/* Badge flutuante */}
          <div className="absolute -top-4 -left-4 bg-[#c9a06a] text-white rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-2xl font-extrabold leading-none">5+</p>
            <p className="text-xs font-medium">Anos de experiência</p>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-5">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Tradição &amp; <span className="text-[#c9a06a]">Sofisticação</span>{" "}
            em cada detalhe
          </h2>
          <p className="text-gray-400 leading-relaxed">
            A Barbearia Bassi nasceu da paixão por cuidar bem dos homens que
            valorizam sua aparência. Mais do que um simples corte, oferecemos
            uma experiência completa de bem-estar e estilo, num ambiente
            acolhedor e sofisticado.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Com profissionais altamente qualificados e produtos premium
            selecionados a dedo, garantimos que cada cliente saia renovado,
            confiante e com um visual impecável. Aqui, cada detalhe importa —
            do atendimento ao acabamento final.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-2 pt-4 border-t border-[#c9a06a]/20">
            {[
              { value: "500+", label: "Clientes satisfeitos" },
              { value: "5 ★", label: "Avaliação Google" },
              { value: "6 dias", label: "Por semana" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-[#c9a06a]">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
