import { Button } from "@mui/joy";

function CustomButton(props) {
  const { color, backgroundColor, borderColor, text, style } = props;
  return (
    <Button
      sx={(theme) => ({
        cursor: "pointer",
        color: color,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        height: "48px",
        minWidth: "auto",
        borderRadius: theme.radius.md,
        border: "1px",
        padding: "12px 18px",
        gap: "6px",
        boxShadow: `
        0px 1px 2px rgba(16, 24, 40, 0.05), 
        inset 0px -2px 0px rgba(16, 24, 40, 0.05),
        inset 0px 0px 0px 1px rgba(16, 24, 40, 0.18); `,
        ...theme.typography.textMdSemibold,
        ...style,
        "&:hover": {
          backgroundColor: backgroundColor, // Mantiene el color de fondo
          boxShadow: `
              0px 8px 10px rgba(16, 24, 40, 0.1), 
              inset 0px -2px 0px rgba(16, 24, 40, 0.05),
              inset 0px 0px 0px 1px rgba(16, 24, 40, 0.18);`,
        },
      })}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
