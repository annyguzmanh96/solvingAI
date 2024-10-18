import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    // Fuentes personalizadas
    textSmSemibold: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
      fontFamily: '"Poppins", sans-serif;',
    },
    textMdSemibold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      fontFamily: '"Poppins", sans-serif;',
    },
    displaySmSemibold: {
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
    mdRegular: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: '"Poppins", sans-serif;',
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
          quaternary: "#667085"
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
  spacing: (factor) => {
    const scale = {
      xl: "16px",
      "4xl": "32px",
      "6xl": "48px",
      "7xl": "64px",
      "9xl": "96px",
    };
    return typeof factor === "number" ? `${0.25 * factor}rem` : scale[factor];
  },
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
