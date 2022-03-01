import { createContext } from 'react';

import { SnackbarContextValuesTypes } from './SnackbarContext.types';

export const SnackbarContext = createContext<SnackbarContextValuesTypes | undefined>(undefined);
