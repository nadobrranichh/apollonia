import { Box, Typography } from "@mui/material";
import ImageBox from "../ImageBox";
import LogoImg from "/favicon.png";
import { SectionBox } from "../SectionBox";
import { useResponsiveHeadingVariant } from "../../hooks/useResponsiveHeadingVariant";
import { Link as RouterLink } from "react-router-dom";
import MotionButton from "../../motion/components/MotionButton";
import { fade } from "../../motion/variants";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const mainHeadingVariant = useResponsiveHeadingVariant("main");
  const metricsHeadingVariant = useResponsiveHeadingVariant();
  const { t } = useTranslation();

  const metricsList = t("home.metrics", { returnObjects: true }) as {
    number: string;
    description: string;
  }[];
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
        {t("home.hero.title1")}{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          {t("home.hero.titleSpan1")}
        </Box>{" "}
        {t("home.hero.title2")}{" "}
        <Box component="span" sx={{ color: "secondary.main" }}>
          {t("home.hero.titleSpan2")}
        </Box>{" "}
        {t("home.hero.title3")}
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
          {t("home.hero.subtitle")}
        </Typography>
        <Box></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: "0.5rem",
          }}
        >
          <MotionButton
            variants={fade({ yStart: 10 })}
            component={RouterLink}
            to="/services"
            variant="contained"
          >
            {t("home.hero.buttons.browse")}
          </MotionButton>
          <MotionButton
            variants={fade({ yStart: 10 })}
            component={RouterLink}
            to="/visit"
            variant="outlined"
          >
            {t("home.hero.buttons.visit")}
          </MotionButton>
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
            key={m.number}
            sx={{ padding: "2rem", backgroundColor: "background.default" }}
          >
            <Typography
              variant={metricsHeadingVariant}
              sx={{ fontStyle: "normal" }}
            >
              {m.number}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
              {m.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionBox>
  );
}
