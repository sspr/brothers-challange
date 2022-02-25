import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, deepOrange, green, purple, red } from '@mui/material/colors';

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
    white: '#FFF',
    red: red[500],
    purple: purple[500],
    blue: blue[500],
    green: green[600],
    grey: blueGrey[500],
    orange: deepOrange[500],
  },
});
