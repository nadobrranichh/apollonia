import StarIcon from "@mui/icons-material/Star";
import ShieldIcon from "@mui/icons-material/Shield";
import type { ReactNode } from "react";

export const methodStepsList = [
  {
    id: 1,
    title: "Diagnostic shade reading",
    description:
      "We read your enamel against the VITA classical scale. A target is set in writing.",
    time: "5 min",
  },
  {
    id: 2,
    title: "Gum protection & isolation",
    description: "A light-cure resin protects every millimetre of soft tissue.",
    time: "10 min",
  },
  {
    id: 3,
    title: "First LED whitening pass",
    description:
      "First fifteen minutes under the blue-red dual lamp at clinical strength.",
    time: "15 min",
  },
  {
    id: 4,
    title: "Red-light recovery interval",
    description:
      "Red-light only. Enamel rehydrates; tissue calms; you breathe.",
    time: "10 min",
  },
  {
    id: 5,
    title: "Second LED whitening pass",
    description:
      "Second pass, same strength. This is where the bulk of the shift happens.",
    time: "15 min",
  },
  {
    id: 6,
    title: "Hydroxyapatite reseal & polish",
    description:
      "A remineralising gel locks the new shade in. We re-read your VITA card.",
    time: "15 min",
  },
];

export const rulesList = [
  {
    id: 1,
    title: "It must not hurt.",
    description:
      "Sensitivity is the silent reason most people never finish whitening. Every protocol on our menu is built around three sensitivity controls - gum sealants, hydroxyapatite, fluoride - before peroxide ever enters the room.",
  },
  {
    id: 2,
    title: "Light over chemistry.",
    description:
      "We use less peroxide than most studios, and pair it with red-light LED therapy. The light does the work the chemistry would have done - but kinder, and faster to dissipate.",
  },
  {
    id: 3,
    title: "Enamel before shade.",
    description:
      "A whiter tooth that's been etched and dehydrated isn't whiter for long. Hydroxyapatite reseals the surface at the end of every session. The shade you leave with is the shade you keep.",
  },
  {
    id: 4,
    title: "One chair, one hygienist.",
    description:
      "Apollonia is intentionally small. The person who plans your treatment is the person who performs it. No rotating staff, no upsell scripts. It is not for everyone but if it's for you, you'll know.",
  },
];

type MaterialListItem = {
  id: number;
  marker: ReactNode;
  title: string;
  description: string;
};

export const materialsList: MaterialListItem[] = [
  {
    id: 1,
    marker: "H₂O₂",
    title: "Carbamide peroxide",
    description:
      "The whitening agent. Lower concentration than most studios-light makes up the difference.",
  },
  {
    id: 2,
    marker: <StarIcon />,
    title: "Red-light LED",
    description:
      "650-nm therapy light. Accelerates peroxide breakdown and reduces gum inflammation.",
  },
  {
    id: 3,
    marker: <ShieldIcon />,
    title: "Hydroxyapatite",
    description:
      "The mineral your enamel is made of. Reseals microporosity after every session.",
  },
  {
    id: 4,
    marker: "F",
    title: "Fluoride varnish",
    description:
      "Strengthens the surface against staining for the first 24 hours - the window that matters.",
  },
  {
    id: 5,
    marker: "Au",
    title: "24K gold gel",
    description:
      "Used only in the Golden Glow ritual. Reduces sensitivity further; leaves teeth softer to the tongue.",
  },
  {
    id: 6,
    marker: "~",
    title: "Air polishing",
    description:
      "Sodium bicarbonate at low pressure for surface stain. Optional, gentle, fast.",
  },
];

export const bioList = [
  { id: 1, caption: "Languages", text: "English, Українська" },
  { id: 2, caption: "Member", text: "College of Dental Hygienists of Ontario" },
  {
    id: 3,
    caption: "Practice",
    text: "Apollonia Preventative Dental Care, Toronto",
  },
];
