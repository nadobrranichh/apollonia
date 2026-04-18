import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { useCartStore } from "../../store/cart-store";
import { useState } from "react";
import type { ProductType } from "../../types";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate } from "../../http/http";
import ReactMarkdown from "react-markdown";

export default function ShopItemControls({ item }: { item: ProductType }) {
  const { t } = useTranslation();
  const { cart, addItem } = useCartStore();
  const isInCart = cart.find((cartItem) => cartItem.id === item?.id)
    ? true
    : false;
  const [quantity, setQuantity] = useState<number>(1);

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
        padding: { xs: "4rem 0", lg: "0" },
        gap: "2rem",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 700,
          fontSize: "2.5rem",
          textAlign: "center",
        }}
      >
        {item.title}
      </Typography>
      <Box
        sx={{
          width: "85%",
          textAlign: "center",
        }}
      >
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <Typography
                component="h2"
                sx={{ fontWeight: 700, fontSize: "1.6rem", textAlign: "start" }}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <Typography
                component="h3"
                sx={{
                  mt: "0.75rem",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  textAlign: "start",
                }}
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <List
                sx={{
                  listStyle: "none",
                }}
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <ListItem
                sx={{
                  width: "100%",
                  justifyContent: "start",
                  textAlign: "start",
                  p: 0,
                }}
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <Typography sx={{ textAlign: "start" }} {...props} />
            ),
          }}
        >
          {item.description}
        </ReactMarkdown>
      </Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "1rem",
          width: "80%",
          textAlign: "center",
        }}
      >
        {/* ${Math.round((item.price_in_cents / 100) * rate)} {currency} */}
        Price: ${Math.round((item.price_in_cents / 100) * rate) * quantity}{" "}
        {currency}
        <br />
        {item.max_quantity > 1 &&
          quantity > 1 &&
          `($${Math.round((item.price_in_cents / 100) * rate)} ${currency} per item)`}
      </Typography>
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {item.max_quantity !== 1 && (
          <TextField
            id="outlined-basic"
            label={t("shopitem.quantity")}
            value={quantity}
            onChange={(e) =>
              setQuantity(
                Number.parseInt(e.target.value) > item.max_quantity
                  ? item.max_quantity
                  : Number.parseInt(e.target.value),
              )
            }
            variant="outlined"
            color="primary"
            type="number"
            sx={{ width: "100px" }}
            slotProps={{
              input: {
                inputProps: { min: 1, max: item.max_quantity },
              },
            }}
          />
        )}
        <Button
          disableRipple
          disableElevation
          variant="contained"
          sx={{
            width: "100%",
          }}
          onClick={() => addItem(item, quantity)}
          disabled={isInCart}
        >
          {isInCart ? t("shopitem.inCart") : t("shopitem.addToCart")}
        </Button>
      </Box>
    </Box>
  );
}
