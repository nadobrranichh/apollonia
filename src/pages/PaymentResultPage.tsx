import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSessionStatus } from "../http/http";
import CheckIcon from "../assets/check-svgrepo-com.svg";
import CrossIcon from "../assets/cross-light-svgrepo-com.svg";
import ImageBox from "../components/ImageBox";

export default function PaymentResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) navigate("/");
  }, [sessionId]);

  // the query will only execute when sessionId is truthy
  const { data: status } = useQuery({
    queryFn: () => fetchSessionStatus(sessionId!),
    queryKey: ["session", "status"],
    enabled: Boolean(sessionId),
  });

  return (
    <Box
      component="main"
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {status && (
        <>
          <ImageBox
            src={status === "fulfilled" ? CheckIcon : CrossIcon}
            alt="icon"
            sx={{
              width: "100px",
            }}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            {status === "fulfilled" ? (
              <>
                Payment successful!
                <br />
                Please check your email for the receipt.
              </>
            ) : (
              "Payment canceled."
            )}
          </Typography>
        </>
      )}
    </Box>
  );
}
