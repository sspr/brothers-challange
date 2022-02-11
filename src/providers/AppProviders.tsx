import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from 'assets/styles/theme';
import { globalStyles } from 'assets/styles/globalStyles';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <LocaleContextController>{children}</LocaleContextController>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
