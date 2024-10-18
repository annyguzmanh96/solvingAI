import React from "react";
import { Box, useTheme } from "@mui/joy";

import logo from "../assets/logo.svg";
import CustomTab from "./Custom/CustomTab";

function HeaderNavigation() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 80px",
        boxShadow: `
        0 1px 2px rgba(16, 24, 40, 0.05), 
        inset 0 -2px 0 rgba(16, 24, 40, 0.05), 
        inset 0 0 0 1px rgba(16, 24, 40, 0.18)
      `,
        backgroundColor: "#fff",
        position: "fixed", // Cambia la posición a fija
        top: 0, // Posición en la parte superior
        left: 0, // Asegura que se quede en el borde izquierdo
        right: 0, // Asegura que se quede en el borde derecho
        zIndex: 1000, // Asegura que esté por encima de otros elementos
      }}
    >
      {/* Contenedor del Logo y Enlaces de Navegación */}
      <Box display="flex" alignItems="center">
        {/* Logotipo */}
        <Box sx={{ marginRight: theme.spacing(4) }}>
          <img src={logo} alt="Logo" style={{ width: "142px", height: "auto" }} />
        </Box>

        {/* Enlaces de Navegación */}
        <Box
          sx={{
            display: "flex",
            gap: theme.spacing(8), // Aplica 2rem de gap entre los tabs
          }}
        >
          <CustomTab
            text="Features"
            color={theme.palette.button.text.tertiary}
            toIdSection="featuresSection"
          />
          <CustomTab
            text="FAQ"
            color={theme.palette.button.text.tertiary}
            toIdSection="ctaSection"
          />
        </Box>
      </Box>

      {/* Botón de "Sign Up" */}
      <Box>
        <CustomTab
          text="Sign Up"
          color={theme.palette.button.text.tertiaryColor}
        />
      </Box>
    </Box>
  );
}

export default HeaderNavigation;

