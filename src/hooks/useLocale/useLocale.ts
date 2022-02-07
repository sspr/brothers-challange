import { useContext } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { LocaleContext } from 'context/locale/localeContext/LocaleContext';
import { LocaleContextValuesTypes } from 'context/locale/localeContext/LocaleContext.types';

export const useLocale = (): IntlShape & LocaleContextValuesTypes => {
  const intl = useIntl();
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error('useLocale must be used withing LocaleContextController');
  }

  return {
    ...intl,
    ...context,
  };
};
