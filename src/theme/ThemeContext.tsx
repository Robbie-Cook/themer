/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import * as React from "react";
import * as _ from 'lodash';

/**
 * TODO: split these into separate files.
 * Not a priority at the moment.
 */
import DefaultTheme from "./DefaultTheme";
import { ITheme } from "types";

// The actual generated context.
// Will be exported for React.contextType
const ThemeContext = React.createContext(DefaultTheme);

export interface IThemeProviderProps {
  value?: ITheme;
  children?: any;
}

/**
 * Provide the Theme the non-hook way.
 */
const ThemeProvider: React.FC<IThemeProviderProps> = props => {

  const theme = props.value ? mergeTheme(props.value, DefaultTheme) : DefaultTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {/* Set global font */}
      <Global
      styles={css`
        font-family: ${theme.font.fontFamily};
      `}
    />
      {props.children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer: React.FC<{ children: any }> = ({ children }) => {
  return <ThemeContext.Consumer>{children}</ThemeContext.Consumer>;
};

/**
 * An hook to use within function components
 * for getting the context object.
 * 
 * @param component A component to draw from the theme.
 */
const useTheme = (component?: string): ITheme => {
  const context = React.useContext(ThemeContext);
  if (context.getComponent && component) {
    return context.getComponent(component);
  } 
  return context;
}

const mergeTheme = (newTheme: ITheme, baseTheme: ITheme): ITheme => {
  return _.merge(baseTheme, newTheme);
}

export { ThemeProvider, ThemeConsumer, ThemeContext, useTheme };
