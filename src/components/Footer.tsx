import { Box, Stack, Typography } from "@mui/material";
import { socialMediaist } from "../lists/socialMediaList";
import LogoImg from "/favicon.png";
import { SectionBox } from "./SectionBox";
import ImageBox from "./ImageBox";
import {
  captionStyles,
  descriptionStyles,
  secondaryFont,
  servicePriceStyles,
} from "../styles/typographyStyles";
import { pagesList } from "../lists/pagesList";
import { useTranslation } from "react-i18next";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SocialIconLink } from "./SocialIconLink";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <SectionBox
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "3fr 1fr 1fr" },
          gap: { xs: "2rem", md: "4rem" },
          paddingY: "6rem",
        }}
      >
        <Box sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}>
          <ImageBox src={LogoImg} sx={{ height: "1.3rem" }} />
          <Typography sx={{ ...servicePriceStyles, display: "inline" }}>
            Apollonia
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ...descriptionStyles,
              ...secondaryFont,
              marginTop: "0.45rem",
            }}
          >
            A small Toronto practice for painless whitening and quiet,
            sensitivity-conscious dentistry.
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              ...servicePriceStyles,
              textAlign: "start",
              marginBottom: "0.5rem",
            }}
          >
            Explore
          </Typography>
          <Stack spacing={1} sx={{ alignItems: "start" }}>
            {pagesList.map((item) => (
              <Link
                component={RouterLink}
                to={item.url}
                key={item.titleKey}
                sx={{
                  ...secondaryFont,
                  ...descriptionStyles,
                  textDecoration: "none",
                }}
                variant="body2"
              >
                {t(item.titleKey)}
              </Link>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography sx={{ ...servicePriceStyles, marginBottom: "0.5rem" }}>
            Follow Along
          </Typography>
          <Box
            sx={{
              display: "grid",
              float: "right",
              gridTemplateColumns: {
                xs: "repeat(3, minmax(0, 2.5rem))",
                md: "repeat(4,1fr)",
              },
              gap: { xs: "0.5rem", md: "1rem" },
            }}
          >
            {socialMediaist.map((m) => (
              <SocialIconLink
                key={m.platform}
                component={RouterLink}
                to={m.url}
              >
                <m.icon
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? "secondary.dark"
                        : "secondary.light",
                  }}
                />
              </SocialIconLink>
            ))}
          </Box>
        </Box>
      </SectionBox>

      <SectionBox
        sx={{
          paddingBottom: "1rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Typography sx={{ ...descriptionStyles, ...secondaryFont }}>
          © {new Date().getFullYear()} Apollonia Dental Care. All rights
          reserved.
        </Typography>
        <Typography sx={{ ...descriptionStyles, ...secondaryFont }}>
          821 Eglinton Ave West, Toronto, ON
        </Typography>
      </SectionBox>
      <Typography sx={{ ...captionStyles, textAlign: "center" }}>
        Website developed by Nazar Shchepaniak
      </Typography>
    </Box>
  );
}
