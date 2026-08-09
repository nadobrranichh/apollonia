import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ApolloniaLogo from "../assets/logo-dark.png";
import { headerList } from "../lists/headerList";
import { useLocation } from "react-router-dom";
import ImageBox from "./ImageBox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const isMd = useMediaQuery("(min-width: 1000px)");

  const listItemStyles = (url: string) => ({
    paddingX: "0.2rem",
    textTransform: "uppercase",
    borderBottom: location.pathname === `/${url}` ? "1px solid white" : "none",
  });

  function toggleDrawer() {
    setDrawerIsOpen((prev) => !prev);
  }

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: isMd ? "center" : "space-between",
        alignItems: "center",
        paddingX: isMd ? 0 : "1rem",
        borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
        background: (theme) => alpha(theme.palette.background.default, 0.85),
        backdropFilter: "blur(3px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: isMd ? "10rem" : "6rem",
      }}
    >
      <ImageBox
        src={ApolloniaLogo}
        alt="logo"
        height="70%"
        sx={{ marginRight: { xs: 0, md: "1rem" } }}
      />
      {isMd ? (
        <List sx={{ display: "flex", gap: "0.6vw" }}>
          {headerList.map((item) => (
            <ListItem key={item.titleKey}>
              <Link
                component={RouterLink}
                to={item.url}
                sx={{ textDecoration: "none" }}
              >
                <Typography sx={listItemStyles(item.url)}>
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
          <IconButton onClick={toggleDrawer}>
            <MenuIcon
              sx={{
                fontSize: "2.5rem",
                color: (theme) => theme.palette.primary.main,
              }}
            />
          </IconButton>

          <SwipeableDrawer
            anchor="right"
            open={drawerIsOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            transitionDuration={{ enter: 200, exit: 200 }}
            slotProps={{
              backdrop: { sx: { background: "transparent" } },
              paper: { sx: { bgcolor: "secondary.dark" } },
            }}
          >
            <List
              sx={{
                width: "200px",
                paddingTop: "10%",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {headerList.map((item) => (
                <ListItem key={item.titleKey} onClick={toggleDrawer}>
                  <Link component={RouterLink} to={item.url}>
                    <Typography sx={listItemStyles(item.url)}>
                      {t(`${item.titleKey}`)}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
              <ListItem key="language-toggle">
                <LanguageToggle />
              </ListItem>
            </List>
          </SwipeableDrawer>
        </>
      )}
    </Box>
  );
}
