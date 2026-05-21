"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { COMPANY } from "@/data/mockData";

export default function Hero() {
  return (
    <section id="home" className="bg-[#030818]">
      {/* ── Full-width banner image ── */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/hero-banner-v2.jpg"
          alt="HIGHTECH Vending Machine — OEM/ODM Vending Machines Solution Provider"
          width={1920}
          height={640}
          className="w-full h-auto block"
          priority
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            const fallback = el.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />

        {/* Fallback banner — shows only when image fails to load */}
        <div
          className="hidden w-full items-center justify-center py-32 px-6"
          style={{
            background:
              "linear-gradient(135deg, #030818 0%, #0c1a3e 50%, #030818 100%)",
            aspectRatio: "3/1",
          }}
        >
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
              Smart Vending. Better Experience.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              OEM/ODM Vending Machines
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Solution Provider
              </span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
              {COMPANY.name} — complete OEM/ODM vending solutions from design to
              mass production, smart payments, and cloud management.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA + Stats strip ── */}
      <div
        className="border-t"
        style={{
          background: "linear-gradient(180deg, #060e24 0%, #030818 100%)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-lg"
            >
              Get a Smart Solution <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
              }}
            >
              <PlayCircle className="w-5 h-5" /> View Products
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-8 text-sm"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div>Global Clients</div>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">40+</div>
              <div>Countries</div>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.8%</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
