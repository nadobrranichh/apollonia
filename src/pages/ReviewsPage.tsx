import { Box, Typography } from "@mui/material";
import { pageTitleStyle } from "../styles/typographyStyles";
import ActiveReviewContextProvider from "../store/active-review-context";
import ReviewsContent from "../components/ReviewsContent";

export default function ReviewsPage() {
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
      <ActiveReviewContextProvider>
        <ReviewsContent />
      </ActiveReviewContextProvider>
    </Box>
  );
}
