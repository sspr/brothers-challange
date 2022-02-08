import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'assets/styles/theme';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <LocaleContextController>{children}</LocaleContextController>
  </ThemeProvider>
);
