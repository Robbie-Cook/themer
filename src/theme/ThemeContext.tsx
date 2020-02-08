import * as React from "react";
import * as _ from 'lodash';

import DefaultTheme from "./DefaultTheme";
import { Theme } from "types";

// The actual generated context.
// Will be exported for React.contextType
const ThemeContext = React.createContext(DefaultTheme);

interface Props {
  value?: Theme;
  children?: any;
}

const ThemeProvider: React.FC<Props> = props => {
  return (
    <ThemeContext.Provider value={props.value ? mergeTheme(props.value, DefaultTheme) : DefaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer: React.FC<{ children: any }> = ({ children }) => {
  return <ThemeContext.Consumer>{children}</ThemeContext.Consumer>;
};

/**
 * An easy hook to use for getting the context object
 */
const useTheme = (): Theme => {
  return React.useContext(ThemeContext);
}

const mergeTheme = (newTheme: Theme, baseTheme: Theme): Theme => {
  return _.merge(baseTheme, newTheme);
}

export { ThemeProvider, ThemeConsumer, ThemeContext, useTheme };
