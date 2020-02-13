import { Font, IPallette, IFont, ComponentStyles, Theme } from "../types";

const colors: IPallette = {
  primary: "black",
  text: "black",
  background: "white",
  secondary: "white",
  muted: "grey"
};

const font: IFont = new Font('Lato');

const defaultComponentStyles = new ComponentStyles(font, {}, colors);

/**
 * A fallback theme to use.
 *
 * Replaces styles that aren't defined
 */

const DefaultTheme = new Theme({font, colors});

// const DefaultTheme: ITheme = {
//   font: font,
//   colors: defaultColors,
//   components: {
//     input: {
//       ...defaultColors,
//     }
//   }
// };

export default DefaultTheme;
