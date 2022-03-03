import { ReactElement, useState } from 'react';
import { Queries, queries, render, RenderOptions } from '@testing-library/react';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from 'assets/styles/theme';
import { AppLocale } from 'context/locale/appLocale.enum';
import { LocaleContext } from 'context/locale/localeContext/LocaleContext';
import { translations } from 'i18n/messages';
import { AppProvidersProps } from 'providers/AppProviders.types';
import { globalStyles } from 'assets/styles/globalStyles';
import { AuthContext } from 'context/auth/authContext/AuthContext';
import { SnackbarContextController } from 'context/snackbar/snackbarContextController/SnackbarContextController';

type CustomRenderOptions<Q extends Queries = typeof queries> = RenderOptions<Q> & {
  locale?: AppLocale;
  isAuthenticated: boolean;
};

const customRender = (ui: ReactElement, options?: Omit<CustomRenderOptions, 'wrapper'>) => {
  const Wrapper = ({ children }: AppProvidersProps) => {
    const [locale, setLocale] = useState(options?.locale ?? AppLocale.en);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        <Router>
          <IntlProvider defaultLocale={AppLocale.en} key={locale} locale={locale} messages={translations[locale]}>
            <AuthContext.Provider value={{ isAuthenticated: options?.isAuthenticated ?? false, setToken: () => {} }}>
              <LocaleContext.Provider value={{ locale, setLocale }}>
                <SnackbarContextController>{children}</SnackbarContextController>
              </LocaleContext.Provider>
            </AuthContext.Provider>
          </IntlProvider>
        </Router>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
