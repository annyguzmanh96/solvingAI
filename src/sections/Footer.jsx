import { Box, Typography, Link } from "@mui/joy";

function Footer() {
  return (
    <Box
      sx={{
        padding: 4,
        textAlign: "center",
        backgroundColor: "#333",
        color: "white",
        width: "100%",
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Solving AI. All rights reserved.
      </Typography>
      <Link href="" sx={{ color: "white", ml: 2 }}>
        Terms
      </Link>
      <Link href="" sx={{ color: "white", ml: 2 }}>
        Privacy
      </Link>
    </Box>
  );
}

export default Footer;
