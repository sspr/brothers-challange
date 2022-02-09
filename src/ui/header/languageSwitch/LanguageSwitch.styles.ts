import { theme } from 'assets/styles/theme';

export const styles = {
  formControl: { marginRight: '16px' },
  languageSwitch: {
    color: theme.palette.common.white,
    '& .MuiSvgIcon-root': { color: theme.palette.common.white },
    '&:before': { border: 'none!IMPORTANT' },
  },
};
