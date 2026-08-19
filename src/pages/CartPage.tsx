import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useCartStore } from "../store/cart-store";
import CartItemContainer from "../components/shop/CartItemContainer";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate } from "../http/http";
import { servicePriceStyles } from "../styles/typographyStyles";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import { MotionBox } from "../motion/components";
import { fade } from "../motion/variants";
import { AnimatePresence } from "motion/react";
export default function CartPage() {
  const { t } = useTranslation();
  const { cart } = useCartStore();
  const headingVariant = useResponsiveHeadingVariant();

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
  return (
    <SectionBox component="main">
      <Typography variant={headingVariant}>{t("cart.title")}</Typography>
      <Box sx={{ paddingX: { xs: 0, lg: "10rem" } }}>
        {cart.length > 0 ? (
          <MotionBox
            variants={fade({ withStagger: true })}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <AnimatePresence mode="popLayout">
              {cart.map((cartItem) => (
                <CartItemContainer key={cartItem.id} item={cartItem} />
              ))}
            </AnimatePresence>

            <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
              <Typography sx={{ ...servicePriceStyles, textAlign: "center" }}>
                {t("cart.subtotal")}: ${subTotal} {currency}
              </Typography>
              <Button
                component={RouterLink}
                to="/checkout"
                sx={{ paddingX: "5rem" }}
                variant="contained"
              >
                {t("cart.checkout")}
              </Button>
            </Box>
          </MotionBox>
        ) : (
          <Box sx={{ textAlign: "center", paddingY: "4rem" }}>
            <Typography sx={{ marginBottom: "2rem" }}>
              {t("cart.noItems")}
            </Typography>
            <Button variant="contained" component={RouterLink} to="/shop">
              {t("cart.continueShopping")}
            </Button>
          </Box>
        )}
      </Box>
    </SectionBox>
  );
}
