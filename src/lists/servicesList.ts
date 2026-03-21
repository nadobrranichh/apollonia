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
    title: "Professional teeth cleaning",
    description:
      "Ultrasonic scaling followed by manual scaling and polishing.Add-ons as per client request: air polishing, airflow cleaning and fluoride.",
    price: import.meta.env.VITE_SERVICE_PROFESSIONAL_TEETH_CLEANING_PRICE,
    priceComment: ["without", "insurance"],
  },
  {
    id: 2,
    title: "Painless teeth whitening treatment",
    description:
      "LED whitening with red light therapy (anti inflammatory), gum protection and anti-sensitivity dental grade materials (fluoride and hydroxyapatite). 2 applications 15 min each will get you 8-10 shades whiter. Recommended for yellowish-white teeth to achieve white results and for white teeth to achieve extremely white results. 70 min procedure.",
    price: import.meta.env
      .VITE_SERVICE_PAINLESS_TEETH_WHITENING_TREATMENT_PRICE,
    image: RegularWhiteningTeethImg,
    imageStyles: {
      position: "absolute",
      width: "4.5rem",
      marginLeft: "72.5%",
    },
  },
  {
    id: 3,
    title: "Apollonia whitening treatment",
    description:
      "2 visits, 70 minutes each. 2-14 days apart. Recommended for yellow teeth to achieve white results, for yellowish-white teeth to achieve extremely white results and for super sensitive teeth to avoid discomfort. Each visit includes LED whitening with red light therapy (anti-inflammatory), gum protection and anti-sensitivity dental grade materials (fluoride and hydroxyapatite). 2 visits will get you 18-20 shades whiter.",
    price: import.meta.env.VITE_SERVICE_APOLLONIA_WHITENING_TREATMENT_PRICE,
    image: ApolloniaWhiteningTeethImg,
    imageStyles: {
      position: "absolute",
      width: "4.5rem",
      marginLeft: "72.5%",
    },
  },
  {
    id: 4,
    title: "Golden Glow Whitening Treatment",
    description:
      "New luxury pampering service which includes application of 24K gold and nano-hydroxyapatite infused gel to teeth. Reduces risks of sensitivity dramatically and cures gums with real gold. Includes Painless Teeth Whitening Treatment.",
    price: import.meta.env.VITE_SERVICE_GOLDEN_GLOW_WHITENING_TREATMENT_PRICE,
  },
  {
    id: 5,
    title: "Teeth whitening 3-6 months maintenance session",
    description:
      "Quick maintenance session recommended 3-6 months after initial whitening (35-40mins).",
    price: import.meta.env.VITE_SERVICE_MAINTENANCE_SESSION_PRICE,
  },
  {
    id: 6,
    title: "White spot lesions removal",
    description:
      "Icon® Infiltration Concept is used for the microinvasive treatment of white dental lesions. In one patient visit, and with no drilling, Icon® can arrest the progression of early enamel white spot caries-like lesions (demineralization).",
    price: import.meta.env.VITE_SERVICE_LESIONS_REMOVAL_PRICE,
    priceComment: ["per", "tooth"],
  },
  {
    id: 7,
    title: "Grillz",
    description:
      "Decorative removeable covers, worn over the teeth, made of titanium and can appear as gold or silver.",
    price: import.meta.env.VITE_SERVICE_GRILLZ_PRICE,
    priceComment: ["per", "tooth"],
    image: GrillzImg,
    imageStyles: {
      position: "absolute",
      width: "4.5rem",
      marginLeft: "70%",
      rotate: "10deg",
    },
  },
  {
    id: 8,
    title: "Custom teeth whitening trays",
    description:
      "Designed to hold a whitening gel against your teeth, helping to lighten stains and discoloration",
    price: import.meta.env.VITE_SERVICE_TRAYS_PRICE,
    image: WhiteningTrayImg,
    imageStyles: {
      position: "absolute",
      width: "3.5rem",
      marginLeft: "95.5%",
    },
  },
  {
    id: 9,
    title: "Sportsguard",
    description:
      "Custom fit protective device worn over the teeth — typically covering the upper teeth — to safeguard the mouth from injuries during sports and physical activities.",
    price: import.meta.env.VITE_SERVICE_SPORTSGUARD_PRICE,
    image: SportsguardImg,
    imageStyles: {
      position: "absolute",
      width: "5rem",
      marginLeft: "63%",
    },
  },
];
