import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#1a0f0a] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagem com moldura dourada */}
        <div className="relative">
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/Galeria/Barbearia/B_006.jpeg"
              alt="Interior elegante da Barbearia Bassi"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#c9a06a]/50 rounded-2xl -z-10" />
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
            A Barbearia Bassi nasceu da paixão por cuidar bem e valorizar sua
            aparência. Mais do que um simples corte, oferecemos uma experiência
            completa de bem-estar e estilo, num ambiente acolhedor e sofisticado.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Com profissionais altamente qualificados e produtos premium
            selecionados a dedo, garantimos que cada cliente saia renovado,
            confiante e com um visual impecável. Aqui, cada detalhe importa,
            do atendimento ao acabamento final.
          </p>

          {/* Cards lado a lado */}
          <div className="grid grid-cols-2 gap-3 mt-2 pt-4 border-t border-[#c9a06a]/20">
            {/* Card Anos de Experiência */}
            <div className="bg-[#0d0704]/60 border border-[#c9a06a]/25 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-1">
              <p className="text-3xl font-extrabold text-[#c9a06a] leading-none">7+</p>
              <p className="text-white text-xs font-semibold">Anos de</p>
              <p className="text-white text-xs font-semibold">Experiência</p>
            </div>

            {/* Card Google */}
            <div className="bg-[#0d0704]/60 border border-[#c9a06a]/25 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#c9a06a]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-xs font-semibold leading-tight">5.0 · +50 avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
