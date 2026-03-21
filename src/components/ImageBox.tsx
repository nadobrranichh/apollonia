import { Box, type SxProps, type Theme } from "@mui/material";

type ImageBoxProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  sx?: SxProps<Theme>;
};

export default function ImageBox({
  src,
  alt = "",
  width,
  height,
  sx = {},
}: ImageBoxProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      sx={{ height, width, ...sx }}
    />
  );
}
