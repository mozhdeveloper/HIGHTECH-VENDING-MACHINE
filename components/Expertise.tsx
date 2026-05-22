"use client";

import { Cpu, CreditCard, Settings2, CloudCog, ArrowUpRight } from "lucide-react";
import { EXPERTISE } from "@/data/mockData";

const ICONS = { Cpu, CreditCard, Settings2, CloudCog } as const;

export default function Expertise() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wider text-slate-900 uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering the next generation of retail automation
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A complete ecosystem of hardware, software, and services purpose-built
            for modern operators.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
