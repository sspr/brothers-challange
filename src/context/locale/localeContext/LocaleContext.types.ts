import { AppLocale } from '../appLocale.enum';

export type LocaleContextValuesTypes = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};
