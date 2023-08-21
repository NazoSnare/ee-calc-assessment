// styled.d.ts
import 'styled-components';

declare module 'styled-components' {

  export interface ThemeColors {
     primary: string;
     secondary: string;
     tertiary: string;
     neutral: {
      light: string;
      dark: string;
     }
  }

  export interface DefaultTheme {
    colors:ThemeColors;
  }
}
