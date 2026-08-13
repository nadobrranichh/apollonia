import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import VisitPage from "../pages/VisitPage.tsx";
import ServicesPage from "../pages/ServicesPage.tsx";
import ReviewsPage from "../pages/ReviewsPage.tsx";
import ShopPage from "../pages/ShopPage.tsx";
import ShopItemPage from "../pages/ShopItemPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import CheckoutPage from "../pages/CheckoutPage.tsx";
import PaymentResultPage from "../pages/PaymentResultPage.tsx";
import MethodPage from "../pages/MethodPage.tsx";

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
        path: "/visit",
        element: <VisitPage />,
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
      { path: "/method", element: <MethodPage /> },
    ],
  },
]);
