import { createContext, useState, type ReactNode } from "react";
import type { ReviewType } from "../types";

export const ActiveReviewContext = createContext<{
  reviewData: ReviewType | null;
  setReviewData: (review: ReviewType | null) => void;
}>({
  reviewData: null,
  setReviewData: () => {},
});

export default function ActiveReviewContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reviewData, setReviewData] = useState<ReviewType | null>(null);
  const ctxValue = {
    reviewData,
    setReviewData,
  };

  return (
    <ActiveReviewContext.Provider value={ctxValue}>
      {children}
    </ActiveReviewContext.Provider>
  );
}
