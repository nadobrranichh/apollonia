import { Box, Typography } from "@mui/material";
import LoadingSpinnerIcon from "../assets/spinner-svgrepo-com.svg";
import LoadingSpinnerIconLight from "../assets/spinner-light-svgrepo-com.svg";
import ImageBox from "./ImageBox";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LoadingBlock({
  i18nKey,
  height = "auto",
  light = false,
}: {
  i18nKey: string;
  height?: number | string;
  light?: boolean;
}) {
  const { t } = useTranslation();
  const [ellipsis, setEllipsis] = useState<string>(".");

  useEffect(() => {
    const interval = setInterval(
      () => setEllipsis((prev) => (prev.length === 3 ? "" : prev + ".")),
      500,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0.3rem",
      }}
    >
      <ImageBox
        src={light ? LoadingSpinnerIconLight : LoadingSpinnerIcon}
        alt=""
        sx={{
          "@keyframes spin": {
            "0%": {
              rotate: "0deg",
            },

            "100%": {
              rotate: "360deg",
            },
          },
          height: "2rem",
          animation: "spin 3s linear infinite",
        }}
      />
      <Typography
        component="h3"
        sx={{
          color: (theme) =>
            light ? theme.palette.text.primary : theme.palette.text.secondary,
        }}
      >
        {t(`loading.${i18nKey}`)}
        {ellipsis}
      </Typography>
    </Box>
  );
}
