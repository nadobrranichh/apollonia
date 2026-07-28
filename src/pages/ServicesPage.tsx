import { Box, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { servicesList } from "../lists/servicesList";
import Service from "../components/services/Service";
import GemService from "../components/services/GemService";
import { pageTitleStyle } from "../styles/typographyStyles";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();

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
      <Typography sx={pageTitleStyle}>{t("services.title")}</Typography>
      <Box
        sx={{
          width: { xs: "100%", sm: "75%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {servicesList.map((s) => {
          return (
            <Fragment key={s.id}>
              <Service item={s} />
              {s.id === 3 && <GemService />}
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
