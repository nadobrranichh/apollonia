import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import i18next from "i18next";
import GreatBritainFlagImg from "../assets/great-britain-flag.png";
import UkraineFlagImg from "../assets/ukraine-flag.png";
import ImageBox from "./ImageBox";

export default function LanguageToggle() {
  const handleChangeLanguage = (_: any, newLanguage: string | null) => {
    newLanguage && i18next.changeLanguage(newLanguage);
  };
  return (
    <ToggleButtonGroup
      exclusive
      value={i18next.language}
      onChange={handleChangeLanguage}
    >
      <ToggleButton value="en" disableRipple>
        <ImageBox src={GreatBritainFlagImg} width="1.5rem" />
      </ToggleButton>
      <ToggleButton value="uk" disableRipple>
        <ImageBox src={UkraineFlagImg} width="1.5rem" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
