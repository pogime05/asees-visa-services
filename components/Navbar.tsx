"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-slate-950/70 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-cyan-400 font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:9056161739"
              className="ml-3 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all glow-cyan-sm hover:glow-cyan"
            >
              <Phone className="w-3.5 h-3.5" />
              (905) 616-1739
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-white/10 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-slate-300 hover:text-cyan-400 font-medium text-sm rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:9056161739"
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              Call: (905) 616-1739
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
