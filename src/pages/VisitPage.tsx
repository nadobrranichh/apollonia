import { Box, Typography, Link, type Theme, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import { captionStyles } from "../styles/typographyStyles";
import { MotionBox } from "../motion/components";
import { fade } from "../motion/variants";
import MotionStack from "../motion/components/MotionStack";
import MotionButton from "../motion/components/MotionButton";
import { useTranslation } from "react-i18next";

const directions = [
  { id: 1, key: "subway" },
  { id: 2, key: "parking" },
  { id: 3, key: "bike" },
];

const weeklyHours = [
  { id: 1, key: "monWed" },
  { id: 2, key: "thuFri" },
  { id: 3, key: "sat" },
  { id: 4, key: "sun" },
];

const subtextStyles = {
  fontSize: "0.7rem",
  textTransform: "uppercase",
  color: (theme: Theme) => theme.palette.grey[500],
  fontFamily: "Poppins, Arial",
};

export default function LocationPage() {
  const { t } = useTranslation();
  const headingVariant = useResponsiveHeadingVariant();

  return (
    <SectionBox component="main">
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant={headingVariant}>{t("visit.title")}</Typography>
        <Typography>{t("visit.subtitle")}</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: { xs: "2rem", md: "4rem" },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.1156222969039!2d-79.42507180000003!3d43.7009369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc3ae490fe4b65%3A0xc5ee99956777f13e!2sApollonia%20Preventative%20Dental%20Care!5e0!3m2!1sen!2sua!4v1744016825863!5m2!1sen!2sua"
          style={{
            border: "none",
            height: "100%",
            width: "100%",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-embed"
        ></iframe>
        <MotionStack spacing={4} variants={fade({ withStagger: true })}>
          <MotionBox
            variants={fade()}
            id="directions"
            sx={{
              scrollMarginTop: "8.5rem",
              display: "flex",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Typography variant="body2" sx={subtextStyles}>
                {t("visit.contact.address.label")}
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                {t("visit.contact.address.value1")}
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                {t("visit.contact.address.value2")}
              </Typography>
              <Link
                component={RouterLink}
                sx={{ ...captionStyles, color: "secondary.main" }}
                to="https://maps.app.goo.gl/ZMySaD6bfVxsA8gp9"
              >
                {t("visit.contact.address.mapsLink")}
              </Link>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography variant="body2" sx={subtextStyles}>
                {t("visit.contact.reachOut")}
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                +1 647 514 1552
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                @apollonia_whitening
              </Typography>
            </Box>
          </MotionBox>
          <MotionBox variants={fade({ withStagger: true })}>
            <Typography variant="body2" sx={subtextStyles}>
              {t("visit.gettingHere.label")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: "0.5rem",
              }}
            >
              {directions.map((d) => (
                <Box key={d.id}>
                  <Typography variant="body2">
                    {t(`visit.gettingHere.${d.key}.label`)}
                  </Typography>
                  <Typography sx={captionStyles}>
                    {t(`visit.gettingHere.${d.key}.description`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
          <MotionBox variants={fade({ withStagger: true })}>
            <Typography variant="body2" sx={subtextStyles}>
              {t("visit.weeklyHours.label")}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4,1fr)" },
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              {weeklyHours.map((h) => (
                <Box key={h.id}>
                  <Typography sx={subtextStyles}>
                    {t(`visit.weeklyHours.${h.key}.label`)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ ...subtextStyles, color: "text.primary" }}
                  >
                    {t(`visit.weeklyHours.${h.key}.hours`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </MotionStack>
      </Box>
      <Stack spacing={2} sx={{ textAlign: "center", paddingY: "4rem" }}>
        <Typography sx={captionStyles}>
          {t("visit.sayHello.eyebrowText")}
        </Typography>
        <Typography variant="h4">{t("visit.sayHello.title")}</Typography>
        <Stack
          spacing={1}
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "center",
          }}
        >
          <MotionButton variant="contained">
            {t("visit.sayHello.buttons.dm")}
          </MotionButton>
          <MotionButton variant="outlined">
            {t("visit.sayHello.buttons.sms")}
          </MotionButton>
        </Stack>
      </Stack>
    </SectionBox>
  );
}
