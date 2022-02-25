import { useEffect, useState } from 'react';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

import { SnackbarProps } from './Snackbar.types';
import { styles } from './Snackbar.styles';

export const Snackbar = ({ text }: SnackbarProps) => {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (text) {
      setSnackbarOpen(true);
    }
  }, [text]);

  console.log(text);

  return (
    <MuiSnackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
      <Alert color="success" sx={styles}>
        {text}
      </Alert>
    </MuiSnackbar>
  );
};
