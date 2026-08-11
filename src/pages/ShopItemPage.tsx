import { fetchProducts } from "../http/http";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProductImagesContainer from "../components/shop/ProductImagesContainer";
import { useEffect } from "react";
import ShopItemControls from "../components/shop/ShopItemControls";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTranslation } from "react-i18next";
import MarkdownRenderer from "../components/MarkdownRenderer";

export default function ShopItemPage() {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const { data: products } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });
  const item =
    (params.id && products && products.find((p) => p.id === +params.id!)) ||
    null;

  useEffect(() => {
    if (!item) navigate("/shop");
  }, [item]);

  return (
    <Box component="main" sx={{ padding: "3rem 1.8rem" }}>
      <Link component={RouterLink} to="/shop" sx={{ textDecoration: "none" }}>
        <ArrowBackIosIcon sx={{ fontSize: "1rem" }} />
        {t("shopitem.backToShop")}
      </Link>
      {item && (
        <Box
          sx={{
            marginTop: "1.5rem",
            display: { xs: "flex", lg: "grid" },
            gridTemplateColumns: { lg: "1fr 1fr" },
            flexDirection: "column",
          }}
        >
          <Box sx={{ marginBottom: "1rem" }}>
            <ProductImagesContainer imageUrls={item.image_urls || []} />
            <Typography
              variant="h4"
              sx={{ textAlign: "center", marginY: "1rem" }}
            >
              {item.title}
            </Typography>
            <ShopItemControls item={item} />
          </Box>
          <Box>
            <MarkdownRenderer>{item.description}</MarkdownRenderer>
          </Box>
        </Box>
      )}
    </Box>
  );
}
