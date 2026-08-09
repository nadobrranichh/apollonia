import { Box, Typography, Card } from "@mui/material";
import ImageBox from "../ImageBox";
import FounderImg from "../../assets/IMG_2780-s.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function FounderQuoteSection() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <ImageBox
        src={FounderImg}
        sx={{
          borderRadius: "2rem",
          width: "90%",
          boxShadow: (theme) => `0px 0px 2rem ${theme.palette.grey[500]}`,
        }}
      />
      <Card
        sx={{
          position: "relative",
          width: "90%",
          rotate: "-1deg",
          padding: "2rem",
          borderRadius: "1.5rem",
          bgcolor: "background.default",
          boxShadow: (theme) => `0px 0px 2rem ${theme.palette.grey[500]}`,
          overflow: "visible",
        }}
      >
        <FormatQuoteIcon
          sx={{
            color: "secondary.main",
            position: "absolute",
            transform: "translate(-1rem, -3.5rem)",
            fontSize: "3.3rem",
            opacity: "70%",
          }}
        />
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", marginBottom: "1rem" }}
        >
          I trained on patients who could feel everything. I wouldn't put a
          single client through that — so I built a protocol that doesn't ask
          them to.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            fontFamily: "Poppins, Arial",
            fontWeight: "bold",
          }}
        >
          Nataliia Shchepaniak
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins, Arial",
            color: (theme) => theme.palette.grey[600],
          }}
        >
          Founder, Lead Hygienist
        </Typography>
      </Card>
    </Box>
  );
}
