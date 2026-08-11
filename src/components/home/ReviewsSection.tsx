import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../http/http";
import { Box, IconButton, Typography } from "@mui/material";
import { type ReviewType } from "../../types";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function ReviewsSection() {
  const {
    data: reviews,
    // TODO: loading / error states for these reviews!
    // isLoading,
    // error,
    // isError,
  } = useQuery<ReviewType[]>({
    queryFn: fetchReviews,
    queryKey: ["reviews"],
  });

  const [activeReviewId, setActiveReviewId] = useState(1);

  function handleChangeActiveReview(diff: number) {
    if (!reviews) return;
    setActiveReviewId((prev) => {
      const newId = prev + diff;
      if (newId > reviews.length) return 1;
      else if (newId < 1) return reviews.length;
      return newId;
    });
  }

  return (
    <Box component="section" sx={{ paddingX: "1.5rem" }}>
      <Typography variant="h3">What our customers say</Typography>
      {reviews && (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            sx={{ alignSelf: "center", position: "relative", zIndex: 1 }}
            onClick={() => handleChangeActiveReview(-1)}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box
            sx={{
              width: "75%",
              position: "relative",
              height: "29rem",
              overflow: "hidden",
            }}
          >
            {reviews.map((r) => (
              <Box
                sx={{
                  textAlign: "center",
                  paddingY: "1rem",
                  position: "absolute",
                  transform: `translateX(${(r.id - activeReviewId) * 100}%)`,
                  transition: "all 0.3s ease",
                }}
              >
                <Box>
                  {Array.from({ length: r.rating }).map(() => (
                    <StarIcon sx={{ color: "#c7a200" }} />
                  ))}
                </Box>
                <FormatQuoteIcon
                  sx={{ color: "secondary.main", fontSize: "3.3rem" }}
                />
                <Typography sx={{ marginBottom: "1.5rem" }}>
                  "{r.description.slice(0, 200).trim()}"
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins, Arial",
                    color: (theme) => theme.palette.grey[600],
                  }}
                >
                  {r.author_name} &middot; {r.rating}-star review, Google Maps
                </Typography>
              </Box>
            ))}
          </Box>
          <IconButton
            sx={{ alignSelf: "center", position: "relative", zIndex: 1 }}
            onClick={() => handleChangeActiveReview(1)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
