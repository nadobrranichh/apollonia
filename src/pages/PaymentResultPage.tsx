import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSessionStatus } from "../http/http";
import CheckIcon from "@mui/icons-material/Check";
import CrossIcon from "@mui/icons-material/Close";

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
        paddingY: "7rem",
        textAlign: "center",
      }}
    >
      {status && (
        <>
          {status === "fulfilled" ? (
            <CheckIcon sx={{ fontSize: "6rem" }} />
          ) : (
            <CrossIcon sx={{ fontSize: "6rem" }} />
          )}
          <Typography variant="h5">
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
