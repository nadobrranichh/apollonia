import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  useMediaQuery,
  SwipeableDrawer,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ApolloniaLogo from "../assets/logo.png";
import { headerList } from "../lists/headerList";
import { useLocation } from "react-router-dom";
import ImageBox from "./ImageBox";
import HamburgerMenuIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const isMd = useMediaQuery("(min-width: 1000px)");

  const listItemStyles = (url: string) => ({
    fontSize: "1.2rem",
    paddingX: "0.2rem",
    lineHeight: "1.5rem",
    color: "secondary.contrastText",
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
        paddingX: isMd ? 0 : "1rem",
        alignItems: "center",
        height: isMd ? "10rem" : "7.5rem",
        bgcolor: "secondary.main",
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
          <ImageBox
            src={HamburgerMenuIcon}
            height={"3rem"}
            onClick={toggleDrawer}
          />
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
