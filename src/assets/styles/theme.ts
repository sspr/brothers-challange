import { createTheme } from '@mui/material/styles';
import { blue, brown, cyan, green, grey, pink, purple, yellow } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
  typography: {
    h6: {
      fontWeight: 400,
    },
  },
  color: {
    grey: grey[500],
    purple: purple[500],
    blue: blue[900],
    green: green[600],
    yellow: yellow[700],
    pink: pink[500],
    cyan: cyan[500],
    brown: brown[500],
  },
});
