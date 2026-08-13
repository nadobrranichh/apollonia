import { createTheme } from "@mui/material";
import type { Components, PaletteOptions } from "@mui/material/styles";
import { type Theme } from "@mui/material/styles";

const componentsOverrides: Components<Theme> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "1.5rem",
        padding: "1.2rem",
        boxShadow: `0px 0px 0.5rem ${theme.palette.grey[500]}`,
        cursor: "pointer",
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "1rem",
        padding: "0.5rem 1.5rem",
        fontSize: "1.1rem",
        fontFamily: "Poppins, Arial",
        fontStyle: "normal",
        textTransform: "none",
        cursor: "pointer",
        color:
          theme.palette.mode === "light"
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
      }),
      contained: ({ theme }) => ({
        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
        color: theme.palette.secondary.contrastText,
      }),
      outlined: ({ theme }) => ({
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[700]
            : theme.palette.grey[100],
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "1rem",
        fontSize: "1rem",
        fontFamily: "Poppins, Arial",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey[300],
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey[400],
          boxShadow: `0 0 0.3rem ${theme.palette.grey[500]}`,
        },
      }),
      input: ({ theme }) => ({
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[900]
            : theme.palette.grey[100],
      }),
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
  MuiCheckbox: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 0,
        fontSize: "9rem",
        color: theme.palette.secondary.main,
        "&.Mui-checked": {
          color: theme.palette.secondary.main,
        },
      }),
    },
  },
};

const typographyOverrides = {
  fontFamily: "Playfair Display, Poppins, Arial",
  h3: {
    fontSize: "2.8rem",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  h4: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  h5: {
    fontSize: "1.65rem",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  body1: {
    fontSize: "1.3rem",
    fontStyle: "italic",
  },
  body2: {
    fontSize: "1.1rem",
    fontStyle: "normal",
  },
};

// PURPLE
const greyColors = {
  50: "#faf9fc",
  100: "#f3f1f7",
  200: "#e7e2ef",
  300: "#d3c9df",
  400: "#b3a8bf",
  500: "#8c8297",
  600: "#675d72",
  700: "#4c4555",
  800: "#322d38",
  900: "#1b1820",
};

const secondaryPalette = {
  main: "#a855f7",
  light: "#c084fc",
  dark: "#6b21a8",
  contrastText: "#ede9fe",
};

const errorPalette = {
  main: "#dc2626",
  light: "#f87171",
  dark: "#991b1b",
  contrastText: "#fef2f2",
};

const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#2d0c42",
    contrastText: "#ede9fe",
  },
  secondary: secondaryPalette,
  error: errorPalette,
  background: {
    default: "#f3ebfd",
    paper: "#f8f3ff",
  },
  text: {
    primary: "#2d0c42",
    secondary: "#5a4371",
  },
  grey: greyColors,
};

const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#ede9fe",
    contrastText: "#2d0c42",
  },
  secondary: secondaryPalette,
  error: errorPalette,
  background: {
    default: "#12061d",
    paper: "#1d1028",
  },
  text: {
    primary: "#f3e8ff",
    secondary: "#c4b5d9",
  },
  grey: greyColors,
};

export const darkTheme = createTheme({
  palette: darkPalette,
  components: componentsOverrides,
  typography: typographyOverrides,
});

export const lightTheme = createTheme({
  palette: lightPalette,
  components: componentsOverrides,
  typography: typographyOverrides,
});
