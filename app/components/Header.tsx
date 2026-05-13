"use client";

import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { itemCount, openCart } = useCartStore();
  const count = itemCount();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-orange-500">
            FRODO
          </span>
          <span className="hidden sm:block text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
            Pastas Artesanales
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#productos" className="hover:text-orange-500 transition-colors">
            Productos
          </Link>
          <Link href="/#nosotros" className="hover:text-orange-500 transition-colors">
            Nosotros
          </Link>
          <Link href="/#contacto" className="hover:text-orange-500 transition-colors">
            Contacto
          </Link>
        </nav>

        <button
          onClick={openCart}
          className="relative p-2 rounded-full hover:bg-orange-50 transition-colors"
          aria-label="Abrir carrito"
        >
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
