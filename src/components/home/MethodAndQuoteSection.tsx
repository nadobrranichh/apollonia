import { Box, Typography, Button, Card, Stack } from "@mui/material";
import { methodStepsList } from "../../lists/methodLists.tsx";
import { Link as RouterLink } from "react-router-dom";
import ImageBox from "../ImageBox.tsx";
import FounderImg from "../../assets/IMG_2780-s.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { SectionBox } from "../SectionBox.tsx";
import { useResponsiveHeadingVariant } from "../../hooks/useResponsiveHeadingVariant.ts";

export default function MethodSection() {
  const headingVariant = useResponsiveHeadingVariant();

  return (
    <SectionBox
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "3rem",
      }}
    >
      <Box>
        <Typography variant={headingVariant}>
          Whitening without the{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            flinch.
          </Box>
        </Typography>
        <Typography>
          Most whitening relies on high-strength peroxide. Ours pairs red-light
          therapy with gum sealantsand hydroxyapatite to brighten teeth with
          minimal sensitivity. <br />
          <Box component="span" sx={{ color: "secondary.main" }}>
            Here's how it works:
          </Box>
        </Typography>

        <Box
          sx={{
            marginBottom: "2rem",
            borderTop: (theme) => `1px solid ${theme.palette.grey[300]}`,
            borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
            "> :not(:last-child)": {
              borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
            },
          }}
        >
          {methodStepsList.map((step) => (
            <Box
              key={step.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "background.default",
                paddingY: "0.5rem",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "secondary.main",
                    display: "inline",
                    marginRight: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {step.id}.
                </Typography>
                <Typography variant="body2" sx={{ display: "inline" }}>
                  {step.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins, Arial",
                  alignSelf: "end",
                  color: (theme) => theme.palette.grey[500],
                }}
                variant="body2"
              >
                {step.time}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button component={RouterLink} to="/method" variant="outlined">
          Read the full method
        </Button>
      </Box>

      <Stack spacing={4} sx={{ alignItems: "center", position: "relative" }}>
        <ImageBox
          src={FounderImg}
          sx={{
            borderRadius: "2rem",
            width: { xs: "100%", sm: "90%" },
            maxWidth: "35rem",
            boxShadow: (theme) => `0px 0px 1rem ${theme.palette.grey[500]}`,
          }}
        />
        <Card
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { md: "70%" },
            left: { md: "4rem" },
            width: { xs: "100%", lg: "90%" },
            rotate: "-1deg",
            padding: "2rem",
            overflow: "visible",
            maxWidth: "35rem",
          }}
        >
          <FormatQuoteIcon
            sx={{
              color: "secondary.main",
              position: "absolute",
              transform: "translate(-1rem, -3.5rem)",
              fontSize: "3.3rem",
              opacity: "70%",
            }}
          />
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", marginBottom: "1rem" }}
          >
            I trained on patients who could feel everything. I wouldn't put a
            single client through that — so I built a protocol that doesn't ask
            them to.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontFamily: "Poppins, Arial",
              fontWeight: "bold",
            }}
          >
            Nataliia Shchepaniak
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Poppins, Arial",
              color: (theme) => theme.palette.grey[600],
            }}
          >
            Founder, Lead Hygienist
          </Typography>
        </Card>
      </Stack>
    </SectionBox>
  );
}
