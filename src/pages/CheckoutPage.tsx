import { Box, Typography } from "@mui/material";
import { ONTARIO_HST } from "../constants/variables-constants";
import { useCartStore } from "../store/cart-store";
import CheckoutItem from "../components/shop/CheckoutItem";
import DeliveryForm from "../components/shop/DeliveryForm";

export default function CheckoutPage() {
  const { cart } = useCartStore();

  const subTotal = Math.round(
    cart.reduce((acc, el) => acc + el.quantity * el.price_in_cents, 0) / 100,
  );
  const hst = Math.ceil(subTotal * ONTARIO_HST * 100) / 100;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center", lg: "start" },
        flexDirection: { xs: "column", lg: "row" },
        padding: "2rem 0 5rem 0",
        gap: "2rem",
      }}
    >
      <DeliveryForm />
      <Box
        sx={{
          width: { xs: "95%", sm: "70%", md: "60%", lg: "auto" },
          border: "1px solid white",
          padding: "1rem",
          alignself: "start",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "1.5rem" }}>
          Order Summary:
        </Typography>
        {cart.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <Typography>Subtotal: ${subTotal}</Typography>
        <Typography>HST: ${hst}</Typography>
      </Box>
    </Box>
  );
}
