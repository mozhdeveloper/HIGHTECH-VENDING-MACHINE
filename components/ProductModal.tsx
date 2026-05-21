"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Package,
  Monitor,
  Snowflake,
  Zap,
  Shield,
  Wifi,
  CheckCircle2,
  MessageCircle,
  Download,
  Thermometer,
  Weight,
  Ruler,
  Cpu,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { type Product } from "@/data/mockData";

const TAG_STYLES: Record<Product["tag"], string> = {
  "Hot Sell": "bg-red-100 text-red-700",
  Flagship: "bg-blue-100 text-blue-700",
  New: "bg-emerald-100 text-emerald-700",
  Eco: "bg-lime-100 text-lime-700",
};

const PAYMENT_ICONS = [CreditCard, Smartphone, Zap];

const SPEC_ROWS = [
  { icon: Cpu, label: "Model", key: "model" },
  { icon: Ruler, label: "Dimensions (W×D×H)", key: "dimensions" },
  { icon: Package, label: "Pre-packed Size", key: "packedSize" },
  { icon: Zap, label: "Voltage", key: "voltage" },
  { icon: Zap, label: "Ambient Power", key: "ambientPower" },
  { icon: Snowflake, label: "Cooling Power", key: "coolingPower" },
  { icon: Thermometer, label: "Heating Power", key: "heatingPower" },
  { icon: Weight, label: "Weight", key: "weight" },
  { icon: Thermometer, label: "Temperature", key: "temperature" },
  { icon: Snowflake, label: "Refrigerant", key: "refrigerant" },
] as const;

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const m = product.modal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-6 px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/65 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl my-auto animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-100">
          <div>
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${TAG_STYLES[product.tag]}`}
            >
              {product.tag}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              {product.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Model: <span className="font-semibold text-slate-700">{m.model}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors mt-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

          {/* Left: machine image + quick specs */}
          <div className="p-6 flex flex-col gap-6">
            {/* Machine image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
              <Image
                src={m.image}
                alt={product.title}
                fill
                className="object-contain p-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Placeholder shown behind image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 z-0">
                <Package className="w-16 h-16" />
                <span className="mt-3 text-sm font-semibold">{product.imagePlaceholder}</span>
              </div>
              {/* Branding overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur px-2.5 py-1 rounded-full z-10">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-black text-white tracking-wider">HIGHTECH</span>
              </div>
            </div>

            {/* 4 quick-glance spec pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Package, label: "Capacity", val: product.specs.capacity },
                { icon: Monitor, label: "Screen", val: product.specs.screen },
                { icon: Snowflake, label: "Cooling", val: product.specs.cooling },
                { icon: CreditCard, label: "Payment", val: product.specs.payment },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <s.icon className="w-3.5 h-3.5 text-blue-600" />
                    {s.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900 leading-snug">
                    {s.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature badges */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Key Features
                </span>
              </div>
              <ul className="space-y-1.5">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: detailed specs table + payment methods */}
          <div className="p-6 flex flex-col gap-6">
            {/* Full spec table */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Product Specifications
                </span>
              </div>
              <div className="rounded-xl border border-slate-100 overflow-hidden">
                {SPEC_ROWS.map((row, i) => (
                  <div
                    key={row.key}
                    className={`flex items-start gap-3 px-4 py-3 text-sm ${
                      i % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <row.icon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="w-40 shrink-0 text-slate-500 font-medium">
                      {row.label}
                    </span>
                    <span className="text-slate-900 font-semibold leading-snug">
                      {m[row.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Payment Methods
                </span>
              </div>
              <div className="space-y-3">
                {m.paymentCategories.map((pc, i) => {
                  const Icon = PAYMENT_ICONS[i] ?? CreditCard;
                  return (
                    <div
                      key={pc.category}
                      className="rounded-xl border border-slate-100 p-3 bg-slate-50"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-blue-700">
                          {pc.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pc.methods}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Trust bar */}
              <div className="mt-3 flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 text-white">
                {[
                  { icon: Shield, label: "Secure" },
                  { icon: Wifi, label: "Remote" },
                  { icon: CheckCircle2, label: "PCI-DSS" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 text-[10px] font-semibold">
                    <b.icon className="w-3.5 h-3.5 text-blue-400" />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
          <p className="text-sm text-slate-500">
            Need a custom spec or OEM/ODM configuration?
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-white transition-all"
            >
              <Download className="w-4 h-4" />
              Request Spec Sheet
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
