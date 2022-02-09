import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AppLocale } from 'context/locale/appLocale.enum';
import { styles } from './LanguageSwitch.styles';
import { LanguageSwitchProps } from './LanguageSwitch.types';

export const LanguageSwitch = ({ value, onChange }: LanguageSwitchProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value in AppLocale && event.target.value !== value) {
      onChange(event.target.value as AppLocale);
    }
  };

  return (
    <FormControl size="small" sx={styles.formControl}>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
        variant="standard"
        sx={styles.languageSwitch}
        data-testid="languageSwitch"
      >
        {Object.values(AppLocale).map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
