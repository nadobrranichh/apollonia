import { Box, Typography } from "@mui/material";
export default function LocationPage() {
  return (
    <Box
      component="main"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <Typography
        component="p"
        sx={{ color: "white", fontWeight: 500, fontSize: "1.5rem" }}
      >
        Location: <br /> 821 Eglinton Ave W, Toronto <br /> ON M5N 1E6, Canada
      </Typography>
      <Box
        sx={{
          marginTop: "1rem",
          width: "75%",
          height: "35rem",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.1156222969039!2d-79.42507180000003!3d43.7009369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc3ae490fe4b65%3A0xc5ee99956777f13e!2sApollonia%20Preventative%20Dental%20Care!5e0!3m2!1sen!2sua!4v1744016825863!5m2!1sen!2sua"
          style={{
            border: "none",
            height: "100%",
            width: "100%",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-embed"
        ></iframe>
      </Box>
    </Box>
  );
}
