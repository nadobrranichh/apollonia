import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import type { ServiceItem } from "../../types/listsTypes";
import ServicePriceContainer from "./ServicePriceContainer";
import { serviceStyles, serviceTitleStyles } from "../../styles/servicesStyles";
import { useTranslation } from "react-i18next";

export default function Service({ item }: { item: ServiceItem }) {
  const { t, i18n } = useTranslation();
  const { i18nKey, price, image, imageStyles } = item;
  const priceCommentExists = i18n.exists(`${i18nKey}.priceComment`);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const message = `Hello! I'd like to book an appointment for ${t(`${i18nKey}.title`)}`;
  return (
    <Box sx={{ ...serviceStyles, position: image ? "relative" : "static" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "3rem",
          height: { md: "4.5rem" },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            ...serviceTitleStyles,
            marginLeft: { xs: "0.7rem", md: "1.25rem" },
            width: { xs: "63%", md: "70%" },
            maxWidth: "400px",
          }}
        >
          {t(`${i18nKey}.title`)}
        </Typography>

        <ServicePriceContainer
          price={price}
          comment={
            priceCommentExists ? t(`${i18nKey}.priceComment`) : undefined
          }
        />

        {image && (
          <Box component="img" src={image} sx={imageStyles || null}></Box>
        )}
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          mx: "0.7rem",
          fontSize: { xs: "0.8rem", md: "0.9rem" },
        }}
      >
        {t(`${i18nKey}.description`)}
      </Typography>
      <Button
        variant="contained"
        sx={{
          my: "1rem",
          textTransform: "uppercase",
        }}
        href={
          isMobile
            ? `sms:+16475141552?body=${encodeURIComponent(message)}`
            : "https://www.instagram.com/apollonia_whitening"
        }
      >
        {t("services.bookService")}
      </Button>
    </Box>
  );
}
