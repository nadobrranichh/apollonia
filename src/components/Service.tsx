import { Box, Typography, Button } from "@mui/material";
import type { ServiceItem } from "../types/listsTypes";
import ServicePriceContainer from "./ServicePriceContainer";
import { serviceStyles, serviceTitleStyles } from "../styles/servicesStyles";

export default function Service({ item }: { item: ServiceItem }) {
  const { title, description, price, priceComment, image, imageStyles } = item;

  return (
    <Box sx={{ ...serviceStyles, position: image ? "relative" : "static" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4.5rem",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            ...serviceTitleStyles,
            marginLeft: "1.25rem",
            width: "70%",
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
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          my: "1rem",
        }}
        href="https://www.instagram.com/apollonia_whitening"
      >
        BOOK NOW
      </Button>
    </Box>
  );
}
