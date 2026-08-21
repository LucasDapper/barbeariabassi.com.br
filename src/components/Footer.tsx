import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080402] border-t border-[#c9a06a]/15">
      {/* CTA Banner */}
      <div className="bg-[#5e3019] py-12 px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Pronto para renovar o visual?
        </h3>
        <p className="text-white/70 mb-6 text-sm">
          &ldquo;Seu visual em dia é na <strong className="text-[#c9a06a]">BASSI</strong>&rdquo;
        </p>
        <Link
          href="https://wa.me/556692218987"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <WhatsAppIcon />
          Falar pelo WhatsApp
        </Link>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h4 className="text-[#c9a06a] font-extrabold text-2xl mb-1">
            Barbearia Bassi
          </h4>
          <p className="text-gray-500 text-sm italic mb-4">
            &ldquo;Seu visual em dia é na BASSI&rdquo;
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            Oferecemos uma experiência premium de cuidados masculinos com
            profissionais qualificados e produtos de alta qualidade.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-white font-semibold mb-4">Navegação</h5>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-[#c9a06a] text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-white font-semibold mb-4">Contato &amp; Horário</h5>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#c9a06a] mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-500 text-sm">
                Av. Acácias, 2120B – Res. Norte
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#c9a06a] flex-shrink-0" aria-hidden="true" />
              <Link
                href="https://wa.me/556692218987"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#c9a06a] text-sm transition-colors"
              >
                +55 66 9915-9353
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#c9a06a] flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-500 text-sm">
                Seg a Sáb, 08:00 às 19:00
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9a06a]/10 py-4 px-4 text-center text-gray-700 text-xs">
        © 2026 Barbearia Bassi. Todos os direitos reservados.
      </div>
    </footer>
  );
}
