import { Box, Typography, Grid, Link } from "@mui/joy";

import { footerLinks } from "../utils/constans/footerLinks";
import logo from "../assets/logo.svg";
import CustomBadge from "../components/Custom/CustomBadge";

function Footer() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        backgroundColor: "#FFFFFF", // Fondo blanco
        paddingTop: theme.spacing("7xl"), // Espaciado superior
        paddingBottom: theme.spacing("6xl"), // Espaciado inferior
        gap: theme.spacing("7xl"),
      })}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
          maxWidth: "1216px", // Ajuste del ancho máximo
          margin: "0 auto", // Centramos horizontalmente
          paddingRight: theme.spacing("4xl"), // Espaciado lateral
          paddingLeft: theme.spacing("4xl"), // Espaciado lateral
          paddingBottom: theme.spacing("6xl"), // Espaciado inferior
        })}
      >
        <Grid container spacing={7} justifyContent="space-between">
          {/* Map para generar cada columna de links */}
          {footerLinks.map((section, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Typography
                sx={(theme) => ({
                  marginBottom: 2,
                  color: theme.palette.text.primary,
                  ...theme.typography.textSmSemibold,
                })}
              >
                {section.title}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <Box key={linkIndex} sx={(theme) => ({ display: "flex", alignItems: "center", gap: theme.spacing.md, alignContent: "center" })}>
                  <Link
                    href={link.url}
                    sx={(theme) => ({
                      cursor: "pointer",
                      marginBottom: 2,
                      display: "block", // Para que se comporten como bloques individuales
                      color: theme.palette.button.text.tertiaryColor,
                      ...theme.typography.textMdSemibold,
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    })}
                  >
                    {link.text}
                  </Link>
                  {/* Si el enlace tiene el campo 'badge', mostrar el badge */}
                  {link.badge && (
                    <CustomBadge
                      text={link.badge}
                    />
                  )}
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pie de copyright */}
      <Box
        sx={(theme) => ({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #E4E7EC", // Borde superior
          paddingTop: theme.spacing("4xl"),
          paddingBottom: theme.spacing("4xl"),
          paddingRight: theme.spacing("4xl"),
          paddingLeft: theme.spacing("4xl"),
          width: "100%",
          maxWidth: "1216px", // Ajuste del ancho máximo
          margin: "0 auto", // Centramos horizontalmente
        })}
      >
        {/* Logotipo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "142px", height: "auto" }}
          />
        </Box>
        <Typography
          sx={(theme) => ({
            color: theme.palette.text.quaternary,
            ...theme.typography.mdRegular,
          })}
        >
          © 2024 Solving.ai All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
