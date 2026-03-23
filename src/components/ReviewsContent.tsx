import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { fetchReviews } from "../http/http";
import { Box } from "@mui/material";
import { ActiveReviewContext } from "../store/active-review-context";
import ReviewRow from "./ReviewRow";
import Review from "./Review";
import LoadingBlock from "./LoadingBlock";
import ErrorBlock from "./ErrorBlock";

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
            gap: "1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {activeReviewContext.reviewData ? (
            <Review reviewData={activeReviewContext.reviewData} absolute />
          ) : null}

          <ReviewRow reverse reviews={reviews} />
          <ReviewRow reviews={reviews} />
        </Box>
      )}
      {isLoading && <LoadingBlock title="Loading reviews" height="40vh" />}
      {isError && <ErrorBlock message={error.message} height="40vh" />}
    </>
  );
}
