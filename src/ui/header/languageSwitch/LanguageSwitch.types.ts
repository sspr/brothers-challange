import { AppLocale } from 'context/locale/appLocale.enum';

export type LanguageSwitchProps = {
  initialValue: AppLocale;
  onChange: (currentLanguage: AppLocale) => void;
};
