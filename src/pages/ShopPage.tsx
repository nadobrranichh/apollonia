import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { configureConversionRate, fetchProducts } from "../http/http";
import ShopItem from "../components/shop/ShopItem";
import LoadingBlock from "../components/LoadingBlock";
import ErrorBlock from "../components/ErrorBlock";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import { MotionBox } from "../motion/components";
import { fade } from "../motion/variants";

export default function ShopPage() {
  const { t } = useTranslation();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  const { data: conversionRate } = useQuery({
    queryFn: configureConversionRate,
    queryKey: ["conversionRate"],
    staleTime: Infinity, // remains fresh
    gcTime: Infinity, // doesn't get garbage collected
  });

  const headingVariant = useResponsiveHeadingVariant();

  useEffect(() => {
    console.log(conversionRate);
  }, [conversionRate]);

  return (
    <SectionBox component="main">
      <Typography variant={headingVariant}>{t("shop.title")}</Typography>
      {products && conversionRate && (
        <MotionBox
          variants={fade({ withStagger: true })}
          initial="hidden"
          whileInView="visible"
          sx={{
            justifySelf: "center",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3,1fr)",
            },
            gap: { xs: "2rem", md: "3rem" },
          }}
        >
          {products
            .toSorted((a, b) => a.id - b.id)
            .map((item) => (
              <ShopItem
                key={item.id}
                item={item}
                conversionRate={conversionRate}
              />
            ))}
        </MotionBox>
      )}
      {isLoading && <LoadingBlock i18nKey="products" height="50vh" light />}
      {isError && <ErrorBlock message={error.message} height="50vh" light />}
    </SectionBox>
  );
}
