"use client";

import { Smartphone, Radio, Bot, TrendingUp, CheckCircle2, ScanFace, Thermometer } from "lucide-react";
import { TECH_FEATURES, DASHBOARD_METRICS, DASHBOARD_BARS } from "@/data/mockData";

const ICONS = { Smartphone, ScanFace, Radio, Thermometer, Bot } as const;

export default function SmartTech() {
  return (
    <section id="tech" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-3xl blur-2xl" />
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-soft p-6 lg:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Fleet Analytics
                </div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Cloud Sales & Inventory Dashboard
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                LIVE
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {DASHBOARD_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {m.label}
                  </div>
                  <div className="mt-1 text-xl font-bold text-slate-900">
                    {m.value}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                    <TrendingUp className="w-3 h-3" />
                    {m.trend}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Hourly Sales (USD)</span>
                <span>Last 12h</span>
              </div>
              <div className="mt-3 flex items-end gap-1.5 h-32">
                {DASHBOARD_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-indigo-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech feature list */}
        <div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Smart Technology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Powered by AI, payments, and the cloud
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Every HIGHTECH machine ships with a unified software stack that
            connects payments, inventory, customer experience, and operations in
            one intelligent platform.
          </p>

          <ul className="mt-8 space-y-4">
            {TECH_FEATURES.map((f) => {
              const Icon = ICONS[f.icon as keyof typeof ICONS];
              return (
                <li
                  key={f.title}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/70 transition-all"
                >
                  <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      {f.title}
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
