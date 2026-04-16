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

export async function fetchSessionStatus(sessionId: string) {
  const { data } = await axiosAPI.get("/session-status", {
    params: {
      sessionId,
    },
  });
  return data.status;
}

// if the user is not in Canada, sends the CAD-USD conversion rate back.
// if they are (or if the apiip hits its api calls limit),
// returns 1 so the prices will be shown in CAD
export async function configureConversionRate() {
  try {
    const { data: countryData } = await axiosAPI.get(
      `https://apiip.net/api/check?accessKey=${import.meta.env.VITE_APIIP_ACCESS_KEY}`,
    );
    if (countryData.countryCode !== "CA") {
      const {
        data: { rate },
      } = await axiosAPI.get<{ rate: number }>(
        "https://api.frankfurter.dev/v2/rate/CAD/USD",
      );
      return { rate, currency: "USD" };
    }
    return { rate: 1, currency: "CAD" };
  } catch {
    return { rate: 1, currency: "CAD" };
  }
}
