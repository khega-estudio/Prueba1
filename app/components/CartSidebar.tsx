"use client";

import { useCartStore } from "@/app/store/cartStore";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } =
    useCartStore();
  const router = useRouter();

  const formatPrice = (n: number) =>
    n.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#F4F0E8] z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#E8E2D4] bg-[#5E6644]">
          <h2 className="text-base font-black tracking-widest text-[#F4F0E8] uppercase">
            Tu pedido
          </h2>
          <button
            onClick={closeCart}
            className="p-1 rounded-full hover:bg-[#F4F0E8]/10 transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-[#F4F0E8]" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-[#5E6644]/40 p-8">
            <span className="text-5xl">🥜</span>
            <p className="text-sm">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <li key={item.cartId} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-[#E8E2D4]">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#E8E2D4] flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/placeholder.png";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#2C2E22] leading-tight truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#5E6644]/60 font-medium">{item.weight}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-[#E8E2D4] hover:bg-[#5E6644] hover:text-white text-[#2C2E22] font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-[#E8E2D4] hover:bg-[#5E6644] hover:text-white text-[#2C2E22] font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.cartId)}
                      className="text-[#5E6644]/30 hover:text-red-400 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-black text-[#5E6644]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#E8E2D4] p-4 space-y-4 bg-white">
              <div className="flex justify-between text-sm font-semibold text-[#2C2E22]">
                <span>Subtotal</span>
                <span className="text-[#5E6644] text-base font-black">
                  {formatPrice(total())}
                </span>
              </div>
              <p className="text-xs text-[#5E6644]/50 text-center">
                Envío calculado en el checkout
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#5E6644] hover:bg-[#464E30] text-[#F4F0E8] font-black py-3 rounded-xl transition-colors tracking-wider uppercase text-sm"
              >
                Finalizar pedido →
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
