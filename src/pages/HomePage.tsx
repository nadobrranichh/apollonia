import { Box, Button, Link, Stack, Typography } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import WhiteningImg from "../assets/regular-whitening-teeth.png";
import TreatmentCard from "../components/TreatmentCard";
import SwarovskiCrystalsImg from "../assets/tooth-gems.png";
import GoldenToothGemsImg from "../assets/golden-tooth-gems.png";
import WhiteningTrayImg from "../assets/whitening-tray-cropped.png";
import SportsguardImg from "../assets/sportsguard.png";
import MethodAndQuoteSection from "../components/home/MethodAndQuoteSection";
import { Link as RouterLink } from "react-router-dom";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";

export default function HomePage() {
  const headingVariant = useResponsiveHeadingVariant();
  const smallHeadingVariant = useResponsiveHeadingVariant("small");

  return (
    <Box
      component="main"
      sx={{
        overflow: "hidden",
      }}
    >
      <HeroSection />
      <MethodAndQuoteSection />

      {/* signature treatments section */}
      <SectionBox sx={{ paddingTop: "5rem" }}>
        <Typography variant={headingVariant} sx={{ marginBottom: "0.5rem" }}>
          Our{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            signature
          </Box>{" "}
          treatments:
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          Designed for brighter smiles with comfort, precision, and lasting
          results.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr 1fr" },
            gap: "2rem",
          }}
        >
          <TreatmentCard
            imageSrc={WhiteningImg}
            title="Painless Teeth Whitening Treatment"
            description="LED whitening with red light therapy (anti inflammatory), gum
              protection and anti-sensitivity dental grade materials (fluoride
              and hydroxyapatite)."
            price={"165"}
            time="70 min"
          />
          <TreatmentCard
            imageSrc={WhiteningImg}
            title="Professional Teeth Cleaning"
            description="Ultrasonic scaling followed by manual scaling and polishing.Add-ons as per client request: air polishing, AirFlow cleaning and fluoride."
            price={"165"}
            time="70 min"
          />
          <TreatmentCard
            imageSrc={WhiteningImg}
            title="White Spot Lesions Removal"
            description="Icon® Infiltration Concept is used for the microinvasive treatment of white dental lesions. In one patient visit, and with no drilling, Icon® can arrest the progression of early enamel white spot caries-like lesions (demineralization)."
            price={"80"}
            time="70 min"
          />
        </Box>
      </SectionBox>

      {/* dental accesories section */}
      <SectionBox id="accesories" sx={{ paddingTop: "5rem" }}>
        <Typography variant={headingVariant} sx={{ marginBottom: "0.5rem" }}>
          Our dental{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            accessories:
          </Box>
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          Crafted to complement your treatment and support your smile long after
          your appointment.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr 1fr" },
            gap: "2rem",
          }}
        >
          <TreatmentCard
            imageSrc={[SwarovskiCrystalsImg, GoldenToothGemsImg]}
            title="Tooth gems"
            description="Swarovski crystals and 18K tooth gems available for temporary (2-7 days) and semi-permanent (3-12 months) application. The procedure is done with no drilling. Gems are applied with dental bond and orthodontic composite resin. Can be polished off any time as needed. +$20 for each additional gem."
            price={"40-90"}
          />
          <TreatmentCard
            imageSrc={WhiteningTrayImg}
            title="Custom Whitening Trays"
            description="Designed to hold a whitening gel against your teeth, helping to lighten stains and discoloration."
            price={"200"}
          />
          <TreatmentCard
            imageSrc={SportsguardImg}
            title="Sportsguard"
            description="Custom fit protective device worn over the teeth — typically covering the upper teeth — to safeguard the mouth from injuries during sports and physical activities."
            price={"220"}
          />
        </Box>
      </SectionBox>

      <SectionBox
        sx={{
          paddingY: "4rem",
        }}
      >
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <Typography variant={smallHeadingVariant}>Come see us</Typography>
          <Typography sx={{ marginBottom: "1rem" }}>
            Your next smile starts here. Find us at{" "}
            <Link
              component={RouterLink}
              to="/visit"
              sx={{
                color: "secondary.main",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              821 Eglinton Ave West
            </Link>{" "}
            and come say hello.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button variant="contained" component={RouterLink} to="/visit">
              See on the map
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/visit#directions"
            >
              Get directions
            </Button>
          </Stack>
        </Stack>
      </SectionBox>
    </Box>
  );
}
