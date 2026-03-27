import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  gemServiceSubtitleStyles,
  serviceStyles,
  serviceTitleStyles,
  gemServiceDescriptionContainerStyles,
} from "../../styles/servicesStyles";
import ToothGemsImg from "../../assets/tooth-gems.png";
import GoldenToothGemsImg from "../../assets/golden-tooth-gems.png";
import ServicePriceContainer from "./ServicePriceContainer";
import ImageBox from "../ImageBox";
import { theme } from "../../theme/themeConfig";

export default function GemService() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ ...serviceStyles, paddingTop: "0.75rem" }}>
      <Box sx={gemServiceDescriptionContainerStyles}>
        <Box sx={{ marginLeft: { xs: "0.7rem", md: "1.2rem" } }}>
          <Typography sx={serviceTitleStyles}>
            Tooth gems {"\u2005"}
            <span
              style={{
                textTransform: "none",
                fontSize: isMobile ? "0.7rem" : "1rem",
              }}
            >
              (+$20 for each additional gem)
            </span>
          </Typography>
          <Typography sx={serviceTitleStyles}>Swarovski crystals</Typography>
          <Typography sx={gemServiceSubtitleStyles}>
            <b>Options:</b> semi-permanent (3-12 months), <br />
            temporary (2-7 days)
            <ImageBox
              src={ToothGemsImg}
              sx={{
                position: "absolute",
                width: { xs: "7.5rem", md: "12rem" },
                marginLeft: { xs: "5px", md: "15px" },
              }}
            />
          </Typography>
        </Box>
        <ServicePriceContainer
          price={import.meta.env.VITE_SERVICE_SWAROVSKI_CRYSTALS_PRICE}
        />
      </Box>
      <Box
        sx={{ ...gemServiceDescriptionContainerStyles, marginTop: "0.5rem" }}
      >
        <Box sx={{ marginLeft: { xs: "0.7rem", md: "1.2rem" } }}>
          <ImageBox
            src={GoldenToothGemsImg}
            sx={{
              position: "absolute",
              width: { xs: "7.5rem", md: "12rem" },
              marginLeft: { xs: "5rem", md: "7rem" },
              marginTop: { xs: "1.2rem", md: "1.5rem" },
            }}
          />
          <Typography sx={serviceTitleStyles}>Golden 18K tooth gem</Typography>
          <Typography sx={gemServiceSubtitleStyles}>(permanent)</Typography>
        </Box>
        <ServicePriceContainer
          price={import.meta.env.VITE_SERVICE_GOLDEN_18K_GEM_PRICE}
        />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "0.8rem", md: "1rem" },
          mx: "0.75rem",
          mt: "0.75rem",
        }}
      >
        No drilling. Applied with dental bond and orthodontic composite resin.
        Can be polished off any time as needed.
      </Typography>
      <Button
        variant="contained"
        sx={{ my: "1rem" }}
        href={
          isMobile
            ? `sms:+16475141552?body=${encodeURIComponent(
                "Hello! I'd like to book an appointment for Tooth gems",
              )}`
            : "https://www.instagram.com/apollonia_whitening"
        }
      >
        BOOK NOW
      </Button>
    </Box>
  );
}
