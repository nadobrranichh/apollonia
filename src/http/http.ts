import { QueryClient } from "@tanstack/react-query";
import { axiosAPI } from "./axios";
import type { ProductType, ReviewType } from "../types";
import type { CartItem } from "../store/cart-store";
import type { FormValues } from "../types/checkout";

export const queryClient = new QueryClient();

export async function fetchReviews(): Promise<ReviewType[]> {
  const { data } = await axiosAPI.get<ReviewType[]>("/get-reviews");

  return data;
}

export async function fetchProducts(): Promise<ProductType[]> {
  const { data } = await axiosAPI.get<ProductType[]>("/get-products");

  return data;
}

export async function submitCheckoutForm({
  formData,
  cart,
}: {
  formData: FormValues;
  cart: CartItem[];
}) {
  const { data } = await axiosAPI.post("/create-checkout-session", {
    formData,
    cart: cart.map(({ id, quantity }) => ({ id, quantity })),
  });

  return data.url;
}
