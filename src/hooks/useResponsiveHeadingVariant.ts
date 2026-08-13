import { useMediaQuery, useTheme } from "@mui/material";

export function useResponsiveHeadingVariant(
  type: "main" | "sub" | "small" = "sub",
) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  switch (type) {
    case "main":
      if (isLg) return "h1";
      if (isMd) return "h2";
      return "h3";
    case "sub":
      if (isLg) return "h2";
      else return "h3";
    case "small":
      return isMd ? "h3" : "h4";
    default:
      return "h5";
  }
}
