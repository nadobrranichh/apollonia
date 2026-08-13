import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ApolloniaLogo from "../assets/logo-dark.png";
import { headerList } from "../lists/headerList";
import { useLocation } from "react-router-dom";
import ImageBox from "./ImageBox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { alpha, useTheme, type Theme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useActiveThemeStore } from "../store/active-theme-store";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const isLg = useMediaQuery(useTheme().breakpoints.up("lg"));
  const { activeTheme, toggleActiveTheme } = useActiveThemeStore();

  const listItemStyles = (url: string) => ({
    textTransform: "uppercase",
    fontWeight: "bold",
    borderBottom: location.pathname === `/${url}` ? "1px solid" : "none",
  });

  function toggleDrawer() {
    setDrawerIsOpen((prev) => !prev);
  }

  const iconStyles = {
    fontSize: "1.8rem",
    color: (theme: Theme) => theme.palette.primary.main,
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: isLg ? "center" : "space-between",
        alignItems: "center",
        paddingX: isLg ? 0 : "1rem",
        borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
        background: (theme) => alpha(theme.palette.background.default, 0.85),
        backdropFilter: "blur(3px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "6rem",
      }}
    >
      <ImageBox
        src={ApolloniaLogo}
        alt="logo"
        height="70%"
        sx={{ marginRight: { xs: 0, md: "1rem" } }}
      />
      {isLg ? (
        <List sx={{ display: "flex", gap: "0.6vw" }}>
          {headerList.map((item) => (
            <ListItem key={item.titleKey}>
              <Link
                component={RouterLink}
                to={item.url}
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{ ...listItemStyles(item.url), color: "primary.main" }}
                >
                  {t(`${item.titleKey}`)}
                </Typography>
              </Link>
            </ListItem>
          ))}
          <ListItem key="language-toggle">
            <LanguageToggle />
          </ListItem>
        </List>
      ) : (
        <>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <LanguageToggle />
            <IconButton onClick={toggleActiveTheme}>
              {activeTheme === "light" ? (
                <DarkModeIcon sx={iconStyles} />
              ) : (
                <LightModeIcon sx={iconStyles} />
              )}
            </IconButton>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={iconStyles} />
            </IconButton>
          </Box>

          <SwipeableDrawer
            anchor="right"
            open={drawerIsOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            transitionDuration={200}
            slotProps={{
              paper: {
                sx: { backgroundColor: "primary.main" },
              },
            }}
          >
            <Stack
              spacing={3}
              sx={{
                width: "12rem",
                paddingTop: "3rem",
              }}
            >
              {headerList.map((item) => (
                <Link
                  key={item.titleKey}
                  component={RouterLink}
                  to={item.url}
                  sx={{ alignSelf: "flex-start" }}
                  onClick={toggleDrawer}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      ...listItemStyles(item.url),
                      color: "primary.contrastText",
                      marginLeft: "1rem",
                    }}
                  >
                    {t(`${item.titleKey}`)}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </SwipeableDrawer>
        </>
      )}
    </Box>
  );
}
