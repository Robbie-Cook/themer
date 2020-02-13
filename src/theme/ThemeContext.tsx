import * as React from "react";
import * as _ from 'lodash';

import DefaultTheme from "./DefaultTheme";
import { ITheme } from "types";

// The actual generated context.
// Will be exported for React.contextType
const ThemeContext = React.createContext(DefaultTheme);

interface Props {
  value?: ITheme;
  children?: any;
}

/**
 * Provide the Theme the non-hook way.
 */
const ThemeProvider: React.FC<Props> = props => {

  const theme = props.value ? mergeTheme(props.value, DefaultTheme) : DefaultTheme;

  return (
    <ThemeContext.Provider value={theme}>
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
const useTheme = (): ITheme => {
  return React.useContext(ThemeContext);
}

const mergeTheme = (newTheme: ITheme, baseTheme: ITheme): ITheme => {
  return _.merge(baseTheme, newTheme);
}

export { ThemeProvider, ThemeConsumer, ThemeContext, useTheme };
