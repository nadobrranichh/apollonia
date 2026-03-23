import { QueryClient } from "@tanstack/react-query";
import { axiosAPI } from "./axios";
import type { ReviewType } from "../types";

export const queryClient = new QueryClient();

export async function fetchReviews(): Promise<ReviewType[]> {
  const { data } = await axiosAPI.get<ReviewType[]>("/get-reviews");

  return data;
}
