import { Box, Typography, Card, CardContent } from "@mui/material";
import { ONTARIO_HST } from "../constants/variables-constants";
import { useCartStore } from "../store/cart-store";
import CheckoutItem from "../components/CheckoutItem";
import DeliveryForm from "../components/DeliveryForm";

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
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem 0 5rem 0",
        gap: "2rem",
      }}
    >
      <DeliveryForm />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Card
          sx={{
            background: "transparent",
            border: "1px solid white",
          }}
        >
          <CardContent>
            <Typography>Order Summary:</Typography>
            {cart.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
            <Typography>Subtotal: ${subTotal}</Typography>
            <Typography>HST: ${hst}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
