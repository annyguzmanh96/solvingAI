import React, { useState } from "react";
import { Box, IconButton, Drawer, useTheme } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu"; // Icono del menú hamburguesa

import logo from "../assets/logo.svg";
import CustomTab from "./Custom/CustomTab";

function HeaderNavigation() {
  const theme = useTheme();
  const [open, setOpen] = useState(false); // Estado para controlar la apertura del Drawer

  // Función para abrir/cerrar el Drawer (menú hamburguesa)
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

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
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200000,
        }}
      >
        {/* Contenedor del Logo y Enlaces de Navegación */}
        <Box display="flex" alignItems="center">
          {/* Logotipo */}
          <Box sx={{ marginRight: theme.spacing(4) }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "142px", height: "auto" }}
            />
          </Box>

          {/* Enlaces de Navegación: Visible en pantallas medianas y grandes */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Oculta en pantallas pequeñas
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

        {/* Botón de "Sign Up" para escritorio: Visible en pantallas medianas y grandes */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <CustomTab
            text="Sign Up"
            color={theme.palette.button.text.tertiaryColor}
          />
        </Box>

        {/* Icono del menú hamburguesa: Visible solo en pantallas pequeñas */}
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" }, // Visible solo en móviles
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer que se abrirá al hacer clic en el menú hamburguesa */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              padding: theme.spacing(2),
            }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {/* Menú del Drawer con Joy UI */}
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
            <CustomTab
              text="Sign Up"
              color={theme.palette.button.text.tertiaryColor}
            />
          </Box>
        </Drawer>


    </Box>
  );
}

export default HeaderNavigation;
