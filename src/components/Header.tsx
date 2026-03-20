import { Box, Typography, Link, List, ListItem } from "@mui/material";
import ApolloniaLogo from "../assets/logo.png";
import { headerList } from "../lists/headerList";
import { useLocation } from "react-router-dom";
import ImageBox from "./ImageBox";

export default function Header() {
  const location = useLocation();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10rem",
        bgcolor: "secondary.main",
      }}
    >
      <ImageBox
        src={ApolloniaLogo}
        alt="logo"
        height="70%"
        sx={{ marginRight: "1vw" }}
      />
      <List sx={{ display: "flex", gap: "0.6vw" }}>
        {headerList.map((item) => (
          <ListItem key={item.title}>
            <Link href={item.url} sx={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "secondary.contrastText",
                  textTransform: "uppercase",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  borderBottom: location.pathname === `/${item.url}` ? 1 : 0,
                  borderColor:
                    location.pathname === `/${item.url}`
                      ? "secondary.contrastText"
                      : "none",
                }}
              >
                {item.title}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
