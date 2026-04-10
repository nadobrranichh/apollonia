import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { headerList } from "../lists/headerList";
import { Link as RouterLink } from "react-router-dom";
import { socialMediaist } from "../lists/socialMediaList";
import ImageBox from "./ImageBox";
import { useTranslation } from "react-i18next";

const titleStyles = {
  fontFamily: "Poppins,Arial",
  fontWeight: 600,
  fontSize: "1.2rem",
  textTransform: " uppercase",
  color: "secondary.contrastText",
  padding: 0,
};

const subtitleStyles = {
  fontFamily: "Poppins,Arial",
  fontSize: "0.9rem",
  lineHeight: "1.4rem",
  color: "secondary.contrastText",
  padding: 0,
};

const textStyles = {
  fontFamily: "Poppins, Arial",
  fontSize: "0.9rem",
  lineHeight: "1.4rem",
  textDecoration: "none",
  color: "secondary.light",
  padding: 0,
};

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "secondary.dark",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <Typography component="p" sx={{ ...titleStyles, marginBottom: "0.5rem" }}>
        {t("footer.follow")}
      </Typography>
      <Box
        sx={{
          width: "65%",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {socialMediaist.map((item) => {
          return (
            <Link
              component={RouterLink}
              key={item.platform}
              to={item.url}
              target="_blank"
              sx={{
                width: "3rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "secondary.light",
                borderRadius: "50%",
                transition: "background-color 0.3s",
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "secondary.contrastText",
                },
              }}
            >
              <ImageBox src={item.icon} height="2rem" width="2rem" />
            </Link>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", gap: "2.5rem", marginTop: "1.5rem" }}>
        <Box>
          <Typography sx={titleStyles}>{t("footer.book")}:</Typography>
          <Typography sx={subtitleStyles}>{t("footer.dm")}</Typography>

          <Typography sx={subtitleStyles}>{t("footer.call")}:</Typography>
          <Typography sx={textStyles}>+1 647 514 1552</Typography>

          <Typography sx={subtitleStyles}>{t("footer.email")}:</Typography>
          <Typography sx={textStyles}>nshchepaniak@hotmail.com</Typography>
        </Box>
        <List sx={{ listStyle: "none", padding: 0 }}>
          <Typography sx={titleStyles}>{t("footer.navigate")}</Typography>
          {headerList.slice(0, 5).map((item) => (
            <ListItem sx={{ padding: 0 }} key={item.titleKey}>
              <Link component={RouterLink} to={item.url} sx={textStyles}>
                {t(`${item.titleKey}`)}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography
        sx={{
          ...textStyles,
          marginTop: "2rem",
        }}
      >
        © Apollonia, {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
