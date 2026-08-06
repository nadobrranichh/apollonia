import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

export default function RootLayout() {
  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
