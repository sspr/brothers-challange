import { AppLocale } from 'context/locale/appLocale.enum';

export type LanguageSwitchProps = {
  value: AppLocale;
  onChange: (currentLanguage: AppLocale) => void;
};
