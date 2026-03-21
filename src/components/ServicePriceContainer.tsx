import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

const splitByLines = function (text: string[]) {
  return text.map((line, index) => (
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
  comment?: string[];
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        component="p"
        sx={{
          fontWeight: 500,
          fontSize: "1.5rem",
          marginRight: comment ? "2px" : { xs: "0.7rem", md: "20px" },
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
