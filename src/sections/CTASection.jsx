import { Box, Typography, Button } from "@mui/joy";

function CTASection() {
  return (
    <Box sx={{ padding: 4, textAlign: "center", backgroundColor: "#F2F4F7", width: "100%", }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Ready to dive into AI?
      </Typography>
      <Button variant="contained" size="large">Get Started</Button>
    </Box>
  );
}

export default CTASection;
