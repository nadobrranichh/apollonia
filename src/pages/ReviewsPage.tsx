import { Box, Typography } from "@mui/material";
import { pageTitleStyle } from "../styles/typographyStyles";

export default function ReviewsPage() {
  return (
    <Box
      component="main"
      sx={{ bgcolor: "secondary.light", backgroundImage: "none" }}
    >
      <Typography sx={{ ...pageTitleStyle, color: "black" }}>
        Reviews
      </Typography>
    </Box>
  );
}
