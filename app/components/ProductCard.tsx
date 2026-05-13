"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import type { Product } from "@/app/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selected = product.variants[selectedIdx];
  const hasVariants = product.variants.length > 1;

  const formatPrice = (n: number) =>
    n.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  return (
    <article className="group bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8E2D4]">
      <div className="relative h-52 bg-[#E8E2D4] overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#5E6644] text-[#F4F0E8] text-xs font-bold px-2.5 py-1 rounded-full tracking-wide">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.innerHTML +=
              '<div class="absolute inset-0 flex items-center justify-center text-6xl">🥜</div>';
          }}
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-black text-[#2C2E22] text-sm leading-tight tracking-wide mb-1">
          {product.name}
        </h3>

        <p className="text-xs text-[#2C2E22]/50 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Selector de gramaje */}
        {hasVariants ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.variants.map((v, i) => (
              <button
                key={v.weight}
                onClick={() => setSelectedIdx(i)}
                className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                  selectedIdx === i
                    ? "bg-[#5E6644] text-[#F4F0E8] border-[#5E6644]"
                    : "bg-white text-[#5E6644] border-[#5E6644]/30 hover:border-[#5E6644]"
                }`}
              >
                {v.weight}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-3">
            <span className="text-xs text-[#5E6644]/60 bg-[#F4F0E8] border border-[#E8E2D4] px-2.5 py-1 rounded-lg font-medium">
              {selected.weight}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-black text-[#5E6644]">
            {formatPrice(selected.price)}
          </span>
          <button
            onClick={() => addItem(product, selected)}
            className="bg-[#5E6644] hover:bg-[#464E30] active:scale-95 text-[#F4F0E8] text-xs font-black px-4 py-2 rounded-xl transition-all tracking-wider uppercase"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
