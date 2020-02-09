/**
 * File for holding generic types for this project.
 * See types.ts in Typescript compiler codes
 */

/**
 * Theming definitions.
 *
 * This code holds the structure for how themer works.
 *
 */
export interface ComponentStyles extends IFont, DisplayStyles {}

/**
 * Display styles e.g. padding, margin, positioning
 */
export interface DisplayStyles {
  margin?: string;
  padding?: string;
  position?: string;
  left?: string;
  right?: string;
  border?: string;
}

/**
 * Mimics CSS font definition e.g. 'sans serif', 'Monospace'
 */
type FontFamily = string;

/**
 * Styling for a html text element e.g. <h1 />
 */
export interface IFont {
  color?: string;
  fontFamily?: FontFamily;
  lineHeight?: string;
  fontWeight?: string;
  fontSize?: number;
}

export class Font implements IFont {
  public color?: string;
  public fontFamily?: FontFamily;
  public lineHeight?: string;
  public fontWeight?: string;
  public fontSize?: number;

  constructor(fontFamily: FontFamily) {
    this.fontFamily = fontFamily;
  }

  // TODO: add more constructors
}

/**
 * A definition for a theme.
 * A theme is built of component styles and other, global settings, like color
 */
export interface Theme {
  // Default font
  font?: IFont;
  colors?: {
    text?: string;
    background?: string;
    primary?: string;
    secondary?: string;
    muted?: string;
  };
  components?: Record<string, ComponentStyles>;
}

// type Complete<T> = {
//   [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : (T[P] | undefined);
// }