"use client";

import { useState } from "react";
import Image from "next/image";
import { Package, Monitor, CreditCard, Snowflake, ArrowRight } from "lucide-react";
import { PRODUCTS, type Product } from "@/data/mockData";
import ProductModal from "@/components/ProductModal";

const TABS: Array<{ key: "all" | Product["tag"]; label: string }> = [
  { key: "all", label: "All Machines" },
  { key: "Hot Sell", label: "Hot Sell" },
  { key: "Flagship", label: "Flagship" },
  { key: "New", label: "New" },
  { key: "Eco", label: "Eco" },
];

const TAG_STYLES: Record<Product["tag"], string> = {
  "Hot Sell": "bg-red-50 text-red-600",
  Flagship: "bg-blue-50 text-blue-600",
  New: "bg-emerald-50 text-emerald-600",
  Eco: "bg-lime-50 text-lime-700",
};

export default function Products() {
  const [active, setActive] = useState<"all" | Product["tag"]>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const visible =
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.tag === active);

  return (
    <section id="products" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Vending Solutions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured smart machines for every retail environment
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === t.key
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <article
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-blue-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-light [background-size:24px_24px] opacity-50" />
                {/* Real product image with placeholder fallback */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain p-6 z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback placeholder (hidden once image loads) */}
                <div className="relative z-0 w-28 h-40 rounded-xl bg-slate-900 shadow-glow flex items-center justify-center text-white text-[10px] font-semibold p-2 text-center">
                  {p.imagePlaceholder}
                </div>
                <span
                  className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-20 ${TAG_STYLES[p.tag]}`}
                >
                  {p.tag}
                </span>
                {/* "View Details" hover overlay */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-blue-600 shrink-0" />
                    Capacity: {p.specs.capacity}
                  </li>
                  <li className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-blue-600 shrink-0" />
                    Screen: {p.specs.screen}
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
                    Payment: {p.specs.payment}
                  </li>
                  <li className="flex items-center gap-2">
                    <Snowflake className="w-4 h-4 text-blue-600 shrink-0" />
                    Cooling: {p.specs.cooling}
                  </li>
                </ul>
                <button
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all"
                >
                  View Full Specs
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
