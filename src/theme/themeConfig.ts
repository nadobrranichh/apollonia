import { createTheme } from "@mui/material";
import type { PaletteOptions } from "@mui/material/styles";

const componentsOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "1rem",
        padding: "0.5rem 1.5rem",
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
};

const typographyOverrides = {
  fontFamily: "Playfair Display, Poppins, Arial",
  h3: {
    fontSize: "2.8rem",
  },
  body1: {
    fontSize: "1.4rem",
  },
  body2: {
    fontSize: "1rem",
  },
};

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

const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#2d0c42",
    contrastText: "#ede9fe",
  },
  secondary: secondaryPalette,
  background: {
    default: "#f8f3ff",
    paper: "#ffffff",
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
