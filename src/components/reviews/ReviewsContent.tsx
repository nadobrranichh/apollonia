import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { fetchReviews } from "../../http/http";
import { Box } from "@mui/material";
import { ActiveReviewContext } from "../../store/active-review-context";
import ReviewRow from "./ReviewRow";
import Review from "./Review";
import LoadingBlock from "../LoadingBlock";
import ErrorBlock from "../ErrorBlock";

export default function ReviewsContent() {
  const activeReviewContext = useContext(ActiveReviewContext);
  const {
    data: reviews,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryFn: fetchReviews,
    queryKey: ["reviews"],
  });

  return (
    <>
      {reviews && (
        <Box
          sx={{
            overflow: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {activeReviewContext.reviewData ? (
            <Review reviewData={activeReviewContext.reviewData} absolute />
          ) : null}
          {/* box-shadow: inset 1rem 0 15px 0 white, inset -1rem 0 1rem 0 white; */}

          <ReviewRow reverse reviews={reviews} />
          <ReviewRow reviews={reviews} />
        </Box>
      )}
      {isLoading && <LoadingBlock i18nKey="reviews" height="40vh" />}
      {isError && <ErrorBlock message={error.message} height="40vh" />}
    </>
  );
}
