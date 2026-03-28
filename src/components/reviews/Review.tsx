import { Box, Link, Typography } from "@mui/material";
import QuoteIcon from "../../assets/quote-22-double-open.svg";
import StarIcon from "../../assets/star-svgrepo-com.svg";
import type { ReviewType } from "../../types";
import ImageBox from "../ImageBox";
import { useContext } from "react";
import { ActiveReviewContext } from "../../store/active-review-context";

export default function Review({
  reviewData,
  absolute = false,
}: {
  reviewData: ReviewType;
  absolute?: boolean;
}) {
  const { author_name, description, rating, avatar_url } = reviewData;

  const { setReviewData } = useContext(ActiveReviewContext);

  const handleHover = () => setReviewData(reviewData);
  const handleHoverEnd = () => setReviewData(null);
  return (
    <Box
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      sx={{
        minHeight: "250px",
        minWidth: "275px",
        borderRadius: "1rem",
        bgcolor: "secondary.dark",
        textAlign: "center",
        padding: "1rem 1rem",
        display: "flex",
        flexDirection: "column",
        ...(absolute && {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: (theme) => `0 0 5rem ${theme.palette.secondary.light}`,
        }),
      }}
    >
      <ImageBox src={QuoteIcon} alt="quote" height="1.5rem" />
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "0.7rem",
          marginBottom: "0.9rem",
          marginTop: "0.5rem",
          maxWidth: "250px",
          mt: "auto",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: absolute ? "initial" : 8,
        }}
      >
        {description}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start", mt: "auto" }}>
        <ImageBox
          src={avatar_url}
          sx={{
            height: "1.8rem",
            borderRadius: "50%",
            alignSelf: "center",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            paddingLeft: "0.3rem",
          }}
        >
          <Typography sx={{ fontSize: "0.8rem" }}>{author_name}</Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>
            {rating}
            <ImageBox src={StarIcon} alt="star" sx={{ height: "0.75rem" }} />
            {"\u2005"}
            <Link
              style={{ color: "white" }}
              href="https://www.google.com/maps/place/821+Eglinton+Ave+W,+Toronto,+ON+M5N+1E6,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@43.7009396,-79.425269,21z/data=!4m6!3m5!1s0x882b330aae3c9813:0x3ec0b80f2cde8279!8m2!3d43.7009369!4d-79.4250718!16s%2Fg%2F11bw3h3mgt?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
            >
              Google maps
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
