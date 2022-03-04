import plLocale from 'date-fns/locale/pl';
import enLocale from 'date-fns/locale/en-US';
import { Locale } from 'date-fns';

import { AppLocale } from './appLocale.enum';

export type DatePickerLocale = {
  locale: Locale;
  mask: string;
  format: string;
};

export const datePickerLocale: Record<AppLocale, DatePickerLocale> = {
  en: {
    locale: enLocale,
    mask: '__/__/____',
    format: 'MM/dd/yyyy',
  },
  pl: {
    locale: plLocale,
    mask: '__.__.____',
    format: 'dd.MM.yyyy',
  },
};
