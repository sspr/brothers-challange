import { AppLocale } from 'context/locale/appLocale.enum';
import enMessages from './data/en.json';
import plMessages from './data/pl.json';

export const translations = {
  [AppLocale.en]: enMessages,
  [AppLocale.pl]: plMessages,
};
