import { ReactElement, useState } from 'react';
import { Queries, queries, render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { IntlProvider } from 'react-intl';

import { theme } from 'assets/styles/theme';
import { AppLocale } from 'context/locale/appLocale.enum';
import { LocaleContext } from 'context/locale/localeContext/LocaleContext';
import { translations } from 'i18n/messages';
import { AppProvidersProps } from 'providers/AppProviders.types';

type CustomRenderOptions<Q extends Queries = typeof queries> = RenderOptions<Q> & {
  locale?: AppLocale;
};

const customRender = (ui: ReactElement, options?: Omit<CustomRenderOptions, 'wrapper'>) => {
  const Wrapper = ({ children }: AppProvidersProps) => {
    const [locale, setLocale] = useState(options?.locale ?? AppLocale.en);

    return (
      <ThemeProvider theme={theme}>
        <IntlProvider defaultLocale={AppLocale.en} key={locale} locale={locale} messages={translations[locale]}>
          <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
        </IntlProvider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
