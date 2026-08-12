import { Box, Card, Stack, Typography } from "@mui/material";
import { ONTARIO_HST } from "../constants/variables-constants";
import { useCartStore } from "../store/cart-store";
import DeliveryForm from "../components/shop/DeliveryForm";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate } from "../http/http";
import { useTranslation } from "react-i18next";
import { servicePriceStyles } from "../styles/typographyStyles";
import CartItemContainer from "../components/shop/CartItemContainer";

export default function CheckoutPage() {
  const { t } = useTranslation();
  const { cart } = useCartStore();

  const { data: conversionRate } = useQuery({
    queryFn: configureConversionRate,
    queryKey: ["conversionRate"],
    staleTime: Infinity, // remains fresh
    gcTime: Infinity, // doesn't get garbage collected
    placeholderData: { rate: 1, currency: "CAD" },
  });
  const { rate, currency } = conversionRate!;

  const subTotal = cart.reduce(
    (acc, el) =>
      acc + el.quantity * Math.round((el.price_in_cents / 100) * rate),
    0,
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
        padding: "4rem 1rem",
        gap: "2rem",
      }}
    >
      <DeliveryForm />
      <Card
        sx={{
          // width: { xs: "95%", sm: "70%", md: "60%", lg: "auto" },
          // border: "1px solid white",
          padding: "1rem",
          alignself: "start",
        }}
      >
        <Typography variant="h5">{t("checkout.summary")}:</Typography>
        <Stack spacing={2} sx={{ marginY: "1.5rem" }}>
          {cart.map((item) => (
            <CartItemContainer key={item.id} item={item} />
          ))}
        </Stack>
        <Typography sx={servicePriceStyles}>
          {t("checkout.subtotal")}: ${subTotal} {currency}
        </Typography>
        <Typography sx={servicePriceStyles}>
          {t("checkout.hst")}: ${hst} {currency}
        </Typography>
      </Card>
    </Box>
  );
}
