import { QueryClient } from "@tanstack/react-query";
import { axiosAPI } from "./axios";
import type { ProductType, ReviewType } from "../types";

export const queryClient = new QueryClient();

export async function fetchReviews(): Promise<ReviewType[]> {
  const { data } = await axiosAPI.get<ReviewType[]>("/get-reviews");

  return data;
}

export async function fetchProducts(): Promise<ProductType[]> {
  const { data } = await axiosAPI.get<ProductType[]>("/get-products");

  return data;
}
