import { theme } from 'assets/styles/theme';

export const styles = {
  formControl: { mr: 2 },
  languageSwitch: {
    color: theme.palette.common.white,
    '& .MuiSvgIcon-root': { color: theme.palette.common.white },
    '&:before': { border: 'none!IMPORTANT' },
  },
};
