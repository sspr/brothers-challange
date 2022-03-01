import { useContext } from 'react';

import { SnackbarContext } from 'context/snackbar/snackbarContext/SnackbarContext';
import { SnackbarContextValuesTypes } from 'context/snackbar/snackbarContext/SnackbarContext.types';

export const useSnackbar = (): SnackbarContextValuesTypes => {
  const context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('useSnackbar must be used withing SnackbarContextController');
  }

  return {
    ...context,
  };
};
