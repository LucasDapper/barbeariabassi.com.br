"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre",     label: "Nossa História" },
  { href: "#servicos",  label: "Serviços" },
  { href: "#produtos",  label: "Produtos" },
  { href: "#galeria",   label: "Ambiente" },
  { href: "#avaliacoes",label: "Feedbacks" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0704]/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Barbearia Bassi — início">
          <Image
            src="/Galeria/Logo/L_002.jpg"
            alt="Barbearia Bassi"
            width={56}
            height={56}
            className="rounded-full object-cover"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-[#c9a06a] text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="https://wa.me/556692218987"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a06a] hover:bg-[#b8905a] text-white text-xs font-bold py-2.5 px-6 rounded-full uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-md shadow-[#c9a06a]/25"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-1.5"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0d0704]/98 backdrop-blur-md border-t border-[#c9a06a]/15`}
      >
        <div className="flex flex-col gap-1 px-4 py-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/75 hover:text-[#c9a06a] text-sm font-semibold uppercase tracking-widest py-2.5 border-b border-white/5 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="https://wa.me/556692218987"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-center bg-[#c9a06a] hover:bg-[#b8905a] text-white font-bold py-3 rounded-full text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
