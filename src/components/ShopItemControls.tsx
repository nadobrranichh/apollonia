import { Box, Typography, TextField, Button } from "@mui/material";
import { useCartStore } from "../store/cart-store";
import { useState } from "react";
import type { ProductType } from "../types";

export default function ShopItemControls({ item }: { item: ProductType }) {
  const { cart, addItem } = useCartStore();
  const isInCart = cart.find((cartItem) => cartItem.id === item?.id)
    ? true
    : false;
  const [quantity, setQuantity] = useState<number>(1);

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
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "1rem",
          width: "75%",
          textAlign: "center",
        }}
      >
        {item.description}
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "1rem",
          width: "80%",
          textAlign: "center",
        }}
      >
        Price: ${Math.ceil(item.price_in_cents / 100) * quantity}
        <br />
        {item.max_quantity > 1 &&
          quantity > 1 &&
          `($${Math.ceil(item.price_in_cents / 100)} per item)`}
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
            label="Quantity:"
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
          {isInCart ? "In cart" : "Add to cart"}
        </Button>
      </Box>
    </Box>
  );
}
