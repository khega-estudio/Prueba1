"use client";

import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { itemCount, openCart } = useCartStore();
  const count = itemCount();

  return (
    <header className="sticky top-0 z-40 bg-[#5E6644] shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-widest text-[#F4F0E8] uppercase">
            FRÖDO
          </span>
          <span className="hidden sm:block text-xs font-medium text-[#F4F0E8]/60 border-l border-[#F4F0E8]/30 pl-3 tracking-wider">
            La Plata
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F4F0E8]/80">
          <Link href="/#productos" className="hover:text-[#F4F0E8] transition-colors tracking-wide">
            Productos
          </Link>
          <Link href="/#nosotros" className="hover:text-[#F4F0E8] transition-colors tracking-wide">
            Nosotros
          </Link>
          <Link href="/#contacto" className="hover:text-[#F4F0E8] transition-colors tracking-wide">
            Contacto
          </Link>
        </nav>

        <button
          onClick={openCart}
          className="relative p-2 rounded-full hover:bg-[#F4F0E8]/10 transition-colors"
          aria-label="Abrir carrito"
        >
          <ShoppingCartIcon className="w-6 h-6 text-[#F4F0E8]" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#F4F0E8] text-[#5E6644] text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
