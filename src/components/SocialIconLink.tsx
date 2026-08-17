import { Link, styled } from "@mui/material";

export const SocialIconLink = styled(Link)(({ theme }) => ({
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.mode === "light" ? theme.palette.secondary.dark : theme.palette.secondary.light}`,
})) as typeof Link;
