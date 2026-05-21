"use client";

import { useState } from "react";
import Image from "next/image";
import { Factory, Leaf, Headset, Building } from "lucide-react";
import { PHILOSOPHY_VALUES, ABOUT_TEXT } from "@/data/mockData";

const ICONS = { Factory, Leaf, Headset } as const;


export default function About() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <section id="about" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* About visual */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[5/4] rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 relative overflow-hidden shadow-soft">
            {/* Fallback background layers (always rendered, covered by real image) */}
            <div className="absolute inset-0 bg-grid-light [background-size:32px_32px] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-indigo-500/30" />

            {imgErr ? (
              /* Fallback center text when image is missing */
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div>
                  <Building className="w-12 h-12 mx-auto opacity-80" />
                  <div className="mt-4 font-bold text-xl">{ABOUT_TEXT.facility.title}</div>
                  <div className="mt-1 text-sm text-white/70">{ABOUT_TEXT.facility.subtitle}</div>
                </div>
              </div>
            ) : (
              /* Real High Standard Process infographic */
              <>
                <Image
                  src="/images/machine-process.jpg"
                  alt="High Standard Process — HIGHTECH Vending Machine"
                  fill
                  className="object-cover"
                  onError={() => setImgErr(true)}
                />
                {/* Bottom caption overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white font-bold text-sm">High Standard Process</p>
                  <p className="text-white/60 text-xs mt-0.5">Modular production · Low maintenance cost</p>
                </div>
              </>
            )}
          </div>
          {/* stat tile */}
          <div className="hidden md:block absolute -bottom-6 -right-6 bg-white rounded-2xl border border-slate-100 shadow-soft p-5">
            <div className="text-3xl font-extrabold text-slate-900">15+</div>
            <div className="text-xs text-slate-500 mt-1 max-w-[140px]">
              Years engineering smart vending hardware
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            About HIGHTECH
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {ABOUT_TEXT.headline}
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {ABOUT_TEXT.description}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 rounded-2xl bg-blue-50 border border-blue-100">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Our Vision</div>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">{ABOUT_TEXT.vision}</p>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Our Mission</div>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">{ABOUT_TEXT.mission}</p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-1 gap-4">
            {PHILOSOPHY_VALUES.map((v) => {
              const Icon = ICONS[v.icon as keyof typeof ICONS];
              return (
                <div
                  key={v.title}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100"
                >
                  <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">{v.title}</h4>
                    <p className="mt-0.5 text-sm text-slate-600">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
