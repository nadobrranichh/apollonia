import { Box, Button, Typography } from "@mui/material";
import ImageBox from "../ImageBox";
import LogoImg from "/favicon.png";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        padding: "7rem 1.5rem 3rem",
      }}
    >
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
        variant="h3"
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

      <Button
        sx={{ display: "block", marginBottom: "0.5rem" }}
        variant="contained"
      >
        Browse treatments
      </Button>
      <Button sx={{ display: "block" }} variant="outlined">
        Visit us
      </Button>
    </Box>
  );
}
