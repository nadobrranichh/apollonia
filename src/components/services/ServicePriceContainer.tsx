import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

const splitByLines = function (text: string) {
  const arr = text.split(" ");
  return arr.map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
};

export default function ServicePriceContainer({
  price,
  comment,
}: {
  price: number;
  comment?: string;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        component="p"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          marginRight: comment ? "0.2rem" : { xs: "0.7rem", md: "1.2rem" },
        }}
      >
        ${price}
      </Typography>
      {comment && (
        <Typography
          component="p"
          sx={{
            fontWeight: 600,
            fontSize: "0.7rem",
            lineHeight: "0.7rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {splitByLines(comment)}
        </Typography>
      )}
    </Box>
  );
}
