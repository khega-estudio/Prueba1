"use client";

import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import type { Product } from "@/app/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  const formatPrice = (n: number) =>
    n.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  return (
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-52 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
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
          <h3 className="font-bold text-gray-800 text-sm leading-tight">
            {product.name}
          </h3>
          <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-50 px-2 py-0.5 rounded-full">
            {product.weight}
          </span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed flex-1 mt-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-black text-orange-500">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-orange-200"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
