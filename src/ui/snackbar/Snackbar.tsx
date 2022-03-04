import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

import { SnackbarProps } from './Snackbar.types';
import { styles } from './Snackbar.styles';

export const Snackbar = ({ text, onClose }: SnackbarProps) => {
  return (
    <MuiSnackbar open={!!text} autoHideDuration={3000} onClose={onClose}>
      <Alert color="success" sx={styles}>
        {text}
      </Alert>
    </MuiSnackbar>
  );
};
