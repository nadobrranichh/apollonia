import { Card, Stack, Typography } from "@mui/material";
import { ONTARIO_HST } from "../constants/variables-constants";
import { useCartStore } from "../store/cart-store";
import DeliveryForm from "../components/shop/DeliveryForm";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate } from "../http/http";
import { useTranslation } from "react-i18next";
import { servicePriceStyles } from "../styles/typographyStyles";
import CartItemContainer from "../components/shop/CartItemContainer";
import { SectionBox } from "../components/SectionBox";
import { AnimatePresence } from "motion/react";

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
    <SectionBox
      component="main"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        paddingY: "4rem",
        gap: "2rem",
        alignItems: "start",
      }}
    >
      <DeliveryForm />
      <Card>
        <Typography variant="h5">{t("checkout.summary")}:</Typography>
        <Stack spacing={2} sx={{ marginY: "1.5rem" }}>
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <CartItemContainer key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </Stack>
        <Typography sx={servicePriceStyles}>
          {t("checkout.subtotal")}: ${subTotal} {currency}
        </Typography>
        <Typography sx={servicePriceStyles}>
          {t("checkout.hst")}: ${hst} {currency}
        </Typography>
      </Card>
    </SectionBox>
  );
}
