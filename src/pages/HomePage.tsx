import { Box, Typography } from "@mui/material";
import VerticalHeroImg1 from "../assets/IMG_2780-s.jpg";
import VerticalHeroImg2 from "../assets/IMG_2779-s.jpg";
import HorizontalHeroImg from "../assets/IMG_2777-s.jpg";
import ImageBox from "../components/ImageBox";

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{ padding: "6% 0", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: "55%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            boxSizing: "border-box",
            alignItems: "start",
            gap: 2.5,
          }}
        >
          <ImageBox
            src={VerticalHeroImg1}
            sx={{
              height: "15rem",
              objectFit: "cover",
              borderRadius: "1.25rem",
            }}
          />
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "end",
              marginTop: "0.5rem",
              color: "primary.contrastText",
            }}
          >
            Nataliia is an experienced dental hygienist (6 years), recognized
            for her groundbreaking invention, the painless teeth whitening
            method known as “Apollonia.”
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            boxSizing: "border-box",
            gap: 2.5,
            alignItems: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "start",
              marginTop: "1.5rem",
              color: "primary.contrastText",
            }}
          >
            Originally from Ukraine and educated in Canada, she is committed to
            making every dental procedure a comfortable and relaxing experience
            for her clients.
          </Typography>
          <ImageBox
            src={VerticalHeroImg2}
            sx={{
              transform: "translateY(-40%)",
              height: "15rem",
              objectFit: "cover",
              justifySelf: "end",
              borderRadius: "1.25rem",
            }}
          />
        </Box>
        <ImageBox
          src={HorizontalHeroImg}
          width="100%"
          sx={{ marginTop: "-5rem", borderRadius: "2.5rem" }}
        />
      </Box>
    </Box>
  );
}
