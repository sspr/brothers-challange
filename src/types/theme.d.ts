import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    palete: PaletteOptions | undefined;
    color: {
      purple: string;
      blue: string;
      green: string;
      grey: string;
      yellow: string;
      pink: string;
      cyan: string;
      brown: string;
    };
  }
  interface ThemeOptions {
    color: {
      purple: string;
      blue: string;
      green: string;
      grey: string;
      yellow: string;
      pink: string;
      cyan: string;
      brown: string;
    };
  }
}
