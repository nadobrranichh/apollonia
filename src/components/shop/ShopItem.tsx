import { useState } from "react";
import type { ProductType } from "../../types";
import { Box, Button, Card, Link, Skeleton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ImageBox from "../ImageBox";
import { servicePriceStyles } from "../../styles/typographyStyles";

export default function ShopItem({
  item,
  conversionRate,
}: {
  item: ProductType;
  conversionRate: { rate: number; currency: string };
}) {
  const { rate, currency } = conversionRate;
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  return (
    <Link
      component={RouterLink}
      to={`/shopitem/${item.id}`}
      sx={{ textDecoration: "none", height: "100%" }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Box
          sx={{
            margin: "-1.2rem -1.2rem 0.5rem",
            minWidth: "19rem",
            aspectRatio: "1 / 1",
            height: "22rem",
          }}
        >
          {showSkeleton && (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                width: "100%",
                height: "100%",
                "&::after": {
                  background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
                },
              }}
            />
          )}
          <ImageBox
            src={
              item.image_urls ? item.image_urls[0] : "https://picsum.photos/800"
            }
            alt="icon"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: showSkeleton ? "none" : "block",
            }}
            onLoad={() => setShowSkeleton(false)}
          />
        </Box>

        <Typography sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          {item.title}
        </Typography>
        <Typography
          sx={{
            ...servicePriceStyles,
            textAlign: "start",
            marginBottom: "0.5rem",
            marginTop: "auto",
          }}
        >
          ${Math.round((item.price_in_cents / 100) * rate)} {currency}
        </Typography>
        <Button variant="contained">Learn more</Button>
      </Card>
    </Link>
  );
}
