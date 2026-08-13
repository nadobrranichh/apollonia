import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import ImageBox from "../components/ImageBox";
import FounderImg from "../assets/IMG_2779-s.jpg";
import { captionStyles, descriptionStyles } from "../styles/typographyStyles";
import {
  bioList,
  materialsList,
  methodStepsList,
  rulesList,
} from "../lists/methodLists";
import RoomImg from "../assets/IMG_2777-s.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { convertToRoman } from "../../utils/convertToRoman";
import { Link as RouterLink } from "react-router-dom";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";

export default function MethodPage() {
  const headingVariant = useResponsiveHeadingVariant();
  const smallHeadingVariant = useResponsiveHeadingVariant("small");
  return (
    <SectionBox component="main">
      <Stack spacing={10} component="main" sx={{ padding: "3rem 1.8rem" }}>
        <Box
          component="section"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: "2rem", lg: "5rem" },
          }}
        >
          <Stack sx={{ justifyContent: "center" }}>
            <Typography variant={headingVariant}>
              Whitening, as it should have been{" "}
              <Box component="span" sx={{ textDecoration: "underline" }}>
                all along.
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins,Arial" }}>
              I'm Nataliia, the only hygienist in this room, the inventor of the
              protocol on the menu, and the person who'll lower the chair for
              you. Here is what I believe - and why.
            </Typography>
          </Stack>
          <Box>
            <ImageBox
              src={FounderImg}
              sx={{
                width: "100%",
                maxHeight: { xs: "25rem", lg: "none" },
                borderRadius: "0.5rem",
                objectFit: "cover",
                height: { lg: "40rem" },
              }}
            />
            <Typography sx={{ ...captionStyles, textAlign: "center" }}>
              Nataliia Shchepaniak &bull; Founder
            </Typography>
          </Box>
        </Box>

        <Box component="section">
          <Typography variant={smallHeadingVariant}>
            Four quiet rules:
          </Typography>
          <Box
            sx={{
              paddingTop: "2rem",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(4,1fr)" },
              gap: "2rem",
            }}
          >
            {[
              rulesList.map((r) => (
                <Stack spacing={1} key={r.id}>
                  <Typography variant="h5" sx={{ color: "secondary.main" }}>
                    {r.id}.
                  </Typography>
                  <Typography>{r.title}</Typography>
                  <Typography sx={captionStyles}>{r.description}</Typography>
                </Stack>
              )),
            ]}
          </Box>
        </Box>

        <Box component="section">
          <Typography variant={smallHeadingVariant}>
            The treatment, step by step:
          </Typography>
          <Box
            sx={{
              paddingTop: "2rem",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(3,1fr)",
              },
              gap: "2rem",
            }}
          >
            {[
              methodStepsList.map((step) => (
                <Stack spacing={0.5} key={step.id} sx={{ maxWidth: "20rem" }}>
                  <Typography sx={{ color: "secondary.main" }}>
                    {convertToRoman(step.id)}.
                  </Typography>
                  <Typography>{step.title}</Typography>
                  <Typography sx={captionStyles}>{step.description}</Typography>
                  <Typography
                    sx={{
                      ...captionStyles,
                      paddingTop: "1rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.time}
                  </Typography>
                </Stack>
              )),
            ]}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", xl: "1fr 2fr" },
            gap: "3rem",
          }}
          component="section"
        >
          <Box>
            <Typography variant={smallHeadingVariant}>
              Six things, chosen carefully.
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins,Arial" }}>
              We don't carry a long shelf. Every material in the operatory
              earned its place because it does one thing well - and doesn't ask
              you to feel it.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: "1rem",
            }}
          >
            {materialsList.map((m) => (
              <Stack
                spacing={1}
                key={m.id}
                sx={{
                  border: (theme) => `1px solid ${theme.palette.grey[300]}`,
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "secondary.main",
                    fontStyle: "normal",
                  }}
                >
                  {m.marker}
                </Typography>
                <Typography>{m.title}</Typography>
                <Typography sx={captionStyles}>{m.description}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>

        <Box
          component="section"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: "3rem",
          }}
        >
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Typography variant={smallHeadingVariant}>
                A short biography.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                Nataliia was born and trained in Ukraine, then completed her
                dental hygiene qualifications in Canada. She spent her first
                three Canadian years working chairs that ran on volume - six
                minutes, fluoride, next — and learned mostly what she didn't
                want to do.
                <br />
                <br /> In 2019 she opened a single-chair room on Eglinton, three
                blocks west of Forest Hill subway, and started writing protocols
                by hand on graph paper. Apollonia was the protocol she stopped
                throwing out.
                <br />
                <br /> Today the studio sees a few patients a day, by
                reservation, with the same hygienist every visit. She prefers it
                that way; her patients seem to as well.
              </Typography>
            </Stack>
            <Divider />
            <Stack spacing={3}>
              {[
                bioList.map((b) => (
                  <Box key={b.id}>
                    <Typography
                      sx={{ ...captionStyles, textTransform: "uppercase" }}
                    >
                      {b.caption}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ...descriptionStyles,
                        fontFamily: "Poppins,Arial",
                        color: "primary.main",
                      }}
                    >
                      {b.text}
                    </Typography>
                  </Box>
                )),
              ]}
            </Stack>
          </Stack>
          <ImageBox
            src={RoomImg}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </Box>

        <Stack
          component="section"
          spacing={3}
          sx={{
            alignItems: "center",
            textAlign: "center",
            paddingY: { xs: "3rem", xl: "10rem" },
          }}
        >
          <FormatQuoteIcon sx={{ fontSize: { xs: "2rem", lg: "5rem" } }} />
          <Typography variant={headingVariant}>
            The opposite of fast isn't slow.
            <br />
            <Box component="span" sx={{ color: "secondary.main" }}>
              It's deliberate.
            </Box>
          </Typography>
          <Typography sx={{ ...captionStyles, textTransform: "uppercase" }}>
            - On the door of the operatory
          </Typography>
        </Stack>

        <Box component="section" sx={{ paddingY: "2rem" }}>
          <Card
            sx={{
              padding: {
                lg: "5rem",
              },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
              gap: "1rem",
            }}
          >
            <Stack
              spacing={2}
              sx={{ textAlign: { xs: "center", lg: "start" } }}
            >
              <Typography
                sx={{
                  ...captionStyles,
                  textTransform: "uppercase",
                }}
              >
                Curious?
              </Typography>
              <Typography variant={smallHeadingVariant}>
                Come see the room.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                Five minutes is enough - drop in for a free shade reading. We'll
                write down a target and you can leave with it.
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ justifyContent: "center" }}>
              <Button variant="contained">Book a reading</Button>
              <Button component={RouterLink} to="/services" variant="outlined">
                See the menu
              </Button>
            </Stack>
          </Card>
        </Box>
      </Stack>
    </SectionBox>
  );
}
