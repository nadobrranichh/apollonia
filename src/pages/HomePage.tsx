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
      <Box
        sx={{
          width: { xs: "85%", sm: "80%", md: "65%", lg: "45rem" },
          "* + *": {
            marginTop: { xs: "1rem", sm: "none" },
          },
        }}
      >
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
              height: { xs: "15rem", sm: "20rem" },
              objectFit: "cover",
              borderRadius: "1.25rem",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.3rem" },
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
              fontSize: { xs: "1rem", sm: "1.3rem" },
              textAlign: "start",
              marginTop: { xs: 0, md: "1.5rem" },
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
              transform: {
                xs: 0,
                md: "translateY(-25%)",
                lg: "translateY(-40%)",
              },
              height: { xs: "15rem", sm: "20rem" },
              objectFit: "cover",
              justifySelf: { xs: "auto", md: "end" },
              margin: 0,
              marginLeft: { xs: "auto", md: "none" },
              borderRadius: "1.25rem",
            }}
          />
        </Box>
        <ImageBox
          src={HorizontalHeroImg}
          width="100%"
          sx={{
            marginTop: { xs: "none", md: "-3rem", lg: "-6rem" },
            borderRadius: "2.5rem",
          }}
        />
      </Box>
    </Box>
  );
}
