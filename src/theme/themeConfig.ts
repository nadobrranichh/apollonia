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
    text: {
      primary: "#fff",
      secondary: "#000",
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
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#fff",
          color: "#000",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "16px",
          borderRadius: 0,
          "& .MuiContainedButton": {
            borderColor: "#fff",
          },
          "&:hover .MuiContainedButton": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiContainedButton": {
            borderColor: "#fff",
          },
          "&.Mui-disabled": {
            background: "rgba(255,255,255, 0.5)",
            color: "rgba(0,0,0,0.5)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
        input: {
          color: "#fff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#fff",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          p: 0,
          "&::-webkit-scrollbar": {
            width: "0.75rem",
          },
          scrollbarColor: "#fff",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.secondary.light,
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme.palette.secondary.dark,
          },
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          "&.Mui-selected": {
            backgroundColor: theme.palette.secondary.main,
          },
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
          },
          "&.Mui-selected:disabled": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
  typography: {
    fontFamily: "Poppins, Arial",
  },
});
