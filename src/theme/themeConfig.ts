import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "",
      dark: "",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3a0b59",
      light: "#c36fff",
      dark: "#25102e",
      contrastText: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        main: {
          background: "linear-gradient(75deg, #000, #624190)",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, Arial",
  },
});
