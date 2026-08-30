import { Box, Link, Stack, Typography } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import TreatmentCard from "../components/TreatmentCard";
import MethodAndQuoteSection from "../components/home/MethodAndQuoteSection";
import { Link as RouterLink } from "react-router-dom";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import ReviewsSection from "../components/home/ReviewsSection";
import MotionButton from "../motion/components/MotionButton";
import { useTranslation } from "react-i18next";
import type { TreatmentCardProps } from "../types";
import { treatmentsAssets, accesoriesAssets } from "../lists/treatmentsAssets";

export default function HomePage() {
  const headingVariant = useResponsiveHeadingVariant();
  const smallHeadingVariant = useResponsiveHeadingVariant("small");
  const { t } = useTranslation();

  const treatments = t("home.treatments.cards", {
    returnObjects: true,
  }) as TreatmentCardProps[];
  const accessories = t("home.accesories.cards", {
    returnObjects: true,
  }) as TreatmentCardProps[];

  return (
    <Box component="main">
      <Stack
        spacing={{ xs: 10, md: 16 }}
        sx={{ paddingY: "7rem", overflow: "hidden" }}
      >
        <HeroSection />
        <MethodAndQuoteSection />

        {/* signature treatments section */}
        <SectionBox>
          <Typography variant={headingVariant} sx={{ marginBottom: "0.5rem" }}>
            {t("home.treatments.title1")}{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              {t("home.treatments.titleSpan")}
            </Box>{" "}
            {t("home.treatments.title2")}
          </Typography>
          <Typography
            sx={{
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            {t("home.treatments.subtitle")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr 1fr" },
              gap: "2rem",
              placeItems: "center",
            }}
          >
            {treatments.map((t, i) => (
              <TreatmentCard
                key={i}
                imageSrc={treatmentsAssets[i].imageSrc}
                title={t.title}
                description={t.description}
                price={t.price}
                time={t.time}
              />
            ))}
          </Box>
        </SectionBox>

        {/* dental accesories section */}
        <SectionBox id="accesories">
          <Typography variant={headingVariant} sx={{ marginBottom: "0.5rem" }}>
            {t("home.accesories.title")}{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              {t("home.accesories.titleSpan")}
            </Box>
          </Typography>
          <Typography
            sx={{
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            {t("home.accesories.subtitle")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr 1fr" },
              gap: "2rem",
              placeItems: "center",
            }}
          >
            {accessories.map((a, i) => (
              <TreatmentCard
                key={i}
                imageSrc={accesoriesAssets[i].imageSrc}
                title={a.title}
                description={a.description}
                price={a.price}
              />
            ))}
          </Box>
        </SectionBox>

        <ReviewsSection />

        <SectionBox>
          <Stack spacing={3} sx={{ alignItems: "center" }}>
            <Typography variant={smallHeadingVariant}>
              {t("home.cta.title")}
            </Typography>
            <Typography sx={{ marginBottom: "1rem", textAlign: "center" }}>
              {t("home.cta.subtitle1")}{" "}
              <Link
                component={RouterLink}
                to="/visit"
                sx={{
                  color: "secondary.main",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {t("home.cta.addressSpan")}
              </Link>{" "}
              {t("home.cta.subtitle2")}.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <MotionButton
                variant="contained"
                component={RouterLink}
                to="/visit"
              >
                {t("home.cta.buttons.map")}
              </MotionButton>
              <MotionButton
                variant="outlined"
                component={RouterLink}
                to="/visit#directions"
              >
                {t("home.cta.buttons.directions")}
              </MotionButton>
            </Stack>
          </Stack>
        </SectionBox>
      </Stack>
    </Box>
  );
}
