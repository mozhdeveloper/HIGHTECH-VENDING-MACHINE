"use client";

import Image from "next/image";
import { PRODUCTS } from "@/data/mockData";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";

export default function FeaturedStrip() {
  const featured = PRODUCTS.slice(0, 4);
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  return (
    <>
      <section className="bg-slate-50 pt-8 pb-12 overflow-hidden shadow-inner font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {featured.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-white flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden pb-4 relative"
              >
                {/* ── Top Left: 'HOT' Badge + Logo ── */}
                <div className="absolute top-0 left-0 z-10 flex items-center">
                  <div className="bg-[#b3b3b3] text-white text-[11px] font-bold px-2 py-0.5 tracking-wide uppercase">
                    HOT
                  </div>
                  <div className="h-6 w-24 relative ml-1.5 opacity-80" style={{ filter: 'grayscale(100%)' }}>
                    <Image
                      src="/images/logo.png"
                      alt="HIGHTECH Vending Machine"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                {/* ── Machine Image ── */}
                <div className="relative w-full aspect-[3/4] mt-8 flex-1 flex items-center justify-center">
                  <Image
                    src={product.modal.image} // using modal image since it has the detailed, non-placeholder view without backgrounds
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Fallback box if image is missing */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
                    <span className="text-xs text-slate-400 border border-dashed border-slate-300 px-4 py-8 rounded">
                      {product.imagePlaceholder}
                    </span>
                  </div>
                </div>

                {/* ── Title ── */}
                <div className="px-5 mt-1 mb-4 text-center">
                  <h3 className="text-[13px] text-slate-600 font-medium truncate group-hover:text-slate-900 transition-colors uppercase">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
