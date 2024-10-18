import { Box, Typography, useTheme } from "@mui/joy";
import backgroundPattern from "../assets/backgroundPattern.svg";
import content from "../assets/content.svg";
import HeaderNavigation from "../components/HeaderNavigation";
import CustomButton from "../components/Custom/CustomButton";

function HeroHeaderSection() {
  const theme = useTheme();

  return (
    <>
      {/* Navbar Fijo */}
      <HeaderNavigation />

      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${backgroundPattern})`,
          backgroundColor: "#F2F4F7",
          backdropFilter: "blur(4px)",
          backgroundSize: "cover",
          paddingBottom: "80px",
          paddingTop: "80px", // Ajuste para compensar el espacio del navbar fijo
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "120px 40px", md: "0 170px" }, // Padding responsivo
            minHeight: { xs: "auto", md: "720px" }, // Altura flexible en móviles
          }}
        >
          {/* Columna de texto */}
          <Box
            sx={{
              flexBasis: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
              alignItems: { xs: "center", md: "flex-start" }, // Centra el contenido horizontalmente en móviles
              paddingRight: { xs: 0, md: theme.spacing("4xl") },
              mb: { xs: 4, md: 0 }, // Ajuste de margen en móviles
              gap: theme.spacing(8),
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                color: theme.palette.text.primary,
                ...theme.typography.h2Medium,
                width: { xs: "100%", md: "544px" }, // Ajuste responsivo de ancho
                mb: theme.spacing(2),
              }}
            >
              What can AI do for you?
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                color: theme.palette.text.primary,
                ...theme.typography.xlRegular,
                maxWidth: "480px",
                mb: theme.spacing(2),
              }}
            >
              At Solving.AI, we harness the transformative power of generative artificial intelligence to pioneer a new frontier of software applications.
            </Typography>
            <CustomButton
              color={theme.palette.button.text.primary}
              backgroundColor={theme.palette.button.bg.primary}
              borderColor="#FFFFFF1F"
              text="Learn more about Solving AI"
              style={{
                padding: `${theme.spacing.xl} 22px`,
                maxWidth: "305px", // Responsivo para el botón
              }}
            />
          </Box>

          {/* Columna de la imagen */}
          <Box
            sx={{
              flexBasis: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 4, md: 0 },
              maxWidth: { xs: "100%", md: "655px" }, // Ajuste para pantallas pequeñas
            }}
          >
            <img
              src={content}
              alt="AI content"
              style={{ width: "100%", height: "auto" }} // Imagen responsiva
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeroHeaderSection;
