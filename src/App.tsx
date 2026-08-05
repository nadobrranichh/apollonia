import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./http/http";
import { useActiveThemeStore } from "./store/active-theme-store";
import { darkTheme, lightTheme } from "./theme/themeConfig";

function App() {
  const { activeTheme } = useActiveThemeStore();
  return (
    <ThemeProvider theme={activeTheme === "light" ? lightTheme : darkTheme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
