import { Box, Typography, Skeleton, Button } from "@mui/material";
import { useCartStore, type CartItem } from "../store/cart-store";
import QuantityControls from "./QuantityControls";
import { useState } from "react";

export default function CheckoutItem({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCartStore();

  const [ShowImageSkeleton, setShowImageSkeleton] = useState<boolean>(true);
  return (
    <Box
      sx={{
        bgcolor: "rgba(255,255,255, 0.15)",
        marginBottom: "10px",
        display: "flex",
        padding: "10px",
        gap: "0.5rem",
      }}
    >
      <Box sx={{ width: "100px", height: "100px" }}>
        {ShowImageSkeleton && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: "100%",
              height: "100%",
              zIndex: 1,
              "&::after": {
                background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
              },
            }}
          />
        )}
        <img
          src={
            item.image_urls ? item!.image_urls[0] : "https://picsum.photos/800"
          }
          alt="icon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: ShowImageSkeleton ? "none" : "block",
          }}
          onLoad={() => setShowImageSkeleton(false)}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "1rem",
          width: "40%",
        }}
      >
        {item?.title}
      </Typography>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: 500 }}>
          ${item.quantity * Math.ceil(item.price_in_cents / 100)}
        </Typography>
        {(item.quantity > 1 || item.max_quantity > 1) && (
          <>
            <Typography sx={{ fontWeight: 500 }}>
              ${Math.ceil(item.price_in_cents / 100)} per item
            </Typography>
            <QuantityControls
              quantity={item.quantity}
              updateQuantity={(newQuantity: number) =>
                updateQuantity(item.id, newQuantity)
              }
              elementsWidth={22}
            />
          </>
        )}
        <Button
          sx={{
            fontSize: "0.8rem",
            border: "none",
            padding: "0.2rem",
          }}
          variant="outlined"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
}
