import { Box, Typography } from "@mui/joy";
import { useTheme } from "@emotion/react";

import CustomButton from "../components/Custom/CustomButton";

function CTASection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: `${theme.spacing("9xl")} ${theme.spacing("4xl")}`,
        textAlign: "center",
        backgroundColor: theme.palette.bg.primary,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "center",
          backgroundColor: theme.palette.bg.secondary,
          padding: theme.spacing("7xl"),
          gap: theme.spacing("4xl"),
          maxWidth: "1216px",
          minHeight: "212px",
          borderRadius: theme.radius.xl,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            textAlign: "initial",
            gap: theme.spacing.xl,
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.primary,
              ...theme.typography.displaySmSemibold,
            })}
          >
            The App is free to use!
          </Typography>
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.tertiary,
              ...theme.typography.xlRegular,
            })}
          >
            You have $5 USD available to spend on AI.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <CustomButton
            color={theme.palette.button.text.secondary}
            backgroundColor={theme.palette.button.bg.secondary}
            borderColor={theme.palette.button.border.secondary}
            text="Learn more"
          />
          <CustomButton
            color={theme.palette.button.text.primary}
            backgroundColor={theme.palette.button.bg.primary}
            borderColor={theme.palette.button.border.secondary}
            text="Get Started"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default CTASection;
