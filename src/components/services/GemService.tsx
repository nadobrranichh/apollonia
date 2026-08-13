import {
  Box,
  Button,
  Card,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ToothGemsImg from "../../assets/tooth-gems.png";
import GoldenToothGemsImg from "../../assets/golden-tooth-gems.png";
import ImageBox from "../ImageBox";
import { useTranslation } from "react-i18next";
import {
  captionStyles,
  servicePriceStyles,
} from "../../styles/typographyStyles";

export default function GemService() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "30rem",
      }}
    >
      <Box
        sx={{
          height: "8rem",
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
          margin: "-1.2rem -1.2rem 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <ImageBox src={ToothGemsImg} sx={{ height: "2rem" }} />
        <ImageBox src={GoldenToothGemsImg} sx={{ height: "2rem" }} />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>
          {t("services.toothGems.title")}
        </Typography>
        <Typography sx={captionStyles}>
          {t("services.toothGems.titleComment")}
        </Typography>
      </Box>
      <Divider />
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {t("services.toothGems.swarovskiCrystals.title")}{" "}
          </Typography>
          <Typography sx={servicePriceStyles}>
            ${import.meta.env.VITE_SERVICE_SWAROVSKI_CRYSTALS_PRICE}
          </Typography>
        </Box>
        <Typography sx={captionStyles}>
          &bull; {t("services.toothGems.swarovskiCrystals.description2")}
        </Typography>
        <Typography sx={captionStyles}>
          &bull; {t("services.toothGems.swarovskiCrystals.description3")}
        </Typography>
        {/* <ImageBox
          src={ToothGemsImg}
          sx={{ width: { xs: "7.5rem", md: "12rem" } }}
        /> */}
      </Box>
      <Divider />
      {/* 
      
      */}
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {t("services.toothGems.goldenToothGem.title")}{" "}
          </Typography>
          <Typography sx={servicePriceStyles}>
            ${import.meta.env.VITE_SERVICE_GOLDEN_18K_GEM_PRICE}
          </Typography>
        </Box>
        <Typography sx={captionStyles}>
          {t("services.toothGems.goldenToothGem.description")}
        </Typography>
        {/* <ImageBox
          src={GoldenToothGemsImg}
          sx={{
            width: { xs: "7.5rem", md: "12rem" },
          }}
        /> */}
      </Box>

      <Typography sx={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
        {t("services.toothGems.description")}
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        href={
          isMobile
            ? `sms:+16475141552?body=${encodeURIComponent(
                "Hello! I'd like to book an appointment for Tooth gems",
              )}`
            : "https://www.instagram.com/apollonia_whitening"
        }
      >
        Book Now
      </Button>
    </Card>
  );
}
