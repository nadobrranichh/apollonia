import { Typography } from "@mui/material";
import type { ReactNode } from "react";

export default function ErrorText({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ color: "#ff5959", fontSize: "0.7rem" }}>
      {children}
    </Typography>
  );
}
