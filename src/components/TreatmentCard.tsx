import { Box, Divider, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ImageBox from "./ImageBox";
import { descriptionStyles } from "../styles/typographyStyles";
import { MotionCard } from "../motion/components";
import { fade } from "../motion/variants";
import type { TreatmentCardProps } from "../types";
import { useTranslation } from "react-i18next";

export default function TreatmentCard({
  imageSrc,
  title,
  description,
  price,
  time,
}: TreatmentCardProps) {
  const { t } = useTranslation();
  return (
    <MotionCard
      variants={fade({ yStart: -20 })}
      sx={{
        maxWidth: "30rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Box
        sx={{
          height: "15rem",
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
          margin: "-1.5rem -1.5rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageSrc &&
          (Array.isArray(imageSrc) ? (
            imageSrc.map((img) => (
              <ImageBox
                key={img}
                src={img}
                height="3rem"
                sx={{
                  filter: (theme) =>
                    `drop-shadow(0 0 2rem ${theme.palette.grey[600]})`,
                }}
              />
            ))
          ) : (
            <ImageBox
              src={imageSrc}
              height="7.5rem"
              sx={{
                filter: (theme) =>
                  `drop-shadow(0 0 2rem ${theme.palette.grey[600]})`,
              }}
            />
          ))}
      </Box>
      <Typography variant="h5">{title}</Typography>
      <Typography sx={descriptionStyles}>{description}</Typography>
      <Divider sx={{ marginTop: "auto" }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {time ? (
          <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
            ${price}{" "}
            <Box
              component="span"
              sx={{
                textTransform: "uppercase",
                color: (theme) => theme.palette.grey[500],
              }}
            >
              &bull; {time}.
            </Box>
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
            {price}
          </Typography>
        )}

        <Link
          variant="body2"
          component={RouterLink}
          to={`/services#${title.toLowerCase().replaceAll(" ", "-")}`}
          sx={{ textDecoration: "none", textTransform: "uppercase" }}
        >
          {t("home.treatments.explore")}
        </Link>
      </Box>
    </MotionCard>
  );
}
