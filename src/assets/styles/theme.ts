import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, deepOrange, green, purple, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    color: {
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
      red?: string;
      purple?: string;
      blue?: string;
      green?: string;
      grey?: string;
      orange?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
  color: {
    red: red[500],
    purple: purple[500],
    blue: blue[500],
    green: green[600],
    grey: blueGrey[500],
    orange: deepOrange[500],
  },
});
