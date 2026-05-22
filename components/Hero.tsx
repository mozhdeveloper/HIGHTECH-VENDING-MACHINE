"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { COMPANY } from "@/data/mockData";

export default function Hero() {
  return (
    <section id="home" className="bg-[#030818]">
      {/* ── Full-width banner image ── */}
      <div className="relative w-full overflow-hidden">
        {/* Wrapper div carries the zoom animation so overflow-hidden clips it properly */}
        <div className="animate-zoom-in origin-center">
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
        </div>

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
    </section>
  );
}
