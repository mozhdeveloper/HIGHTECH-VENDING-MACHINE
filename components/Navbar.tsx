"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/data/mockData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 h-18 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          {logoErr ? (
            <>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-glow">
                <Zap className="w-5 h-5" />
              </span>
              <span className="font-extrabold tracking-tight text-slate-900 text-base sm:text-lg">
                {COMPANY.name}
              </span>
            </>
          ) : (
            <div className="relative h-11 w-40">
              <Image
                src="/images/logo.png"
                alt={COMPANY.name}
                fill
                className="object-contain object-left"
                priority
                onError={() => setLogoErr(true)}
              />
            </div>
          )}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
