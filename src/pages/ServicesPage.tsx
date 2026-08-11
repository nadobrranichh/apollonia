import { Box, Button, Card, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { servicesList } from "../lists/servicesList";
import Service from "../components/services/Service";
import GemService from "../components/services/GemService";
import { captionStyles, descriptionStyles } from "../styles/typographyStyles";
export default function ServicesPage() {
  return (
    <Box
      component="main"
      sx={{
        padding: "3rem 1.8rem",
      }}
    >
      <Typography variant="h3">What we offer</Typography>
      <Typography sx={{ marginBottom: "2rem" }}>
        Whitening, cleaning, and small finishing touches - all at your pace.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {servicesList.map((s) => {
          return (
            <Fragment key={s.id}>
              <Service item={s} />
              {s.id === 3 && <GemService />}
            </Fragment>
          );
        })}
      </Box>
      <Card
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography sx={captionStyles}>Not sure yet?</Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Let's talk it through first.
        </Typography>
        <Typography sx={descriptionStyles}>
          No pressure - just send a message and we'll help you figure out the
          right treatment for you.
        </Typography>
        <Button variant="contained">Text us a question</Button>
        <Button variant="outlined">DM us on Instagram</Button>
      </Card>
    </Box>
  );
}
