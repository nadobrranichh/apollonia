import { Box, Typography } from "@mui/material";
import ImageBox from "./ImageBox";
import ErrorIcon from "../assets/cross-svgrepo-com.svg";

export default function ErrorBlock({
  message,
  height,
}: {
  message: string;
  height?: number | string;
}) {
  return (
    <Box
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ImageBox src={ErrorIcon} alt="error" sx={{ height: "3rem" }} />
      <Typography
        component="h3"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontSize: "1.2rem",
        }}
      >
        An error occured!
      </Typography>
      <Typography
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontSize: "0.9rem",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
