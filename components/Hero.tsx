"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/mockData";

// Machine colour palette per tag
const MACHINE_ACCENT: Record<string, string> = {
  "Hot Sell": "#1e40af",
  Flagship: "#4f46e5",
  New: "#059669",
  Eco: "#65a30d",
};

function MachinePlaceholder({
  product,
  active,
  onClick,
}: {
  product: (typeof PRODUCTS)[number];
  active: boolean;
  onClick: () => void;
}) {
  const accent = MACHINE_ACCENT[product.tag] ?? "#1e40af";
  return (
    <div
      onClick={onClick}
      className={`relative flex-shrink-0 cursor-pointer select-none transition-all duration-300 ${
        active ? "scale-110 z-10" : "scale-95 opacity-60 hover:opacity-80 hover:scale-100"
      }`}
      style={{ width: 130 }}
    >
      {/* Hot tag above active machine */}
      {active && (
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-black text-white tracking-widest uppercase whitespace-nowrap"
          style={{ background: accent }}
        >
          {product.tag}
        </div>
      )}

      {/* Machine body */}
      <div
        className="rounded-t-xl overflow-hidden border-2 transition-all duration-300"
        style={{
          height: 260,
          background: `linear-gradient(155deg, #0c1a3e 0%, #162155 60%, #0a1230 100%)`,
          borderColor: active ? accent : "rgba(255,255,255,0.08)",
          boxShadow: active ? `0 0 24px ${accent}55` : "none",
        }}
      >
        {/* Top brand strip */}
        <div
          className="h-7 flex items-center justify-center gap-1"
          style={{ background: accent }}
        >
          <Zap className="w-3 h-3 text-white/80" />
          <span className="text-[8px] font-black text-white tracking-widest">HV</span>
        </div>

        {/* Screen */}
        <div className="mx-2 mt-2 rounded-md border overflow-hidden relative"
          style={{ height: 56, background: "#040d1e", borderColor: `${accent}44` }}>
          {/* Product image preview inside screen */}
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-1"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${accent}22, transparent)` }} />
          <div className="relative h-full flex flex-col items-center justify-center px-1">
            <div className="w-full h-1.5 rounded-full bg-white/10 mb-1">
              <div className="h-full rounded-full w-2/3" style={{ background: accent }} />
            </div>
            <span className="text-[6px] font-bold text-center leading-tight"
              style={{ color: `${accent}dd` }}>
              {product.imagePlaceholder}
            </span>
          </div>
        </div>

        {/* Product slots grid */}
        <div className="mx-2 mt-2 grid grid-cols-4 gap-[3px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-[2px]"
              style={{
                background:
                  i % 5 === 0
                    ? `${accent}66`
                    : i % 3 === 0
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>

        {/* Side panel accent */}
        <div className="absolute right-0 top-7 bottom-0 w-3"
          style={{ background: `linear-gradient(to bottom, ${accent}33, transparent)` }} />
      </div>

      {/* Machine base / PUSH button */}
      <div
        className="h-9 rounded-b-xl flex items-center justify-center border-2 border-t-0"
        style={{
          background: "linear-gradient(to bottom, #0c1a3e, #060e24)",
          borderColor: active ? `${accent}44` : "rgba(255,255,255,0.06)",
        }}
      >
        <span
          className="text-[8px] font-black tracking-[0.25em] px-3 py-0.5 rounded"
          style={{
            color: active ? "#fff" : "#aaa",
            background: active ? accent : "rgba(255,255,255,0.06)",
          }}
        >
          PUSH
        </span>
      </div>

      {/* Floor reflection */}
      <div
        className="mt-px h-10 rounded-b-lg opacity-20"
        style={{
          background: `linear-gradient(to bottom, ${accent}22, transparent)`,
          transform: "scaleY(-1)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(2);

  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: "92vh" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        {/* Real hero banner image — shows when /images/hero-banner.jpg is added */}
        <Image
          src="/images/hero-banner.jpg"
          alt="HIGHTECH Vending Machines"
          fill
          className="object-cover object-center"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Dark overlay for text readability (doubles as background when no image) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,22,64,0.92) 0%, rgba(13,30,90,0.82) 35%, rgba(26,46,122,0.72) 60%, rgba(15,31,86,0.90) 100%)",
          }}
        />
      </div>
      {/* Atmospheric top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #818cf8 0%, #3b82f6 50%, transparent 80%)" }} />
      {/* Horizon glow */}
      <div className="absolute bottom-[30%] left-0 right-0 h-32 opacity-20"
        style={{ background: "linear-gradient(to top, #7c3aed33, transparent)" }} />
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-36"
        style={{ background: "linear-gradient(to top, #030818, #0b1640aa, transparent)" }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-light [background-size:52px_52px] opacity-[0.06]" />

      {/* ── Hero Text Block ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-4">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide"
          style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)", color: "#a5b4fc" }}>
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          {COMPANY.tagline}
        </span>

        {/* H1 */}
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[5rem] font-black tracking-tight text-white leading-[1.04] uppercase">
          OEM/ODM Vending Machines
          <br />
          <span style={{
            backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Solution Provider
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          {COMPANY.name} provides complete OEM/ODM vending solutions — from design concept to mass
          production, smart payment integration, software development, and full remote management.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-glow">
            Get a Smart Solution <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#tech"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.07)", color: "#fff" }}>
            <PlayCircle className="w-5 h-5" /> Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div className="mt-9 flex items-center gap-8 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          <div><div className="text-2xl font-bold text-white">500+</div>Global Clients</div>
          <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
          <div><div className="text-2xl font-bold text-white">40+</div>Countries</div>
          <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
          <div><div className="text-2xl font-bold text-white">99.8%</div>Uptime</div>
        </div>
      </div>

      {/* ── Machine Row ── */}
      <div className="relative z-10 mt-4 pb-0">
        {/* Left arrow */}
        <button
          onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
          aria-label="Previous machine"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Machines */}
        <div className="flex items-end justify-center gap-2 sm:gap-3 px-16 overflow-hidden">
          {PRODUCTS.map((p, i) => (
            <MachinePlaceholder
              key={p.id}
              product={p}
              active={i === activeIdx}
              onClick={() => setActiveIdx(i)}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setActiveIdx((i) => Math.min(PRODUCTS.length - 1, i + 1))}
          aria-label="Next machine"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Ground strip */}
      <div className="relative z-10 h-8"
        style={{ background: "linear-gradient(to bottom, transparent, #030818)" }} />
    </section>
  );
}
