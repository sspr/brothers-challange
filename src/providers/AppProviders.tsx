import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from 'assets/styles/theme';
import { globalStyles } from 'assets/styles/globalStyles';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { AppProvidersProps } from './AppProviders.types';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { SnackbarContextController } from 'context/snackbar/snackbarContextController/SnackbarContextController';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextController>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={globalStyles} />
          <Router>
            <LocaleContextController>
              <SnackbarContextController>{children}</SnackbarContextController>
            </LocaleContextController>
          </Router>
        </ThemeProvider>
      </AuthContextController>
    </QueryClientProvider>
  );
};
