import { stagger, type Variants } from "motion/react";

export function fade({ withStagger = false, yStart = 40 } = {}): Variants {
  return {
    hidden: {
      opacity: 0,
      y: yStart,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ...(withStagger && { delayChildren: stagger(0.2) }),
      },
    },
  };
}
