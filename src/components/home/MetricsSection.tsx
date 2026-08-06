import { Box, Typography } from "@mui/material";
import { metricsList } from "../../lists/metricsList";

export default function MetricsSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridtemplaterows: "1fr 1fr",
        gap: "1px",
        backgroundColor: (theme) => theme.palette.grey[300],
        border: (theme) => `1px solid ${theme.palette.grey[300]}`,
        marginBottom: "3.5rem",
      }}
    >
      {metricsList.map((m) => (
        <Box sx={{ padding: "2rem", backgroundColor: "background.default" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: "0.5rem",
              fontStyle: "normal",
            }}
          >
            {m.title}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
            {m.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
