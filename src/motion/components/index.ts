import { motion, type MotionProps } from "motion/react";
import { Box, Typography, Card, Link, type LinkProps } from "@mui/material";
import type { ComponentType } from "react";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

export const MotionBox = motion.create(Box);
export const MotionTypography = motion.create(Typography);

export const MotionCard = motion.create(Card);
export const MotionLink = motion.create(Link) as ComponentType<
  LinkProps & MotionProps & RouterLinkProps
>;
