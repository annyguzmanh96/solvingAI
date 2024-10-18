import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    // Fuentes personalizadas
    textMdSemibold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      fontFamily: '"Poppins", sans-serif;',
    },
    textSmSemibold: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "38px",
      fontFamily: '"Poppins", sans-serif;',
    },
    h2Medium: {
      fontSize: "60px",
      fontWeight: 500,
      lineHeight: "72px",
      fontFamily: '"Poppins", sans-serif;',
      letterSpacing: "-2%",
    },
    h4Semibold: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
      fontFamily: '"Poppins", sans-serif;',
      letterSpacing: "-2%",
    },
    xlRegular: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
      fontFamily: '"Poppins", sans-serif;',
    },
  },
  // colores personalizados
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "#101828",
          secondary: "#6941C6",
          tertiary: "#475467",
        },
        bg: {
          primary: "#FFFFFF",
          secondary: "#F9FAFB",
        },
        button: {
          bg: {
            primary: "#7F56D9",
            secondary: "#FFFFFF",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#344054",
            tertiary: "#475467",
            tertiaryColor: "#6941C6",
          },
          border: {
            secondary: "#D0D5DD",
          },
        },
      },
    },
  },
  // radios personalizados
  radius: {
    md: "8px", 
    xl: "16px"
  },
  spacing: (factor) => `${0.25 * factor}rem`, // Sistema de espaciado en múltiplos de 0.25rem
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
