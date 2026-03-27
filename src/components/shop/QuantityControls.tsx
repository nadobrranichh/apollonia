import { Box, IconButton, Typography } from "@mui/material";
import MinusIcon from "../../assets/minus-svgrepo-com.svg";
import PlusIcon from "../../assets/plus-svgrepo-com.svg";

export default function QuantityControls({
  quantity,
  updateQuantity,
}: {
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "65px",
        ml: { md: "auto" },
      }}
    >
      <IconButton
        sx={{ padding: 0 }}
        onClick={() => updateQuantity(quantity - 1)}
      >
        <img src={MinusIcon} alt="icon" style={{ width: "1.2rem" }} />
      </IconButton>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "1.2rem",
        }}
      >
        {quantity}
      </Typography>
      <IconButton
        sx={{ padding: 0 }}
        onClick={() => updateQuantity(quantity + 1)}
      >
        <img src={PlusIcon} alt="icon" style={{ width: "1.2rem" }} />
      </IconButton>
    </Box>
  );
}
