"use client";

import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import type { Product } from "@/app/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

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
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-black text-[#2C2E22] text-sm leading-tight tracking-wide">
            {product.name}
          </h3>
          <span className="text-xs text-[#5E6644]/60 whitespace-nowrap bg-[#F4F0E8] px-2 py-0.5 rounded-full border border-[#E8E2D4] flex-shrink-0">
            {product.weight}
          </span>
        </div>

        <p className="text-xs text-[#2C2E22]/60 leading-relaxed flex-1 mt-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-black text-[#5E6644]">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="bg-[#5E6644] hover:bg-[#464E30] active:scale-95 text-[#F4F0E8] text-xs font-black px-4 py-2 rounded-xl transition-all tracking-wider uppercase"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
