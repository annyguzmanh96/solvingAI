import { Typography } from "@mui/joy";
import { Link as ScrollLink } from "react-scroll";

function CustomTab(props) {
  const { text, color, toIdSection } = props;

  return (
    <ScrollLink
      to={toIdSection? toIdSection: ""}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
    >
      <Typography
        sx={(theme) => ({
          cursor: "pointer",
          color: color,
          ...theme.typography.textMdSemibold,
        })}
      >
        {text}
      </Typography>
    </ScrollLink>
  );
}

export default CustomTab;

