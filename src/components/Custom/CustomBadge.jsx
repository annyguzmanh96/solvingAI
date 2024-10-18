import { useTheme } from "@emotion/react";

import { Box, Typography } from "@mui/joy";

function CustomBadge(props) {
  const { text } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        width: "42px", // Ajusta el ancho
        height: "22px", // Ajusta la altura
        borderRadius: theme.radius.full, // Hace el borde completamente redondeado
        border: "1.5px solid #7F56D9", // Color y tamaño del borde
        padding: `${theme.spacing.xxs} ${theme.spacing.md}`, // Espaciado interno
        backgroundColor: "#ffffff", // Fondo claro
        marginLeft: "8px"
      }}
    >
      <Typography
        sx={{
          color: theme.palette.brand.utility[700], // Color del texto
          ...theme.typography.textXsMedium,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default CustomBadge;
