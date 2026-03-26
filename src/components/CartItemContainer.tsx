import { Box, Skeleton, Typography, IconButton } from "@mui/material";
import ImageBox from "./ImageBox";
import type { CartItem } from "../store/cart-store";
import { useState } from "react";
import CrossIcon from "../assets/cross-light-svgrepo-com.svg";
import QuantityControls from "./QuantityControls";

export default function CartItemContainer({
  item,
  updateQuantity,
  removeItem,
}: {
  item: CartItem;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}) {
  const [ShowImageSkeleton, setShowImageSkeleton] = useState<boolean>(true);
  return (
    <Box sx={{ border: "1px solid white" }}>
      <Box sx={{ display: "flex" }}>
        {ShowImageSkeleton && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: "10rem",
              height: "10rem",
              zIndex: 1,
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
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            display: ShowImageSkeleton ? "none" : "block",
          }}
          onLoad={() => setShowImageSkeleton(false)}
        />
        <Box
          sx={{
            p: "1rem",
            width: "30%",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.2rem",
              textTransform: "uppercase",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              mt: "0.5rem",
            }}
          >
            Price per item: ${Math.ceil(item.price_in_cents / 100)}
          </Typography>
        </Box>
        <QuantityControls
          quantity={item.quantity}
          updateQuantity={(newQuantity: number) =>
            updateQuantity(item.id, newQuantity)
          }
          elementsWidth={22}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "auto",
            mr: "2rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1.2rem",
            }}
          >
            ${item.quantity * Math.ceil(item.price_in_cents / 100)}
          </Typography>
          <IconButton sx={{ padding: 0 }} onClick={() => removeItem(item.id)}>
            <ImageBox
              src={CrossIcon}
              alt="icon"
              sx={{ width: "1.25rem", marginLeft: "0.75rem" }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
