import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const directions = [
  {
    id: 1,
    title: "Subway",
    subtitle: "Line 1 to Eglinton West, 10 min walk east.",
  },
  {
    id: 2,
    title: "Parking",
    subtitle: "Green P at Forest Hill Village, 4 min away.",
  },
  {
    id: 3,
    title: "Bike",
    subtitle: "Inside rack available, bring it up with you.",
  },
];

const weeklyHours = [
  { id: 1, days: "Mon-Wed", time: "9AM - 7PM" },
  { id: 2, days: "Thu-Fri", time: "9AM - 5PM" },
  { id: 3, days: "Sat", time: "10AM - 4PM" },
  { id: 4, days: "Sun", time: "Closed" },
];

export default function LocationPage() {
  return (
    <Box
      component="main"
      sx={{
        padding: "2rem 1.5rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box>
        <Typography variant="h3">Where to find us</Typography>
        <Typography>
          Your smile deserves a space designed around you. Come visit us and
          discover our treatments in person.
        </Typography>
      </Box>
      <Box
        id="map"
        sx={{
          height: "14rem",
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
      <hr />
      <Box id="directions" sx={{ scrollMarginTop: "8.5rem" }}>
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            color: (theme) => theme.palette.grey[500],
            fontFamily: "Poppins, Arial",
          }}
        >
          Address:
        </Typography>
        <Typography>821 Eglinton Ave West</Typography>
        <Typography>Toronto, ON M5N 1E6</Typography>
        <Link
          component={RouterLink}
          sx={{ color: "secondary.dark" }}
          to="https://maps.app.goo.gl/ZMySaD6bfVxsA8gp9"
        >
          Open in Google Maps
        </Link>
      </Box>
      <hr />
      <Box>
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            color: (theme) => theme.palette.grey[500],
            fontFamily: "Poppins, Arial",
          }}
        >
          Getting here:
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {directions.map((d) => (
            <Box key={d.id}>
              <Typography>{d.title}</Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",

                  color: (theme) => theme.palette.grey[500],
                  fontFamily: "Poppins, Arial",
                }}
              >
                {d.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <hr />
      <Box>
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            color: (theme) => theme.palette.grey[500],
            fontFamily: "Poppins, Arial",
          }}
        >
          Weekly hours:
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            paddingY: "1rem",
          }}
        >
          {weeklyHours.map((h) => (
            <Box key={h.id}>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) => theme.palette.grey[500],
                  fontFamily: "Poppins, Arial",
                }}
              >
                {h.days}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins, Arial" }}>
                {h.time}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
