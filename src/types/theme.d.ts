import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    palete: PaletteOptions | undefined;
    color: {
      white: string;
      red: string;
      purple: string;
      blue: string;
      green: string;
      grey: string;
      orange: string;
    };
  }
  interface ThemeOptions {
    color?: {
      white?: string;
      red?: string;
      purple?: string;
      blue?: string;
      green?: string;
      grey?: string;
      orange?: string;
    };
  }
}
