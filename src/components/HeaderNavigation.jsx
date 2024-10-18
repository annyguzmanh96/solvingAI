import React, { useState } from "react";
import { Box, IconButton, Drawer, useTheme } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Close icon for the sidebar
import logo from "../assets/logo.svg";
import CustomTab from "./Custom/CustomTab";
import { navigationTabs } from "../utils/constans/navigationTabs";

function HeaderNavigation() {
  const theme = useTheme();
  const [open, setOpen] = useState(false); // State to control the sidebar

  // Toggle Drawer (Sidebar)
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
        position: "fixed", // Fixed for sticky effect
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000, // Asegura que el navbar esté encima del contenido
      }}
    >
      {/* Logo and Tabs Container */}
      <Box display="flex" alignItems="center">
        {/* Logo */}
        <Box sx={{ marginRight: theme.spacing.xl }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "142px", height: "auto" }}
          />
        </Box>

        {/* Navigation Links for Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Show only on desktop
            gap: theme.spacing("4xl"), // Gap between tabs
          }}
        >
          {navigationTabs.map((tab, index) => (
            <CustomTab
              text={tab.text}
              color={theme.palette.button.text.tertiary}
              toIdSection={tab.toIdSection}
              key={index}
            />
          ))}
        </Box>
      </Box>

      {/* Sign Up for Desktop */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <CustomTab
          text="Sign Up"
          color={theme.palette.button.text.tertiaryColor}
        />
      </Box>

      {/* Hamburger Menu for Mobile */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: "block", md: "none" } }} // Show only on mobile
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          zIndex: 3000, // Asegura que el Drawer esté encima del navbar fijo
        }}
      >
        <Box
          sx={{
            width: 250,
            padding: theme.spacing.xl,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3), // Espacio entre los tabs
            alignItems: "center",
            paddingLeft: theme.spacing(3), // Padding izquierdo para separar los tabs del borde
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Close Button for the Drawer */}
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ alignSelf: "flex-start", mb: theme.spacing.xl }}
          >
            <CloseIcon />
          </IconButton>

          {/* Drawer Menu */}
          {navigationTabs.map((tab, index) => (
            <CustomTab
              text={tab.text}
              color={theme.palette.button.text.tertiary}
              toIdSection={tab.toIdSection}
              key={index}
              sx={{
                padding: `${theme.spacing.xl} 0`, // Padding vertical para los tabs
                width: "100%", // Para ocupar el ancho completo en el sidebar
                textAlign: "left", // Alineación de texto en el sidebar
                "&:hover": {
                  backgroundColor: theme.palette.bg.primary,
                  borderRadius: theme.radius.md,
                },
              }}
            />
          ))}

          {/* Sign Up in Sidebar */}
          <CustomTab
            text="Sign Up"
            color={theme.palette.button.text.tertiaryColor}
            sx={{
              padding: `${theme.spacing.xl} 0`, // Padding adicional para el tab de "Sign Up"
              width: "100%",
              textAlign: "left",
              "&:hover": {
                backgroundColor: theme.palette.bg.primary,
                borderRadius: theme.radius.md,
              },
            }}
          />
        </Box>
      </Drawer>
    </Box>
  );
}

export default HeaderNavigation;
