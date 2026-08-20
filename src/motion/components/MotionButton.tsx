import { Button, type ButtonProps } from "@mui/material";
import { motion, type MotionProps } from "motion/react";
import type { ComponentType } from "react";
import type { LinkProps as RouterLinkProps } from "react-router-dom";
import { hoverScale, tapScale } from "../value-presets";

type MotionButtonProps = (ButtonProps & MotionProps) | RouterLinkProps;

export const RawMotionButton = motion.create(
  Button,
) as ComponentType<MotionButtonProps>;

export default function MotionButton(props: MotionButtonProps) {
  return (
    <RawMotionButton whileHover={hoverScale} whileTap={tapScale} {...props} />
  );
}
