import { Box, Typography } from "@mui/material";
import ImageBox from "./ImageBox";
import ErrorIcon from "../assets/cross-svgrepo-com.svg";
import ErrorIconLight from "../assets/cross-light-svgrepo-com.svg";
import { useTranslation } from "react-i18next";

export default function ErrorBlock({
  message,
  height,
  light = false,
}: {
  message: string;
  height?: number | string;
  light?: boolean;
}) {
  const { t } = useTranslation();
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
      <ImageBox
        src={light ? ErrorIconLight : ErrorIcon}
        alt="error"
        sx={{ height: "3rem" }}
      />
      <Typography
        component="h3"
        sx={{
          color: (theme) =>
            light ? theme.palette.text.primary : theme.palette.text.secondary,
          fontSize: "1.2rem",
        }}
      >
        {t("error")}
      </Typography>
      <Typography
        sx={{
          color: (theme) =>
            light ? theme.palette.text.primary : theme.palette.text.secondary,
          fontSize: "0.9rem",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
