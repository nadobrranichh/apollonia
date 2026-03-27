import { Box, Typography, useMediaQuery } from "@mui/material";
import { pageTitleStyle } from "../styles/typographyStyles";
import ActiveReviewContextProvider from "../store/active-review-context";
import ReviewsContent from "../components/reviews/ReviewsContent";
import { theme } from "../theme/themeConfig";

export default function ReviewsPage() {
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      component="main"
      sx={{
        bgcolor: "secondary.light",
        backgroundImage: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: "3rem",
        gap: 2,
      }}
    >
      <Typography sx={{ ...pageTitleStyle, color: "black", margin: { lg: 0 } }}>
        Reviews
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", lg: "85%", xl: "70%" },
          paddingY: { xs: 0, lg: "3rem" },
        }}
      >
        {isLg && (
          <Box
            sx={(theme) => ({
              marginTop: "-3rem",
              position: "absolute",
              width: "100%",
              height: "100%",
              boxShadow: `inset 5rem 0 3rem 0 ${theme.palette.secondary.light}, 
                inset -5rem 0 3rem 0 ${theme.palette.secondary.light}`,
              pointerEvents: "none",
              zIndex: 1000,
            })}
          />
        )}
        <ActiveReviewContextProvider>
          <ReviewsContent />
        </ActiveReviewContextProvider>
      </Box>
    </Box>
  );
}
