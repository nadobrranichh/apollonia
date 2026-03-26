import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LocationPage from "../pages/LocationPage.tsx";
import ServicesPage from "../pages/ServicesPage.tsx";
import ReviewsPage from "../pages/ReviewsPage.tsx";
import ShopPage from "../pages/ShopPage.tsx";
import ShopItemPage from "../pages/ShopItemPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import CheckoutPage from "../pages/CheckoutPage.tsx";
import PaymentResultPage from "../pages/PaymentResultPage.tsx";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/location",
        element: <LocationPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/reviews",
        element: <ReviewsPage />,
      },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shopitem/:id", element: <ShopItemPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/payment-result", element: <PaymentResultPage /> },
    ],
  },
]);
