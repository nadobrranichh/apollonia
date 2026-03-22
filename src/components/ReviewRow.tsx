import { Box } from "@mui/material";
import type { ReviewType } from "../types/reviewType";
import Review from "./Review";
import { useEffect, useRef } from "react";

const ROW_POSITION_SHIFT = 0.2;

export default function ReviewRow({
  reviews,
  reverse,
}: {
  reviews: ReviewType[];
  reverse?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    let frame: number;
    let direction = reverse ? "left" : "right";
    let position = reverse ? el.scrollWidth - el.clientWidth : 0;

    const scroll = () => {
      if (direction === "right") {
        position += ROW_POSITION_SHIFT;
        if (position >= el.scrollWidth - el.clientWidth) {
          direction = "left";
        }
      } else {
        position -= ROW_POSITION_SHIFT;
        if (position <= 0) {
          direction = "right";
        }
      }

      el.scrollLeft = position;
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Box
      ref={rowRef}
      sx={{
        width: "100%",
        display: "flex",
        gap: 3,
        overflowX: "auto",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
      }}
    >
      {reviews.map((r, i) => (
        <Review reviewData={r} key={i} />
      ))}
    </Box>
  );
}
