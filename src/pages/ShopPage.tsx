import { Box, Typography } from "@mui/material";
import { pageTitleStyle } from "../styles/typographyStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../http/http";
import ShopItem from "../components/ShopItem";
import LoadingBlock from "../components/LoadingBlock";
import ErrorBlock from "../components/ErrorBlock";

export default function ShopPage() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });
  return (
    <Box component="main" sx={{ padding: "4rem 0" }}>
      <Typography sx={{ ...pageTitleStyle, textAlign: "center" }}>
        Shop
      </Typography>
      {products && (
        <Box
          sx={{
            justifySelf: "center",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            width: "90%",
            gap: "2.5rem",
          }}
        >
          {products.map((item, i) => (
            <ShopItem key={i} item={item} />
          ))}
        </Box>
      )}
      {isLoading && (
        <LoadingBlock title="Loading products" height="50vh" light />
      )}
      {isError && <ErrorBlock message={error.message} height="50vh" light />}
    </Box>
  );
}
