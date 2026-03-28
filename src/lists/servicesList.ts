import RegularWhiteningTeethImg from "../assets/regular-whitening-teeth.png";
import ApolloniaWhiteningTeethImg from "../assets/apollonia-whitening-teeth.png";
import GrillzImg from "../assets/grillz.png";
import WhiteningTrayImg from "../assets/whitening-tray-cropped.png";
import SportsguardImg from "../assets/sportsguard.png";
import type { ServiceItem } from "../types/listsTypes";

//for future reference:
// it's fine to keep this list on the front-end.
// if I do decide to move it to the database, I can still leave the imageStyles(and maybe image too) property in here
// since it doesn't really make sense to store it on the db

export const servicesList: ServiceItem[] = [
  {
    id: 1,
    i18nKey: "services.professionalTeethCleaning",
    price: import.meta.env.VITE_SERVICE_PROFESSIONAL_TEETH_CLEANING_PRICE,
  },
  {
    id: 2,
    i18nKey: "services.painlessTeethWhiteningTreatment",
    price: import.meta.env
      .VITE_SERVICE_PAINLESS_TEETH_WHITENING_TREATMENT_PRICE,
    image: RegularWhiteningTeethImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "3.8rem", md: "4.5rem" },
      marginLeft: { xs: "63%", sm: "70%" },
    },
  },
  {
    id: 3,
    i18nKey: "services.apolloniaWhiteningTreatment",
    price: import.meta.env.VITE_SERVICE_APOLLONIA_WHITENING_TREATMENT_PRICE,
    image: ApolloniaWhiteningTeethImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "3.8rem", md: "4.5rem" },
      marginLeft: { xs: "63%", sm: "70%" },
    },
  },
  {
    id: 4,
    i18nKey: "services.goldenGlowWhiteningTreatment",
    price: import.meta.env.VITE_SERVICE_GOLDEN_GLOW_WHITENING_TREATMENT_PRICE,
  },
  {
    id: 5,
    i18nKey: "services.teethWhiteningMaintenanceSession",
    price: import.meta.env.VITE_SERVICE_MAINTENANCE_SESSION_PRICE,
  },
  {
    id: 6,
    i18nKey: "services.whiteSpotLesionsRemoval",
    price: import.meta.env.VITE_SERVICE_LESIONS_REMOVAL_PRICE,
  },
  {
    id: 7,
    i18nKey: "services.grillz",
    price: import.meta.env.VITE_SERVICE_GRILLZ_PRICE,
    image: GrillzImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "3.4rem", md: "4.5rem" },
      marginLeft: { xs: "55%", sm: "65%" },
      rotate: "10deg",
    },
  },
  {
    id: 8,
    i18nKey: "services.customTeethWhiteningTrays",
    price: import.meta.env.VITE_SERVICE_TRAYS_PRICE,
    image: WhiteningTrayImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "2.8rem", md: "3.5rem" },
      marginLeft: "95.5%",
    },
  },
  {
    id: 9,
    i18nKey: "services.sportsguard",
    price: import.meta.env.VITE_SERVICE_SPORTSGUARD_PRICE,
    image: SportsguardImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "4.2rem", md: "5rem" },
      marginLeft: "63%",
    },
  },
];
