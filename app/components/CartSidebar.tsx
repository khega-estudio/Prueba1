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
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Tu pedido</h2>
          <button
            onClick={closeCart}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400 p-8">
            <span className="text-5xl">🥜</span>
            <p className="text-sm">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-gray-50 p-4 space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 pt-3 first:pt-0">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-amber-50 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/placeholder.png";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 leading-tight truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400">{item.weight}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-bold text-orange-500">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 p-4 space-y-4">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span>Subtotal</span>
                <span className="text-orange-500 text-base">
                  {formatPrice(total())}
                </span>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Envío calculado en el checkout
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-200"
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
