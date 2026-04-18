import { IconButton, type SxProps, type Theme } from "@mui/material";
import ArrowLeftSvg from "../../assets/arrow-left.svg";
import ArrowRightSvg from "../../assets/arrow-right.svg";
import ImageBox from "../ImageBox";

interface SwipeButtonProps {
  variant: "light" | "dark";
  direction: string;
  onClickCallback: () => void;
  sx?: SxProps<Theme>;
}

export default function SwipeButton({
  variant,
  direction,
  onClickCallback,
  sx,
}: SwipeButtonProps) {
  const bgColors = {
    light: "#8e5fd0ff",
    dark: "#25102e",
  };
  const arrowColors = {
    light: "#000",
    dark: "#fff",
  };
  return (
    <IconButton
      onClick={onClickCallback}
      disableRipple
      sx={{
        borderRadius: "35%",
        bgcolor: bgColors[variant],
        zIndex: 1000,
        ...sx,
      }}
    >
      <ImageBox
        src={direction === "left" ? ArrowLeftSvg : ArrowRightSvg}
        alt="icon"
        sx={{
          width: "24px",
          height: "24px",
          color: arrowColors[variant],
        }}
      />
    </IconButton>
  );
}
