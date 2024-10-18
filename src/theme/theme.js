import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    // Fuentes personalizadas
    textMdSemibold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      fontFamily: "'Poppins', sans-serif;",
    },
    h2Medium: {
      fontSize: "60px",
      fontWeight: 500,
      lineHeight: "72px",
      fontFamily: "'Poppins', sans-serif;",
      letterSpacing: "-2%",
    },
    textRegular: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
      fontFamily: "'Poppins', sans-serif;",
    },
  },
  // colores personalizados
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "#101828",
          tertiary: "#475467",
        },
        button:{
          bg:{
            primary: "#7F56D9",
            secondary: "#FFFFFF",
          },
          text:{
            tertiary: "#475467",
            tertiaryColor: "#6941C6",
            primary: "#FFFFFF",
            secondary: "#344054"
          }
        }
      },
    },
  },
  // radios personalizados
  radius: {
    md: "8px", // Radio medio
  },
  spacing: (factor) => `${0.25 * factor}rem`, // Sistema de espaciado en múltiplos de 0.25rem
});

export default theme;
