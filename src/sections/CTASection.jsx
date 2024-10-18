import { Box, Typography } from "@mui/joy";
import { useTheme } from "@emotion/react";

import CustomButton from "../components/Custom/CustomButton";

function CTASection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: `${theme.spacing(24)} ${theme.spacing(8)}`,
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
          padding: theme.spacing(16),
          gap: theme.spacing(8),
          maxWidth: "1216px",
          minHeight: "212px",
          borderRadius: theme.radius.xl,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            textAlign: "initial",
            gap: theme.spacing(4),
          }}
        >
          <Typography
            sx={(theme) => ({
              color: theme.palette.text.primary,
              ...theme.typography.textSmSemibold,
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
            gap: theme.spacing(3),
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
