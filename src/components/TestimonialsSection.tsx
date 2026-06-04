type Testimonial = {
  name: string;
  date: string;
  text: string;
  initial: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rafael Oliveira",
    date: "há 2 semanas",
    text: "Melhor barbearia da região! O atendimento é de altíssimo nível e o corte ficou exatamente como eu queria. Já sou cliente fiel há mais de 1 ano. Super recomendo!",
    initial: "R",
  },
  {
    name: "Carlos Eduardo",
    date: "há 1 mês",
    text: "Ambiente incrível, profissionais muito capacitados e produtos de primeira. O combo cabelo + barba vale muito a pena. Sai me sentindo uma pessoa nova!",
    initial: "C",
  },
  {
    name: "Marcos Vinicius",
    date: "há 3 semanas",
    text: "Nunca me senti tão bem com minha aparência. A barba ficou impecável e o corte combinou perfeitamente. Atendimento rápido e super agradável!",
    initial: "M",
  },
  {
    name: "João Paulo",
    date: "há 2 meses",
    text: "Fui pela primeira vez indicado por um amigo e já me tornei cliente fixo. A qualidade é incomparável. Barbearia Bassi é referência de estilo e qualidade.",
    initial: "J",
  },
  {
    name: "Felipe Andrade",
    date: "há 1 semana",
    text: "Excelente custo-benefício! Saí muito satisfeito com o resultado. O ambiente é confortável e os profissionais são super atenciosos e detalhistas.",
    initial: "F",
  },
  {
    name: "Rodrigo Sousa",
    date: "há 5 dias",
    text: "Atendimento nota 10! Me indicaram o corte perfeito para o meu tipo de cabelo e ficou incrível. Com certeza voltarei sempre. Muito obrigado, equipe Bassi!",
    initial: "R",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#c9a06a]"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="avaliacoes" className="bg-[#0d0704] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c9a06a] text-xs uppercase tracking-[0.3em] font-medium">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Avaliações <span className="text-[#c9a06a]">Google</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating />
            <span className="text-white font-bold">5.0</span>
            <span className="text-gray-500 text-sm">(+50 avaliações)</span>
            <GoogleIcon />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name + t.date}
              className="bg-[#1a0f0a] border border-[#c9a06a]/20 rounded-2xl p-6 hover:border-[#c9a06a]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a06a] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-600 text-xs">{t.date}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <StarRating />
              <p className="text-gray-400 text-sm leading-relaxed mt-3">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
