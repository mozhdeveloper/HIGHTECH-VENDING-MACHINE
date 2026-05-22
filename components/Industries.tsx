"use client";

import {
  GraduationCap,
  Plane,
  Hospital,
  Building2,
  ShoppingBag,
  Dumbbell,
  Home,
  Warehouse,
  BedDouble,
  Landmark,
} from "lucide-react";
import { INDUSTRIES } from "@/data/mockData";

const ICONS = {
  GraduationCap,
  Plane,
  Hospital,
  Building2,
  ShoppingBag,
  Dumbbell,
  Home,
  Warehouse,
  BedDouble,
  Landmark,
} as const;

export default function Industries() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wider text-slate-900 uppercase">
            Target Industries
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted across every high-traffic environment
          </h2>
          <p className="mt-4 text-slate-600">
            From education to healthcare, our machines deliver consistent
            performance and elegant user experiences anywhere people gather.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((i) => {
            const Icon = ICONS[i.icon as keyof typeof ICONS];
            return (
              <div
                key={i.label}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-slate-900 group-hover:bg-white/15 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </span>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-white">
                  {i.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
