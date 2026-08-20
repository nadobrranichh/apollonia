import { Stack, useMediaQuery, useTheme, type StackProps } from "@mui/material";
import { motion, type MotionProps } from "motion/react";
import type { ComponentType } from "react";
import { fade } from "../variants";

const RawMotionStack = motion.create(Stack) as ComponentType<
  StackProps & MotionProps
>;

export default function MotionStack(props: StackProps & MotionProps) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <RawMotionStack
      variants={fade()}
      {...(isMobile && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      })}
      {...props}
    />
  );
}
