import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { headerList } from "../lists/headerList";
import { Link as RouterLink } from "react-router-dom";
import { socialMediaist } from "../lists/socialMediaList";
import ImageBox from "./ImageBox";

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
        Follow
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
                padding: "0.5rem",
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
          <Typography sx={titleStyles}>To book:</Typography>
          <Typography sx={subtitleStyles}>DM on insta or FB</Typography>

          <Typography sx={subtitleStyles}>Call:</Typography>
          <Typography sx={textStyles}>+1 647 514 1552</Typography>

          <Typography sx={subtitleStyles}>Email:</Typography>
          <Typography sx={textStyles}>nshchepaniak@hotmail.com</Typography>
        </Box>
        <List sx={{ listStyle: "none", padding: 0 }}>
          <Typography sx={titleStyles}>Navigate</Typography>
          {headerList.slice(0, 5).map((item) => (
            <ListItem sx={{ padding: 0 }} key={item.title}>
              <Link component={RouterLink} to={item.url} sx={textStyles}>
                {item.title}
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
