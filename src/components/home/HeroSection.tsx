import { Box, Button, Typography } from "@mui/material";
import ImageBox from "../ImageBox";
import LogoImg from "/favicon.png";
import { SectionBox } from "../SectionBox";
import { useResponsiveHeadingVariant } from "../../hooks/useResponsiveHeadingVariant";
import { metricsList } from "../../lists/metricsList";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection() {
  const mainHeadingVariant = useResponsiveHeadingVariant("main");
  const metricsHeadingVariant = useResponsiveHeadingVariant();

  return (
    <SectionBox sx={{ position: "relative" }}>
      <ImageBox
        src={LogoImg}
        height="12rem"
        sx={{
          filter: "blur(5px)",
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(3rem, -1rem) rotate(-10deg)",
          zIndex: 0,
        }}
      />

      <Typography
        variant={mainHeadingVariant}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        A house of the{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          brighter
        </Box>{" "}
        &{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          braver
        </Box>{" "}
        smile.
      </Typography>
      <Box
        sx={{
          marginBottom: "3rem",
          display: { xs: "block", lg: "grid" },
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <Typography
          sx={{
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          Apollonia is a small Toronto practice devoted to painless teeth
          whitening and quiet, sensitivity‑conscious dentistry — invented by
          Nataliia, refined over six years, performed in a room the colour of a
          Roman dusk.
        </Typography>
        <Box></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: "0.5rem",
          }}
        >
          <Button component={RouterLink} to="/services" variant="contained">
            Browse treatments
          </Button>
          <Button component={RouterLink} to="/visit" variant="outlined">
            Visit us
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: "1px",
          backgroundColor: (theme) => theme.palette.grey[300],
          borderTop: (theme) => `1px solid ${theme.palette.grey[300]}`,
          borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
        }}
      >
        {metricsList.map((m) => (
          <Box
            key={m.title}
            sx={{ padding: "2rem", backgroundColor: "background.default" }}
          >
            <Typography
              variant={metricsHeadingVariant}
              sx={{ fontStyle: "normal" }}
            >
              {m.title}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
              {m.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionBox>
  );
}
