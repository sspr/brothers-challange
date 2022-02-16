import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { styles } from './Spinner.styles';

export const Spinner = () => (
  <Box sx={styles}>
    <CircularProgress />
  </Box>
);
