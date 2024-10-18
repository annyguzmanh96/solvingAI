import { Box, Typography, useTheme } from "@mui/joy";

import backgroundPattern from "../assets/backgroundPattern.svg";
import content from "../assets/content.svg";
import HeaderNavigation from "../components/HeaderNavigation";
import CustomButton from "../components/Custom/CustomButton";

function HeroHeaderSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "auto", // Ajusta la altura automáticamente
        backgroundImage: `url(${backgroundPattern})`,
        backgroundColor: "#F2F4F7",
        backdropFilter: "blur(4px)",
        backgroundSize: "cover",
        paddingBottom: "80px", // Ajusta el espacio inferior
      }}
    >
      <HeaderNavigation />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "720px",
          padding: { xs: "20px", md: "0 170px" }, // Ajusta el padding en móviles
        }}
      >
        {/* Columna de texto */}
        <Box
          sx={{
            flexBasis: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "576px", // Ajusta el ancho máximo para mantener proporciones
            textAlign: { xs: "center", md: "left" }, // Centra el texto en móviles
            mb: { xs: 4, md: 0 }, // Espaciado inferior en pantallas pequeñas
            paddingRight: theme.spacing(8),
            gap:"48px"
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              mb: 2,
              color: theme.palette.text.primary,
              gap: "16px",
              width: "544px",
              ...theme.typography.h2Medium,
            }}
          >
            What can AI do for you?
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              mb: 2,
              color: theme.palette.text.primary,
              ...theme.typography.textRegular,
              maxWidth: "480px", // Mantén el ancho del párrafo alineado con el diseño
            }}
          >
            At Solving.AI, we harness the transformative power of generative
            artificial intelligence to pioneer a new frontier of software
            applications.
          </Typography>
          <CustomButton
            color={theme.palette.button.text.primary}
            backgroundColor={theme.palette.button.bg.primary}
            borderColor="#FFFFFF1F"
            text="Learn more about Solving AI"
            style={{
              padding: `${theme.spacing(4)} ${theme.spacing(5.5)}`,
              maxWidth: "305px", // Cambia el ancho para que se ajuste al contenido
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
            maxWidth: "655px", // Asegura que la imagen no sea demasiado grande en pantallas pequeñas
            height: "auto",
          }}
        >
          <img
            src={content}
            alt="AI content"
            style={{ width: "100%", height: "auto" }} // Ajusta para que la imagen sea responsiva
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroHeaderSection;
