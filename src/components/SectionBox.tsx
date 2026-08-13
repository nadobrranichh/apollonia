import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";
import type { ElementType } from "react";

const StyledSectionBox = styled(Box)(({ theme }) => ({
  paddingLeft: "1.8rem",
  paddingRight: "1.8rem",
  [theme.breakpoints.up("xl")]: {
    paddingLeft: "15rem",
    paddingRight: "15rem",
  },
})) as typeof Box;

export function SectionBox({
  component = "section" as ElementType,
  ...props
}: BoxProps) {
  return (
    <StyledSectionBox
      component={component}
      sx={{ ...(component === "main" && { paddingY: "3rem" }) }}
      {...props}
    />
  );
}
