import { Font, IPallette, IFont, ComponentStyles, Theme } from "../types";

const colors: IPallette = {
  primary: "black",
  text: "black",
  background: "white",
  secondary: "white",
  muted: "grey"
};

const font: IFont = new Font('Lato');

const defaultComponentStyles = new ComponentStyles(colors, font, {});

/**
 * A fallback theme to use.
 *
 * Replaces styles that aren't defined
 */

const DefaultTheme = new Theme({colors, font}, {});

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
