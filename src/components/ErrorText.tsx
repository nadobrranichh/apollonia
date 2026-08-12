import { Typography } from "@mui/material";
import type { ReactNode } from "react";
import { captionStyles } from "../styles/typographyStyles";

export default function ErrorText({ children }: { children: ReactNode }) {
  return (
    <Typography
      variant="body2"
      sx={{
        ...captionStyles,
        marginLeft: "0.5rem",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.error.main
            : theme.palette.error.light,
      }}
    >
      {children}
    </Typography>
  );
}
