import { Theme } from 'types';

/**
 * A fallback theme to use.
 * 
 * Replaces styles that aren't defined
 */

const DefaultTheme: Theme = {
    colors: {
      text: 'black',
      background: 'white',
      primary: 'black',
      secondary: 'white',
      muted: 'grey',
    },
    components: {},
  }

export default DefaultTheme;