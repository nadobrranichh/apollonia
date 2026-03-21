import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout.tsx";
import HomePage from "../pages/HomePage.tsx";

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
    ],
  },
]);
