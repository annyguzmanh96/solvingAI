import { Box, Typography, useTheme } from "@mui/joy";

function FeaturesSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: theme.spacing("9xl"),
        paddingBottom: theme.spacing("9xl"),
        width: "100%",
        height: "352px",
        maxWidth: "100vw",
        overflowX: "hidden",
        background: "linear-gradient(180deg, #F3F5F7 0%, #FFFFFF 100%)",
        display: "flex", // Asegura que el contenido interno esté alineado
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center", // Centra verticalmente
        paddingLeft: { xs: theme.spacing("4xl"), md: 0 }, // Padding para móviles
        paddingRight: { xs: theme.spacing("4xl"), md: 0 }, // Padding para móviles
      }}
    >
      <Box
        sx={{
          gap: "20px",
          maxHeight: "160px",
          maxWidth: "768px",
          textAlign: "center", // Asegura que el texto esté alineado en el centro
        }}
      >
        <Typography
          sx={(theme) => ({
            cursor: "pointer",
            mb: 4,
            color: theme.palette.text.secondary,
            ...theme.typography.textMdSemibold,
          })}
        >
          Features
        </Typography>
        <Typography
          sx={(theme) => ({
            cursor: "pointer",
            mb: 4,
            color: theme.palette.text.primary,
            ...theme.typography.h4Semibold,
          })}
        >
          Unlock yourself with Solving AI
        </Typography>
        <Typography
          sx={(theme) => ({
            cursor: "pointer",
            mb: 4,
            color: theme.palette.text.tertiary,
            ...theme.typography.xlRegular,
          })}
        >
          Dive into our suite of AI-powered applications and discover how they
          can transform your daily operations.
        </Typography>
      </Box>
    </Box>
  );
}

export default FeaturesSection;

