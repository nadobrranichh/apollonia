import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductType } from "../types";

type CartItem = ProductType & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addItem: (item: ProductType, quantity: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (item, quantity) =>
        set((state) => ({
          cart: [...state.cart, { ...item, quantity }],
        })),
      removeItem: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== id),
        })),
      updateQuantity(id, quantity) {
        set((state) => {
          if (quantity === 0)
            return { cart: state.cart.filter((i) => i.id !== id) };

          const item = state.cart.find((i) => i.id === id);
          if (!item || item.max_quantity < quantity) return state;

          return {
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, quantity } : item,
            ),
          };
        });
      },
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart" },
  ),
);
