import { Box, Typography } from "@mui/material";
import { pageTitleStyle } from "../styles/typographyStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../http/http";
import ReviewRow from "../components/ReviewRow";

export default function ReviewsPage() {
  const { data: reviews } = useQuery({
    queryFn: fetchReviews,
    queryKey: ["reviews"],
  });

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "secondary.light",
        backgroundImage: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 0",
        gap: 2,
      }}
    >
      <Typography sx={{ ...pageTitleStyle, color: "black" }}>
        Reviews
      </Typography>
      {reviews ? (
        <>
          <ReviewRow reverse reviews={reviews} />
          <ReviewRow reviews={reviews} />
        </>
      ) : (
        "loading..."
      )}
    </Box>
  );
}
