"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductVariant } from "@/app/lib/products";

export type CartItem = {
  cartId: string; // `${product.id}-${variant.weight}`
  productId: string;
  name: string;
  weight: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, variant: ProductVariant) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  itemCount: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, variant) => {
        const cartId = `${product.id}-${variant.weight}`;
        const existing = get().items.find((i) => i.cartId === cartId);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                cartId,
                productId: product.id,
                name: product.name,
                weight: variant.weight,
                price: variant.price,
                image: product.image,
                quantity: 1,
              },
            ],
            isOpen: true,
          });
        }
      },

      removeItem: (cartId) =>
        set({ items: get().items.filter((i) => i.cartId !== cartId) }),

      updateQuantity: (cartId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(cartId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.cartId === cartId ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      itemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "frodo-cart" }
  )
);
