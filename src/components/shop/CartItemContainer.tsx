import { Box, Typography, IconButton, Stack } from "@mui/material";
import ImageBox from "../ImageBox";
import { useCartStore, type CartItem } from "../../store/cart-store";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate } from "../../http/http";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { MotionCard } from "../../motion/components";
import { fade } from "../../motion/variants";

export default function CartItemContainer({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCartStore();
  const [ShowImageSkeleton, setShowImageSkeleton] = useState<boolean>(true);

  const { data: conversionRate } = useQuery({
    queryFn: configureConversionRate,
    queryKey: ["conversionRate"],
    staleTime: Infinity, // remains fresh
    gcTime: Infinity, // doesn't get garbage collected
    placeholderData: { rate: 1, currency: "CAD" },
  });
  const { rate, currency } = conversionRate!;

  return (
    <MotionCard
      variants={fade()}
      layout
      exit={{ y: -30, opacity: 0 }}
      sx={{ position: "relative", padding: "0.75rem" }}
    >
      <IconButton
        sx={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}
        onClick={() => removeItem(item.id)}
      >
        <CloseIcon />
      </IconButton>

      <Stack direction="row" spacing={2}>
        <Box>
          <ImageBox
            src={
              item.image_urls ? item.image_urls[0] : "https://picsum.photos/800"
            }
            sx={{
              borderRadius: "1rem",
              width: "6rem",
              aspectRatio: "1/1",
              objectFit: "cover",
              display: ShowImageSkeleton ? "none" : "block",
            }}
            onLoad={() => setShowImageSkeleton(false)}
            alt="icon"
          />
        </Box>

        <Stack spacing={1} sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>

          <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
            ${Math.round((item.price_in_cents / 100) * rate) * item.quantity}{" "}
            {currency}{" "}
            {item.quantity > 1 &&
              `($${Math.round((item.price_in_cents / 100) * rate)} ${currency} per
            item)`}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              padding: "0.25rem",
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              borderRadius: "1rem",
              alignSelf: "end",
            }}
          >
            <IconButton
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
              {item.quantity}
            </Typography>
            <IconButton
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <AddIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </MotionCard>
  );
}
