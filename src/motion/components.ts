import { motion, type MotionProps } from "motion/react";
import {
  Box,
  Typography,
  Button,
  type ButtonProps,
  Stack,
  type StackProps,
  Card,
  Link,
  type LinkProps,
} from "@mui/material";
import type { ComponentType } from "react";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

export const MotionBox = motion.create(Box);
export const MotionTypography = motion.create(Typography);
export const MotionButton = motion.create(Button) as ComponentType<
  ButtonProps & MotionProps & RouterLinkProps
>;
export const MotionStack = motion.create(Stack) as ComponentType<
  StackProps & MotionProps
>;
export const MotionCard = motion.create(Card);
export const MotionLink = motion.create(Link) as ComponentType<
  LinkProps & MotionProps & RouterLinkProps
>;
