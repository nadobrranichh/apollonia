import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LocationPage from "../pages/LocationPage.tsx";

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
    ],
  },
]);
