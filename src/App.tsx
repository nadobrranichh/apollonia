import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/themeConfig";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./http/http";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
