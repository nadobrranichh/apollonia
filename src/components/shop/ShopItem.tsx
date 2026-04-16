import { useState } from "react";
import type { ProductType } from "../../types";
import { Box, Link, Skeleton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ImageBox from "../ImageBox";

export default function ShopItem({
  item,
  conversionRate,
}: {
  item: ProductType;
  conversionRate: { rate: number; currency: string };
}) {
  const { rate, currency } = conversionRate;
  const [hoverVisibility, setHoverVisibility] = useState<boolean>(false);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  return (
    <Link
      component={RouterLink}
      to={`/shopitem/${item.id}`}
      sx={{ textDecoration: "none" }}
    >
      <Box
        onMouseEnter={() => setHoverVisibility(true)}
        onMouseLeave={() => setHoverVisibility(false)}
        sx={{
          height: "100%",
          border: "1px solid white",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bgcolor: "rgba(255,255,255,0.3)",
            opacity: hoverVisibility ? 1 : 0,
            transition: "opacity 0.2s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1rem",
              bgcolor: "secondary.dark",
              padding: "0.5rem",
              color: "text.primary",
              fontWeight: 500,
            }}
          >
            View more
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            minWidth: "300px",
            aspectRatio: "1 / 1",
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

        <Box
          sx={{
            padding: "0.7rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "7.5rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1.2rem",
              fontWeight: 550,
              color: "text.primary",
              lineHeight: "2rem",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "text.primary",
              fontFamily: "Times New Roman",
              lineHeight: "1.5rem",
            }}
          >
            ${Math.round((item.price_in_cents / 100) * rate)} {currency}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
