import { Box, Typography, Button } from "@mui/material";
import { methodStepsList } from "../../lists/methodStepsList";

export default function MethodSection() {
  return (
    <Box component="section" sx={{ padding: "4rem 1.5rem" }}>
      <Typography variant="h3">
        Whitening without the{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          flinch
        </Box>
        .
      </Typography>
      <Typography>
        Most whitening relies on high-strength peroxide. Ours pairs red-light
        therapy with gum sealantsand hydroxyapatite to brighten teeth with
        minimal sensitivity. <br />
        <Box component="span" sx={{ color: "secondary.main" }}>
          Here's how it works:
        </Box>
      </Typography>

      <Box
        sx={{
          marginBottom: "2rem",
          borderTop: (theme) => `1px solid ${theme.palette.grey[300]}`,
          borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
          "> :not(:last-child)": {
            borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
          },
        }}
      >
        {methodStepsList.map((step) => (
          <Box
            key={step.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "background.default",
              paddingY: "0.5rem",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "secondary.main",
                  display: "inline",
                  marginRight: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                {step.id}.
              </Typography>
              <Typography variant="body2" sx={{ display: "inline" }}>
                {step.content}
              </Typography>
            </Box>

            <Typography
              sx={{
                textTransform: "uppercase",
                fontFamily: "Poppins, Arial",
                alignSelf: "end",
                color: (theme) => theme.palette.grey[500],
              }}
              variant="body2"
            >
              {step.time}
            </Typography>
          </Box>
        ))}
      </Box>
      <Button variant="outlined">Read the full method</Button>
    </Box>
  );
}
