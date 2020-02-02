/**
 * File for holding generic types for this project
 */

/**
 * Mimics CSS font definition e.g. 'sans serif', 'Monospace'
 */
type FontType = Array<string> | string;

/** 
 * Styling for a html text element e.g. <h1 />
 */
interface FontStyles {
  color?: string,
  fontFamily?: string,
  lineHeight?: string,
  fontWeight?: string,
  fontSize?: number
}

/**
 * A definition for a theme 
 */
interface Theme {
  heading: FontStyles,
  base: {
    space: Array<number>,
    fonts: {
      body: FontType,
      heading: string,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      text: string,
      background: string,
      primary: string,
      secondary: string,
      muted: string,
    },
    styles: {
      root: {
        fontFamily: string,
        lineHeight: string,
        fontWeight: string,
      },
      h1: FontStyles
      h2: FontStyles
      h3: FontStyles
      h4: FontStyles
      h5: FontStyles
      h6: FontStyles
      p: FontStyles
      a: FontStyles
      pre: FontStyles
      code: FontStyles
      table:FontStyles
      th: FontStyles
      td: FontStyles
      img:FontStyles
    },
  }
}
