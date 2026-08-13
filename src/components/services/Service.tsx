import { Box, Typography, Button, useMediaQuery, Card } from "@mui/material";
import type { ServiceItem } from "../../types/listsTypes";
import { useTranslation } from "react-i18next";
import ImageBox from "../ImageBox";
import {
  descriptionStyles,
  captionStyles,
  servicePriceStyles,
} from "../../styles/typographyStyles";

export default function Service({ item }: { item: ServiceItem }) {
  const { t, i18n } = useTranslation();
  const { i18nKey, price, image, imageStyles } = item;
  const priceCommentExists = i18n.exists(`${i18nKey}.priceComment`);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const message = `Hello! I'd like to book an appointment for ${t(`${i18nKey}.title`)}`;
  return (
    <Card sx={{ maxWidth: "30rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {t(`${i18nKey}.title`)}
        </Typography>
        <Box sx={{ flexShrink: 0, marginLeft: "0.5rem" }}>
          <Typography sx={servicePriceStyles}>${price}</Typography>
          {priceCommentExists && (
            <Typography sx={captionStyles}>
              {t(`${i18nKey}.priceComment`)}
            </Typography>
          )}
        </Box>
        {image && <ImageBox src={image} sx={imageStyles} />}
      </Box>
      <Typography
        variant="body2"
        sx={{ ...descriptionStyles, marginBottom: "0.5rem" }}
      >
        {t(`${i18nKey}.description`)}
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        href={
          isMobile
            ? `sms:+16475141552?body=${encodeURIComponent(message)}`
            : "https://www.instagram.com/apollonia_whitening"
        }
      >
        {t("services.bookService")}
      </Button>
    </Card>
  );
}
