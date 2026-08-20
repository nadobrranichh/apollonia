import { Box, Stack, Typography } from "@mui/material";
import { servicesList } from "../lists/servicesList";
import Service from "../components/services/Service";
import GemService from "../components/services/GemService";
import { captionStyles, descriptionStyles } from "../styles/typographyStyles";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import type { StandardServiceItem } from "../types/listsTypes";
import MotionButton from "../motion/components/MotionButton";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const headingVariant = useResponsiveHeadingVariant();
  const smallHeadingVariant = useResponsiveHeadingVariant("small");
  const { t } = useTranslation();

  return (
    <SectionBox component="main">
      <Typography variant={headingVariant}>{t("services.title")}</Typography>
      <Typography sx={{ marginBottom: "2rem" }}>
        {t("services.subtitle")}
      </Typography>
      <Stack spacing={3} sx={{ marginBottom: "2rem", alignItems: "center" }}>
        {servicesList.map((s) => {
          return s.type === "standard" ? (
            <Service item={s as StandardServiceItem} key={s.id} />
          ) : (
            <GemService key={s.id} />
          );
        })}
      </Stack>

      <SectionBox>
        <Stack spacing={2} sx={{ textAlign: "center", paddingY: "3rem" }}>
          <Typography sx={captionStyles}>
            {t("services.cta.eyebrowLabel")}
          </Typography>
          <Typography variant={smallHeadingVariant}>
            {t("services.cta.title")}
          </Typography>
          <Typography sx={descriptionStyles}>
            {t("services.cta.subtitle")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <MotionButton variant="contained">
              {t("services.cta.buttons.sms")}
            </MotionButton>
            <MotionButton variant="outlined">
              {t("services.cta.buttons.dm")}
            </MotionButton>
          </Box>
        </Stack>
      </SectionBox>
    </SectionBox>
  );
}
