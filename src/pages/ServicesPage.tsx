import { Box, Stack, Typography } from "@mui/material";
import { servicesList } from "../lists/servicesList";
import Service from "../components/services/Service";
import GemService from "../components/services/GemService";
import { captionStyles, descriptionStyles } from "../styles/typographyStyles";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import type { StandardServiceItem } from "../types/listsTypes";
import MotionButton from "../motion/components/MotionButton";

export default function ServicesPage() {
  const headingVariant = useResponsiveHeadingVariant();
  const smallHeadingVariant = useResponsiveHeadingVariant("small");

  return (
    <SectionBox component="main">
      <Typography variant={headingVariant}>What we offer</Typography>
      <Typography sx={{ marginBottom: "2rem" }}>
        Whitening, cleaning, and small finishing touches - all at your pace.
      </Typography>
      <Stack spacing={3} sx={{ marginBottom: "2rem", alignItems: "center" }}>
        {servicesList.map((s) => {
          return s.type === "standard" ? (
            <Service item={s as StandardServiceItem} key={s.id} />
          ) : (
            <GemService key={s.id} />
          );
        })}
      </Stack>

      <SectionBox>
        <Stack spacing={2} sx={{ textAlign: "center", paddingY: "3rem" }}>
          <Typography sx={captionStyles}>Not sure yet?</Typography>
          <Typography variant={smallHeadingVariant}>
            Let's talk it through first.
          </Typography>
          <Typography sx={descriptionStyles}>
            No pressure - just send a message and we'll help you figure out the
            right treatment for you.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <MotionButton variant="contained">Text us a question</MotionButton>
            <MotionButton variant="outlined">DM us on Instagram</MotionButton>
          </Box>
        </Stack>
      </SectionBox>
    </SectionBox>
  );
}
