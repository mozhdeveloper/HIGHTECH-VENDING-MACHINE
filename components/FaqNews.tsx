"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight, Calendar } from "lucide-react";
import { NEWS_ARTICLES, FAQS } from "@/data/mockData";

export default function FaqNews() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="news" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        {/* News */}
        <div>
          <span className="text-sm font-semibold tracking-wider text-slate-900 uppercase">
            Knowledge Center
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest news & articles
          </h2>
          <p className="mt-4 text-slate-600">
            Insights, product launches, and industry trends from the HIGHTECH
            team.
          </p>

          <ul className="mt-8 space-y-3">
            {NEWS_ARTICLES.map((n) => (
              <li key={n.title}>
                <a
                  href={n.href}
                  className="group flex items-start justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-soft transition-all"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {n.date}
                    </div>
                    <div className="mt-1.5 font-bold text-slate-900 group-hover:text-slate-900 transition-colors">
                      {n.title}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 shrink-0 mt-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <span className="text-sm font-semibold tracking-wider text-slate-900 uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common questions, answered
          </h2>
          <p className="mt-4 text-slate-600">
            Everything operators ask before deploying at scale.
          </p>

          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.question}
                  className={`rounded-2xl bg-white border transition-all ${
                    isOpen ? "border-blue-200 shadow-soft" : "border-slate-100"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-bold text-slate-900">
                      {f.question}
                    </span>
                    <span
                      className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                        isOpen
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
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
