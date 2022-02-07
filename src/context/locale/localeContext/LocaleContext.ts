import { createContext } from 'react';

import { LocaleContextValuesTypes } from './LocaleContext.types';

export const LocaleContext = createContext<LocaleContextValuesTypes | undefined>(undefined);
