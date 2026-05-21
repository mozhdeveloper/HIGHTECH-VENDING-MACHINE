"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function LeadBanner() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 p-10 lg:p-14">
          <div className="absolute inset-0 bg-grid-light [background-size:36px_36px] opacity-10" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-400/30 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Free Consultation
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to automate your retail experience?
              </h2>
              <p className="mt-3 text-white/85 text-lg">
                Request a free consultation and machine customization mockup
                from our engineering team.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-700 font-bold shadow-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Contact Our Engineering Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
