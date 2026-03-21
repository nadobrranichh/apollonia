import { Box, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { servicesList } from "../lists/servicesList";
import Service from "../components/Service";
import GemService from "../components/GemService";
import { pageTitleStyle } from "../styles/typographyStyles";

export default function ServicesPage() {
  return (
    <Box
      component="main"
      sx={{
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 0",
      }}
    >
      <Typography sx={pageTitleStyle}>Services</Typography>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {servicesList.map((s, i) => {
          return (
            <Fragment key={s.id}>
              <Service item={s} />
              {i === 5 && <GemService />}
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
