import { Box, Typography, Button } from "@mui/material";
import { useCartStore, type CartItem } from "../../store/cart-store";
import QuantityControls from "./QuantityControls";
import ImageBox from "../ImageBox";
import { useTranslation } from "react-i18next";

export default function CheckoutItem({ item }: { item: CartItem }) {
  const { t } = useTranslation();
  const { updateQuantity, removeItem } = useCartStore();

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
        <ImageBox
          src={
            item.image_urls ? item!.image_urls[0] : "https://picsum.photos/800"
          }
          alt="icon"
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
          }}
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
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "0.65rem", sm: "0.8rem" },
              }}
            >
              ${Math.ceil(item.price_in_cents / 100)} {t("checkout.perItem")}
            </Typography>
            <QuantityControls
              quantity={item.quantity}
              updateQuantity={(newQuantity: number) =>
                updateQuantity(item.id, newQuantity)
              }
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
          {t("checkout.remove")}
        </Button>
      </Box>
    </Box>
  );
}
