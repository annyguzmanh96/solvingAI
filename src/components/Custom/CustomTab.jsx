import { Typography } from "@mui/joy";
import { Link as ScrollLink } from "react-scroll";

function CustomTab(props) {
  const { text, color, toIdSection } = props;

  return (
    <ScrollLink
      to={toIdSection ? toIdSection : ""}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      activeClass="active-tab" // Assign active class
    >
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          color: color,
          ...theme.typography.textMdSemibold,
          '&:hover': {
            color: theme.palette.text.secondary, // Change color on hover
          },
          '&.active-tab': {
            color: theme.palette.button.text.primary, // Change color when active
          },
        })}
      >
        {text}
      </Typography>
    </ScrollLink>
  );
}

export default CustomTab;

