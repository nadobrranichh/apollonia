import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import ImageBox from "../components/ImageBox";
import FounderImg from "../assets/IMG_2779-s.jpg";
import { captionStyles, descriptionStyles } from "../styles/typographyStyles";
import { materialsList } from "../lists/materialsList";
import RoomImg from "../assets/IMG_2777-s.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { convertToRoman } from "../../utils/convertToRoman";
import { Link as RouterLink } from "react-router-dom";
import { SectionBox } from "../components/SectionBox";
import { useResponsiveHeadingVariant } from "../hooks/useResponsiveHeadingVariant";
import { MotionBox } from "../motion/components";
import MotionStack from "../motion/components/MotionStack";
import { fade } from "../motion/variants";
import MotionButton from "../motion/components/MotionButton";
import { useTranslation } from "react-i18next";
import { useMethodTexts } from "../hooks/useMethodTexts";

export default function MethodPage() {
  const headingVariant = useResponsiveHeadingVariant();
  const smallHeadingVariant = useResponsiveHeadingVariant("small");
  const { t } = useTranslation();
  const { bioList, materialsTexts, methodStepsList, rulesList } =
    useMethodTexts();

  return (
    <Box component="main">
      <Stack spacing={15} sx={{ paddingY: { xs: "5rem", lg: "5rem" } }}>
        <SectionBox
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: "2rem", lg: "5rem" },
          }}
        >
          <Stack sx={{ justifyContent: "center" }}>
            <Typography variant={headingVariant}>
              {t("method.hero.title")}{" "}
              <Box component="span" sx={{ textDecoration: "underline" }}>
                {t("method.hero.titleSpan")}
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins,Arial" }}>
              {t("method.hero.subtitle")}
            </Typography>
          </Stack>
          <Box>
            <ImageBox
              src={FounderImg}
              sx={{
                width: "100%",
                minHeight: { xl: "40rem" },
                maxHeight: { xs: "25rem", lg: "none" },
                borderRadius: "0.5rem",
                objectFit: "cover",
                height: { lg: "40rem" },
              }}
            />
            <Typography sx={{ ...captionStyles, textAlign: "center" }}>
              {t("method.hero.imageSubText")}
            </Typography>
          </Box>
        </SectionBox>

        <SectionBox>
          <Typography variant={smallHeadingVariant}>
            {t("method.rules.title")}
          </Typography>
          <MotionBox
            variants={fade({ withStagger: true })}
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              paddingTop: "2rem",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(4,1fr)" },
              gap: "2rem",
            }}
          >
            {rulesList.map((rule, i) => (
              <MotionStack spacing={1} key={i}>
                <Typography variant="h5" sx={{ color: "secondary.main" }}>
                  {i + 1}.
                </Typography>
                <Typography>{rule.title}</Typography>
                <Typography sx={captionStyles}>{rule.description}</Typography>
              </MotionStack>
            ))}
          </MotionBox>
        </SectionBox>

        <SectionBox>
          <Typography variant={smallHeadingVariant}>
            {t(`method.treatment.title`)}
          </Typography>
          <MotionBox
            variants={fade({ withStagger: true })}
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
              methodStepsList.map((step, i) => (
                <MotionStack spacing={0.5} key={i} sx={{ maxWidth: "20rem" }}>
                  <Typography sx={{ color: "secondary.main" }}>
                    {convertToRoman(i + 1)}.
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
                    {step.duration}
                  </Typography>
                </MotionStack>
              )),
            ]}
          </MotionBox>
        </SectionBox>

        <SectionBox
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", xl: "1fr 2fr" },
            gap: "3rem",
          }}
        >
          <Box>
            <Typography variant={smallHeadingVariant}>
              {t("method.materials.title")}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins,Arial" }}>
              {t("method.materials.subtitle")}
            </Typography>
          </Box>
          <MotionBox
            variants={fade({ withStagger: true })}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: "1rem",
            }}
          >
            {materialsList.map((m, i) => (
              <MotionStack
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
                <Typography>{materialsTexts[i].label}</Typography>
                <Typography sx={captionStyles}>
                  {materialsTexts[i].caption}
                </Typography>
              </MotionStack>
            ))}
          </MotionBox>
        </SectionBox>

        <SectionBox
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
                {t("method.biography.title")}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                {t("method.biography.text.paragraph1")}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                {t("method.biography.text.paragraph2")}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                {t("method.biography.text.paragraph3")}
              </Typography>
            </Stack>
            <Divider />
            <Stack spacing={3}>
              {[
                bioList.map((b, i) => (
                  <Box key={i}>
                    <Typography
                      sx={{ ...captionStyles, textTransform: "uppercase" }}
                    >
                      {b.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ...descriptionStyles,
                        fontFamily: "Poppins,Arial",
                        color: "primary.main",
                      }}
                    >
                      {b.value}
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
        </SectionBox>

        <SectionBox>
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              textAlign: "center",
              paddingY: { xs: "3rem", xl: "10rem" },
            }}
          >
            <FormatQuoteIcon sx={{ fontSize: { xs: "2rem", lg: "5rem" } }} />
            <Typography variant={headingVariant}>
              {t("method.quote.title")}
              <br />
              <Box component="span" sx={{ color: "secondary.main" }}>
                {t("method.quote.titleSpan")}
              </Box>
            </Typography>
            <Typography sx={{ ...captionStyles, textTransform: "uppercase" }}>
              - {t("method.quote.caption")}
            </Typography>
          </Stack>
        </SectionBox>

        <SectionBox>
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
                {t("method.cta.eyebrowLabel")}
              </Typography>
              <Typography variant={smallHeadingVariant}>
                {t("method.cta.title")}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                {t("method.cta.description")}
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ justifyContent: "center" }}>
              <MotionButton variant="contained">
                {t("method.cta.buttons.book")}
              </MotionButton>
              <MotionButton
                component={RouterLink}
                to="/services"
                variant="outlined"
              >
                {t("method.cta.buttons.menu")}
              </MotionButton>
            </Stack>
          </Card>
        </SectionBox>
      </Stack>
    </Box>
  );
}
