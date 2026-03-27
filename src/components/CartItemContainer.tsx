import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import ImageBox from "./ImageBox";
import type { CartItem } from "../store/cart-store";
import { useState } from "react";
import CrossIcon from "../assets/cross-light-svgrepo-com.svg";
import QuantityControls from "./QuantityControls";
import { theme } from "../theme/themeConfig";

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

  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ border: "1px solid white", display: { md: "flex" } }}>
      <Box sx={{ display: "flex", gap: { xs: "0.5rem", md: "1rem" } }}>
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
            paddingTop: { xs: "0.5rem", md: "1rem" },
            flex: 1,
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
      </Box>

      {isMd ? (
        <>
          <QuantityControls
            quantity={item.quantity}
            updateQuantity={(newQuantity: number) =>
              updateQuantity(item.id, newQuantity)
            }
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              mr: "2rem",

              width: "6.5rem",
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
        </>
      ) : (
        <Box
          sx={{
            borderTop: "1px solid white",
            display: "flex",
            justifyContent: "space-around",
            paddingY: "0.5rem",
          }}
        >
          <QuantityControls
            quantity={item.quantity}
            updateQuantity={(newQuantity: number) =>
              updateQuantity(item.id, newQuantity)
            }
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
      )}
    </Box>
  );
}
