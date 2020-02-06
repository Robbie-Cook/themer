import * as React from "react";

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
    <ThemeContext.Provider value={props.value ? props.value : DefaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer: React.FC<{ children: React.Component }> = props => {
  return (
    <ThemeContext.Consumer>{(context: Theme) => props.children}</ThemeContext.Consumer>
  );
};

export { ThemeProvider, ThemeConsumer, ThemeContext };
