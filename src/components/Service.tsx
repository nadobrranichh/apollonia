import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import type { ServiceItem } from "../types/listsTypes";
import ServicePriceContainer from "./ServicePriceContainer";
import { serviceStyles, serviceTitleStyles } from "../styles/servicesStyles";
import { theme } from "../theme/themeConfig";

export default function Service({ item }: { item: ServiceItem }) {
  const { title, description, price, priceComment, image, imageStyles } = item;

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const message = `Hello! I'd like to book an appointment for ${title}`;
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
          {title}
        </Typography>

        <ServicePriceContainer price={price} comment={priceComment} />

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
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          my: "1rem",
        }}
        href={
          isMobile
            ? `sms:+16475141552?body=${encodeURIComponent(message)}`
            : "https://www.instagram.com/apollonia_whitening"
        }
      >
        BOOK NOW
      </Button>
    </Box>
  );
}
