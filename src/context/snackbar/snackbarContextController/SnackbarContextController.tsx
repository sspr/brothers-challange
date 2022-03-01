import { useState } from 'react';

import { Snackbar } from 'ui';
import { SnackbarContext } from '../snackbarContext/SnackbarContext';
import { SnackbarContextControllerProps } from './SnackbarContextController.types';

export const SnackbarContextController = ({ children }: SnackbarContextControllerProps) => {
  const [text, setText] = useState<string | undefined>(undefined);

  return (
    <SnackbarContext.Provider value={{ showSnackbar: setText }}>
      <Snackbar text={text} />
      {children}
    </SnackbarContext.Provider>
  );
};
