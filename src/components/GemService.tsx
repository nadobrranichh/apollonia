import { Box, Button, Typography } from "@mui/material";
import {
  gemServiceSubtitleStyles,
  serviceStyles,
  serviceTitleStyles,
  gemServiceDescriptionContainerStyles,
} from "../styles/servicesStyles";
import ToothGemsImg from "../assets/tooth-gems.png";
import GoldenToothGemsImg from "../assets/golden-tooth-gems.png";
import ServicePriceContainer from "./ServicePriceContainer";
import ImageBox from "./ImageBox";

export default function GemService() {
  return (
    <Box sx={{ ...serviceStyles, padding: "0.5rem 0" }}>
      <Box sx={gemServiceDescriptionContainerStyles}>
        <Box sx={{ marginLeft: "1.25rem" }}>
          <Typography sx={serviceTitleStyles}>
            Tooth gems {"\u2005"}
            <span style={{ textTransform: "none", fontSize: "1rem" }}>
              (+$20 for each additional gem)
            </span>
          </Typography>
          <Typography sx={serviceTitleStyles}>
            Swarovski crystals {"\u2005"}
          </Typography>
          <Typography sx={gemServiceSubtitleStyles}>
            <b>Options:</b> semi-permanent (3-12 months), <br />
            temporary (2-7 days)
            <ImageBox
              src={ToothGemsImg}
              sx={{
                position: "absolute",
                width: "12rem",
                marginLeft: "1rem",
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
        <Box sx={{ marginLeft: "1.25rem" }}>
          <ImageBox
            src={GoldenToothGemsImg}
            sx={{
              position: "absolute",
              width: "12rem",
              marginLeft: "7rem",
              marginTop: "1.5rem",
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
        href="https://www.instagram.com/apollonia_whitening"
      >
        BOOK NOW
      </Button>
    </Box>
  );
}
