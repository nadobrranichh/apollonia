import { Box, type SxProps, type Theme } from "@mui/material";

type ImageBoxProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  sx?: SxProps<Theme>;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function ImageBox({
  src,
  alt = "",
  width,
  height,
  sx = {},
  ...props
}: ImageBoxProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ height, width, ...sx }}
      {...props}
    />
  );
}
