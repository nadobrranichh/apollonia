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

export default function MethodPage() {
  return (
    <Stack spacing={10} component="main" sx={{ padding: "3rem 1.8rem" }}>
      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: "3rem",
        }}
      >
        <Box>
          <Typography variant="h3">
            Whitening, as it should have been{" "}
            <Box component="span" sx={{ textDecoration: "underline" }}>
              all along.
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Poppins,Arial" }}>
            I'm Nataliia, the only hygienist in this room, the inventor of the
            protocol on the menu, and the person who'll lower the chair for you.
            Here is what I believe - and why.
          </Typography>
        </Box>
        <Box>
          <ImageBox
            src={FounderImg}
            sx={{
              width: "100%",
              maxHeight: "25rem",
              borderRadius: "1rem",
              objectFit: "cover",
            }}
          />
          <Typography sx={{ ...captionStyles, textAlign: "center" }}>
            Nataliia Shchepaniak &bull; Founder
          </Typography>
        </Box>
      </Box>

      <Box component="section">
        <Typography variant="h5">Four quiet rules:</Typography>
        <Stack sx={{ paddingTop: "2rem" }} spacing={4}>
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
        </Stack>
      </Box>

      <Box component="section">
        <Typography variant="h5">The treatment, step by step:</Typography>
        <Stack sx={{ paddingTop: "2rem" }} spacing={5}>
          {[
            methodStepsList.map((step) => (
              <Stack spacing={0.5} key={step.id}>
                <Typography sx={{ color: "secondary.main" }}>
                  {convertToRoman(step.id)}.
                </Typography>
                <Typography>{step.title}</Typography>
                <Typography sx={captionStyles}>{step.description}</Typography>
                <Typography
                  sx={{ ...captionStyles, textTransform: "uppercase" }}
                >
                  {step.time}
                </Typography>
              </Stack>
            )),
          ]}
        </Stack>
      </Box>

      <Stack spacing={3} component="section">
        <Typography variant="h5">Six things, chosen carefully.</Typography>
        <Typography variant="body2" sx={{ fontFamily: "Poppins,Arial" }}>
          We don't carry a long shelf. Every material in the operatory earned
          its place because it does one thing well - and doesn't ask you to feel
          it.
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
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
      </Stack>

      <Box
        component="section"
        sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
      >
        <ImageBox
          src={RoomImg}
          sx={{
            height: "26rem",
            width: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
        <Stack spacing={3}>
          <Stack spacing={2}>
            <Typography variant="h5">A short biography.</Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
              Nataliia was born and trained in Ukraine, then completed her
              dental hygiene qualifications in Canada. She spent her first three
              Canadian years working chairs that ran on volume - six minutes,
              fluoride, next — and learned mostly what she didn't want to do.
              <br />
              <br /> In 2019 she opened a single-chair room on Eglinton, three
              blocks west of Forest Hill subway, and started writing protocols
              by hand on graph paper. Apollonia was the protocol she stopped
              throwing out.
              <br />
              <br /> Today the studio sees a few patients a day, by reservation,
              with the same hygienist every visit. She prefers it that way; her
              patients seem to as well.
            </Typography>
          </Stack>
          <Divider />
          <Box
            sx={{
              // marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
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
          </Box>
        </Stack>
      </Box>

      <Stack
        component="section"
        spacing={3}
        sx={{ alignItems: "center", textAlign: "center" }}
      >
        <FormatQuoteIcon />
        <Typography variant="h4">
          The opposite of fast isn't slow.{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            It's deliberate.
          </Box>
        </Typography>
        <Typography sx={{ ...captionStyles, textTransform: "uppercase" }}>
          - On the door of the operatory
        </Typography>
      </Stack>

      <Box component="section" sx={{ paddingY: "2rem" }}>
        <Card sx={{ textAlign: "center" }}>
          <Stack spacing={2}>
            <Typography
              sx={{
                ...captionStyles,
                textTransform: "uppercase",
              }}
            >
              Curious?
            </Typography>
            <Typography variant="h5">Come see the room.</Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
              Five minutes is enough - drop in for a free shade reading. We'll
              write down a target and you can leave with it.
            </Typography>
            <Stack spacing={1}>
              <Button variant="contained">Book a reading</Button>
              <Button component={RouterLink} to="/services" variant="outlined">
                See the menu
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Stack>
  );
}
