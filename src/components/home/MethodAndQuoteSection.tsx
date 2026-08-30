import { Box, Typography, Card, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ImageBox from "../ImageBox.tsx";
import FounderImg from "../../assets/IMG_2780-s.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { SectionBox } from "../SectionBox.tsx";
import { useResponsiveHeadingVariant } from "../../hooks/useResponsiveHeadingVariant.ts";
import { MotionBox } from "../../motion/components";
import { fade } from "../../motion/variants.ts";
import MotionButton from "../../motion/components/MotionButton.tsx";
import { useMethodTexts } from "../../hooks/useMethodTexts.ts";
import { useTranslation } from "react-i18next";

export default function MethodSection() {
  const headingVariant = useResponsiveHeadingVariant();
  const { methodStepsList } = useMethodTexts();
  const { t } = useTranslation();

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
          {t("home.method.title")}{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            {t("home.method.titleSpan")}
          </Box>
        </Typography>
        <Typography>
          {t("home.method.subtitle")} <br />
          <Box component="span" sx={{ color: "secondary.main" }}>
            {t("home.method.steps")}
          </Box>
        </Typography>

        <MotionBox
          variants={fade({ withStagger: true })}
          sx={{
            marginBottom: "2rem",
            borderTop: (theme) => `1px solid ${theme.palette.grey[300]}`,
            borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
            "> :not(:last-child)": {
              borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
            },
          }}
        >
          {methodStepsList.map((step, i) => (
            <MotionBox
              variants={fade({ yStart: -20 })}
              key={i}
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
                  {i + 1}.
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
                {step.duration}
              </Typography>
            </MotionBox>
          ))}
        </MotionBox>
        <MotionButton component={RouterLink} to="/method" variant="outlined">
          {t("home.method.button")}
        </MotionButton>
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
            {t("home.quote.text")}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontFamily: "Poppins, Arial",
              fontWeight: "bold",
            }}
          >
            {t("home.quote.name")}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Poppins, Arial",
              color: (theme) => theme.palette.grey[600],
            }}
          >
            {t("home.quote.position")}
          </Typography>
        </Card>
      </Stack>
    </SectionBox>
  );
}
