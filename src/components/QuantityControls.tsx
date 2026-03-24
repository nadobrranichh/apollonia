import { Box, IconButton, Typography } from "@mui/material";
import MinusIcon from "../assets/minus-svgrepo-com.svg";
import PlusIcon from "../assets/plus-svgrepo-com.svg";

export default function QuantityControls({
  quantity,
  updateQuantity,
  elementsWidth,
}: {
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
  elementsWidth: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: elementsWidth * 4,
        ml: "15%",
      }}
    >
      <IconButton onClick={() => updateQuantity(quantity - 1)}>
        <img src={MinusIcon} alt="icon" style={{ width: elementsWidth }} />
      </IconButton>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "1.2rem",
        }}
      >
        {quantity}
      </Typography>
      <IconButton onClick={() => updateQuantity(quantity + 1)}>
        <img src={PlusIcon} alt="icon" style={{ width: elementsWidth }} />
      </IconButton>
    </Box>
  );
}
