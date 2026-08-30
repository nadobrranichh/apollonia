import { Box, IconButton, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useRef, useState } from "react";
import { reviewsList } from "../../lists/reviewsList";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { SectionBox } from "../SectionBox";
import { useTranslation } from "react-i18next";

export default function ReviewsSection() {
  const { t } = useTranslation();
  const [activeReviewId, setActiveReviewId] = useState(1);
  const [containerHeight, setContainerHeight] = useState(0);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  const activeReviewIndex = reviewsList.findIndex(
    (review) => review.id === activeReviewId,
  );

  useEffect(() => {
    const review = reviewsContainerRef.current?.children[activeReviewIndex];
    if (!review) return;
    setContainerHeight(review.scrollHeight);
  }, [activeReviewIndex]);

  function handleChangeActiveReview(diff: number) {
    setActiveReviewId((prev) => {
      const newId = prev + diff;
      if (newId > reviewsList.length) return 1;
      else if (newId < 1) return reviewsList.length;
      return newId;
    });
  }

  return (
    <SectionBox component="section">
      <Typography variant="h3">{t("home.reviews.title")}</Typography>
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: { xs: "space-between", lg: "space-evenly" },
          height: `${containerHeight}px`,
        }}
      >
        <IconButton
          sx={{ alignSelf: "center", zIndex: 1 }}
          onClick={() => handleChangeActiveReview(-1)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          ref={reviewsContainerRef}
          sx={{
            width: "100%",
            position: "relative",
            height: "100%",
            overflow: "hidden",
            maxWidth: "55rem",
            // paddingY: "1rem",
          }}
        >
          {reviewsList.map((r) => (
            <Box
              key={r.id}
              sx={{
                textAlign: "center",
                position: "absolute",
                transform: `translateX(${(r.id - activeReviewId) * 100}%)`,
                transition: "all 0.3s ease",
                width: "100%",
              }}
            >
              <Box>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#c7a200" }} />
                ))}
              </Box>
              <FormatQuoteIcon
                sx={{ color: "secondary.main", fontSize: "3.3rem" }}
              />
              <Typography sx={{ marginBottom: "1.5rem" }}>
                "{r.text}"
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins, Arial",
                  color: (theme) => theme.palette.grey[600],
                }}
              >
                {r.author} &middot; {r.rating}-star review, Google Maps
              </Typography>
            </Box>
          ))}
        </Box>
        <IconButton
          sx={{ alignSelf: "center", zIndex: 1 }}
          onClick={() => handleChangeActiveReview(1)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </SectionBox>
  );
}
