import { Theme, Font } from "../types";

/**
 * A fallback theme to use.
 *
 * Replaces styles that aren't defined
 */

const DefaultTheme: Theme = {
  font: new Font('Lato'),
  colors: {
    primary: "black",
    text: "black",
    background: "white",
    secondary: "white",
    muted: "grey"
  },
  components: {}
};

export default DefaultTheme;
