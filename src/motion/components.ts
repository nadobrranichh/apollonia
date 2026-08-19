import { motion, type MotionProps } from "motion/react";
import {
  Box,
  Typography,
  Button,
  type ButtonProps,
  Stack,
  type StackProps,
  Card,
} from "@mui/material";
import type { ComponentType } from "react";

export const MotionBox = motion.create(Box);
export const MotionTypography = motion.create(Typography);
export const MotionButton = motion.create(Button) as ComponentType<
  ButtonProps & MotionProps & { to: string }
>;
export const MotionStack = motion.create(Stack) as ComponentType<
  StackProps & MotionProps
>;
export const MotionCard = motion.create(Card);
