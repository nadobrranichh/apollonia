import { fetchProducts } from "../http/http";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProductImagesContainer from "../components/shop/ProductImagesContainer";
import { useEffect } from "react";
import ShopItemControls from "../components/shop/ShopItemControls";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import ImageBox from "../components/ImageBox";

export default function ShopItemPage() {
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
    <Box
      component="main"
      sx={{
        padding: "3.5rem 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "90%" }}>
        <Link
          component={RouterLink}
          to="/shop"
          sx={{
            fontSize: "1.1rem",
            fontWeight: 300,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <ImageBox
            src={ArrowLeftIcon}
            alt="icon"
            sx={{ width: "24px", height: "24px" }}
          />
          <Typography sx={{ display: "inline", color: "text.primary" }}>
            Back to Shop
          </Typography>
        </Link>
        {item && (
          <Box
            sx={{
              marginTop: "3rem",
              width: "100%",
              display: { xs: "flex", lg: "grid" },
              gridTemplateColumns: { xs: "none", lg: "repeat(2,1fr)" },
              flexDirection: { xs: "column", lg: null },
            }}
          >
            <ProductImagesContainer imageUrls={item.image_urls || []} />
            <ShopItemControls item={item} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
