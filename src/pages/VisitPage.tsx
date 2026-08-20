import { Box, Typography, Link, type Theme, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import { captionStyles } from "../styles/typographyStyles";
import { MotionBox } from "../motion/components";
import { fade } from "../motion/variants";
import MotionStack from "../motion/components/MotionStack";
import MotionButton from "../motion/components/MotionButton";

const directions = [
  {
    id: 1,
    title: "Subway",
    subtitle: "Line 1 to Eglinton West, 10 min walk east.",
  },
  {
    id: 2,
    title: "Parking",
    subtitle: "Green P at Forest Hill Village, 4 min away.",
  },
  {
    id: 3,
    title: "Bike",
    subtitle: "Inside rack available, bring it up with you.",
  },
];

const weeklyHours = [
  { id: 1, days: "Mon-Wed", time: "9AM - 7PM" },
  { id: 2, days: "Thu-Fri", time: "9AM - 5PM" },
  { id: 3, days: "Sat", time: "10AM - 4PM" },
  { id: 4, days: "Sun", time: "Closed" },
];

const subtextStyles = {
  fontSize: "0.7rem",
  textTransform: "uppercase",
  color: (theme: Theme) => theme.palette.grey[500],
  fontFamily: "Poppins, Arial",
};

export default function LocationPage() {
  const headingVariant = useResponsiveHeadingVariant();
  return (
    <SectionBox component="main">
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant={headingVariant}>Where to find us</Typography>
        <Typography>
          Your smile deserves a space designed around you. Come visit us and
          discover our treatments in person.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: { xs: "2rem", md: "4rem" },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.1156222969039!2d-79.42507180000003!3d43.7009369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc3ae490fe4b65%3A0xc5ee99956777f13e!2sApollonia%20Preventative%20Dental%20Care!5e0!3m2!1sen!2sua!4v1744016825863!5m2!1sen!2sua"
          style={{
            border: "none",
            height: "100%",
            width: "100%",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-embed"
        ></iframe>
        <MotionStack spacing={4} variants={fade({ withStagger: true })}>
          <MotionBox
            variants={fade()}
            id="directions"
            sx={{
              scrollMarginTop: "8.5rem",
              display: "flex",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Typography variant="body2" sx={subtextStyles}>
                Address:
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                821 Eglinton Ave West
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                Toronto, ON M5N 1E6
              </Typography>
              <Link
                component={RouterLink}
                sx={{ ...captionStyles, color: "secondary.main" }}
                to="https://maps.app.goo.gl/ZMySaD6bfVxsA8gp9"
              >
                Open in Google Maps
              </Link>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography variant="body2" sx={subtextStyles}>
                Reach out:
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                +1 647 514 1552
              </Typography>
              <Typography sx={{ ...captionStyles, color: "primary.main" }}>
                @apollonia_whitening
              </Typography>
            </Box>
          </MotionBox>
          <MotionBox variants={fade({ withStagger: true })}>
            <Typography variant="body2" sx={subtextStyles}>
              Getting here:
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: "0.5rem",
              }}
            >
              {directions.map((d) => (
                <Box key={d.id}>
                  <Typography variant="body2">{d.title}</Typography>
                  <Typography sx={captionStyles}>{d.subtitle}</Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
          <MotionBox variants={fade({ withStagger: true })}>
            <Typography variant="body2" sx={subtextStyles}>
              Weekly hours:
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4,1fr)" },
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              {weeklyHours.map((h) => (
                <Box key={h.id}>
                  <Typography sx={subtextStyles}>{h.days}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ ...subtextStyles, color: "text.primary" }}
                  >
                    {h.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </MotionStack>
      </Box>
      <Stack spacing={2} sx={{ textAlign: "center", paddingY: "4rem" }}>
        <Typography sx={captionStyles}>Can't make it in yet?</Typography>
        <Typography variant="h4">Say hello first.</Typography>
        <Stack
          spacing={1}
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "center",
          }}
        >
          <MotionButton variant="contained">DM on instagram</MotionButton>
          <MotionButton variant="outlined">Text an SMS</MotionButton>
        </Stack>
      </Stack>
    </SectionBox>
  );
}
