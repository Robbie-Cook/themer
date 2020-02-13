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
export interface IComponentStyles {
  font?: IFont, 
  display?: IDisplayStyles, 
  colors?: IPallette
}

export class ComponentStyles implements IComponentStyles {
  public font?: IFont;
  public display?: IDisplayStyles; 
  public colors?: IPallette; 
  constructor(font?: IFont, display?: IDisplayStyles, colors?: IPallette) {
    this.font = font;
    this.display = display;
    this.colors = colors;
  }
}

export interface IPallette {
  text?: string;
  background?: string;
  primary?: string;
  secondary?: string;
  muted?: string;
}

/**
 * Display styles e.g. padding, margin, positioning
 */
export interface IDisplayStyles {
  colors?: IPallette;
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
export interface ITheme extends IComponentStyles {
  components?: Record<string, IComponentStyles>;
}

export class Theme extends ComponentStyles implements ITheme {
  private _components?: Record<string, IComponentStyles>;

  // constructor(theme: ITheme) {
  //   super();
  // }

  constructor(component: IComponentStyles, components?: Record<string, IComponentStyles>) {
    super(component.font, component.display, component.colors);
    this._components = components;
  }

  /** 
   * Get a component of the theme.
   */
  getComponent?(index: string) {
    if (this._components[index]) {
      return this._components[index];
    } else {
      console.log(this.font);
    }
  }
}

// type Complete<T> = {
//   [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : (T[P] | undefined);
// }
