import { Box, Typography, Button, IconButton } from "@mui/material";
import { useCartStore } from "../../store/cart-store";
import { useState } from "react";
import type { ProductType } from "../../types";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate } from "../../http/http";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { servicePriceStyles } from "../../styles/typographyStyles";

export default function ShopItemControls({ item }: { item: ProductType }) {
  const { t } = useTranslation();
  const { cart, addItem } = useCartStore();
  const isInCart = cart.find((cartItem) => cartItem.id === item?.id)
    ? true
    : false;
  const [quantity, setQuantity] = useState(1);

  function handleChangeQuantity(diff: number) {
    setQuantity((prev) => {
      const newQuantity = prev + diff;
      if (newQuantity > item.max_quantity) return prev;
      if (newQuantity < 1) return 1;
      return newQuantity;
    });
  }

  const { data: conversionRate } = useQuery({
    queryFn: configureConversionRate,
    queryKey: ["conversionRate"],
    staleTime: Infinity, // remains fresh
    gcTime: Infinity, // doesn't get garbage collected
    placeholderData: { rate: 1, currency: "CAD" },
  });
  const { rate, currency } = conversionRate!;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ ...servicePriceStyles, textAlign: "center" }}>
        Price: ${Math.round((item.price_in_cents / 100) * rate) * quantity}{" "}
        {currency}
        <br />
        {item.max_quantity > 1 &&
          quantity > 1 &&
          `($${Math.round((item.price_in_cents / 100) * rate)} ${currency} per item)`}
      </Typography>
      {item.max_quantity > 1 && (
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <IconButton onClick={() => handleChangeQuantity(-1)}>
            <RemoveIcon />
          </IconButton>
          {quantity}
          <IconButton onClick={() => handleChangeQuantity(1)}>
            <AddIcon />
          </IconButton>
        </Box>
      )}
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        onClick={() => addItem(item, quantity)}
        disabled={isInCart}
      >
        {isInCart ? t("shopitem.inCart") : t("shopitem.addToCart")}
      </Button>
    </Box>
  );
}
