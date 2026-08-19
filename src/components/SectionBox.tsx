import { styled, useTheme } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";
import type { ComponentType } from "react";
import { motion, type MotionProps } from "motion/react";
import { fade } from "../motion/variants";
import { useMediaQuery } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingLeft: "1.8rem",
  paddingRight: "1.8rem",
  [theme.breakpoints.up("xl")]: {
    paddingLeft: "15rem",
    paddingRight: "15rem",
  },
})) as typeof Box;

const MotionStyledBox = motion.create(StyledBox) as ComponentType<
  BoxProps & MotionProps
>;

export function SectionBox({
  component = "section",
  ...props
}: BoxProps & MotionProps) {
  const isLg = useMediaQuery(useTheme().breakpoints.up("lg"));
  return (
    <MotionStyledBox
      component={component}
      sx={{ ...(component === "main" && { paddingY: "3rem" }) }}
      {...props}
      variants={fade({ withStagger: true })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isLg ? 0.2 : 0.1 }}
    />
  );
}
