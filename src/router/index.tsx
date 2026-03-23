import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LocationPage from "../pages/LocationPage.tsx";
import ServicesPage from "../pages/ServicesPage.tsx";
import ReviewsPage from "../pages/ReviewsPage.tsx";

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
    ],
  },
]);
