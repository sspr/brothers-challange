import { AppLocale } from './appLocale.enum';

const userLocalce = navigator.language.substring(0, 2);

export const defaultLocale: AppLocale = userLocalce in AppLocale ? (userLocalce as AppLocale) : AppLocale.en;
