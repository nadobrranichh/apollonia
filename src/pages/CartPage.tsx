import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useCartStore } from "../store/cart-store";
import CartItemContainer from "../components/CartItemContainer";
import { pageTitleStyle } from "../styles/typographyStyles";
export default function CartPage() {
  const { cart, removeItem, updateQuantity } = useCartStore();

  const subTotal = Math.round(
    cart.reduce((acc, el) => acc + el.quantity * el.price_in_cents, 0) / 100,
  );
  return (
    <Box
      component="main"
      sx={{
        paddingY: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={pageTitleStyle}>Cart</Typography>
      <Box
        sx={{
          marginY: "4rem",
          width: { xs: "90%", md: "85%", lg: "70%", xl: "55%" },
        }}
      >
        {cart.length > 0 ? (
          <>
            <Box
              sx={{
                "& > :not(:last-child)": {
                  marginBottom: "2rem",
                },
              }}
            >
              {cart.map((cartItem) => (
                <CartItemContainer
                  key={cartItem.id}
                  item={cartItem}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </Box>
            <Box
              sx={{
                marginTop: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: "1.5rem" }}>
                Subtotal: ${subTotal}
              </Typography>
              <Button
                component={RouterLink}
                to="/checkout"
                sx={{ padding: "0.7rem 2rem", textDecoration: "none" }}
                variant="contained"
              >
                Checkout
              </Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem" }}>
              Looks like you don't have anything in the cart yet.
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              sx={{ padding: "0.7rem 1.5rem" }}
              to="/shop"
            >
              Continue Shopping
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
