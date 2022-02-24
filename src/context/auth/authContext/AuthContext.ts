import { createContext } from 'react';

import { AuthContextValuesTypes } from './AuthContext.types';

export const AuthContext = createContext<AuthContextValuesTypes | undefined>(undefined);
