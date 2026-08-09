import { Box, Card, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ImageBox from "./ImageBox";

export default function TreatmentCard({
  imageSrc,
  title,
  description,
  price,
  time,
}: {
  imageSrc?: string | string[];
  title: string;
  description: string;
  price: string;
  time?: string;
}) {
  return (
    <Card
      sx={{
        borderRadius: "1.5rem",
        padding: "1.5rem",
        boxShadow: (theme) => `0px 0px 0.5rem ${theme.palette.grey[500]}`,
      }}
    >
      <Box
        sx={{
          height: "15rem",
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
          margin: "-1.5rem -1.5rem 1.5rem",
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {description}
        </Typography>
        <hr />
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
              ${price}
            </Typography>
          )}

          <Link
            variant="body2"
            component={RouterLink}
            // to={`/treatments#${title.toLowerCase().replaceAll(" ", "-")}`}
            to="/"
            sx={{
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Explore
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
