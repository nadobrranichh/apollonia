import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import i18next from "i18next";
import { captionStyles } from "../styles/typographyStyles";

export default function LanguageToggle() {
  const languages = ["en", "ua"];
  const handleChangeLanguage = (_: any, newLanguage: string | null) => {
    newLanguage && i18next.changeLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={i18next.language}
      onChange={handleChangeLanguage}
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: "3rem",
        padding: "0.2rem",
      }}
    >
      {languages.map((lang) => (
        <ToggleButton
          value={lang}
          key={lang}
          sx={{
            border: "none",
            borderRadius: "2rem !important",
            padding: "0.25rem 0.8rem",
            textTransform: "uppercase",
            color: "text.secondary",
            "&.Mui-selected": {
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{ ...captionStyles, color: "default" }}
          >
            {lang}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
