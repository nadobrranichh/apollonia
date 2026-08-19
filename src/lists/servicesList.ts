import RegularWhiteningTeethImg from "../assets/regular-whitening-teeth.png";
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
    type: "standard",
    i18nKey: "services.professionalTeethCleaning",
    price: import.meta.env.VITE_SERVICE_PROFESSIONAL_TEETH_CLEANING_PRICE,
  },
  {
    id: 2,
    type: "standard",
    i18nKey: "services.painlessTeethWhiteningTreatment",
    price: import.meta.env
      .VITE_SERVICE_PAINLESS_TEETH_WHITENING_TREATMENT_PRICE,
    image: RegularWhiteningTeethImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "3.8rem", md: "4.5rem" },
      marginLeft: "10rem",
    },
  },
  {
    id: 3,
    type: "standard",
    i18nKey: "services.teethWhiteningMaintenanceSession",
    price: import.meta.env.VITE_SERVICE_MAINTENANCE_SESSION_PRICE,
  },
  { id: 4, type: "gems" },
  {
    id: 5,
    type: "standard",
    i18nKey: "services.whiteSpotLesionsRemoval",
    price: import.meta.env.VITE_SERVICE_LESIONS_REMOVAL_PRICE,
  },
  {
    id: 6,
    type: "standard",
    i18nKey: "services.customTeethWhiteningTrays",
    price: import.meta.env.VITE_SERVICE_TRAYS_PRICE,
    image: WhiteningTrayImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "2.5rem", md: "3.5rem" },
      margin: "1.5rem 0 0 17.1rem",
    },
  },
  {
    id: 7,
    type: "standard",
    i18nKey: "services.sportsguard",
    price: import.meta.env.VITE_SERVICE_SPORTSGUARD_PRICE,
    image: SportsguardImg,
    imageStyles: {
      position: "absolute",
      width: { xs: "4.2rem", md: "5rem" },
      margin: "-0.75rem 0 0 10rem",
    },
  },
];
