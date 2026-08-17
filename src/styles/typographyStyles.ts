import { type Theme } from "@mui/material/styles";

export const pageTitleStyle = {
  fontWeight: 500,
  fontSize: "2.5rem",
  textTransform: "uppercase",
  marginBottom: "1.25rem",
  fontFamily: "Times New Roman",
};

export const captionStyles = {
  fontFamily: "Poppins, Arial",
  fontStyle: "normal",
  fontSize: "0.7rem",
  color: (theme: Theme) =>
    theme.palette.grey[theme.palette.mode === "light" ? 600 : 300],
};

export const servicePriceStyles = {
  textAlign: "end",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "secondary.dark" : "secondary.light",
  fontWeight: "bold",
  fontFamily: "Poppins, Arial",
};

export const descriptionStyles = {
  fontSize: "1rem",
  fontStyle: "italic",
};

export const secondaryFont = {
  fontFamily: "Poppins, Arial",
};
