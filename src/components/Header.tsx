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
import { theme } from "../theme/themeConfig";
import HamburgerMenuIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const listItemStyles = (url: string) => ({
    fontSize: "1.2rem",
    paddingX: "0.2rem",
    lineHeight: "1.5rem",
    color: "secondary.contrastText",
    textTransform: "uppercase",
    borderBottom: location.pathname === `/${url}` ? "1px solid white" : "none",
  });

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", md: "center" },
        paddingX: { xs: "1rem", md: 0 },
        alignItems: "center",
        height: { xs: "7.5rem", md: "10rem" },
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
        </List>
      ) : (
        <>
          <ImageBox
            src={HamburgerMenuIcon}
            height={"3rem"}
            onClick={() => setDrawerIsOpen(true)}
          />
          <SwipeableDrawer
            anchor="right"
            open={drawerIsOpen}
            onClose={() => setDrawerIsOpen(false)}
            onOpen={() => setDrawerIsOpen(true)}
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
                <ListItem key={item.titleKey}>
                  <Link component={RouterLink} to={item.url}>
                    <Typography sx={listItemStyles(item.url)}>
                      {t(`${item.titleKey}`)}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </>
      )}
    </Box>
  );
}
