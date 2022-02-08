import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useLocale } from 'hooks';
import { HeaderProps } from './Header.types';
import { LanguageSwitch } from './languageSwitch/LanguageSwitch';
import { styles } from './Header.styles';

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const { locale, setLocale, formatMessage } = useLocale();

  return (
    <Box sx={styles.box}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.typography}>
            {formatMessage({ id: 'header.title' })}
          </Typography>
          <LanguageSwitch initialValue={locale} onChange={setLocale} />
          <Button color="inherit" variant="outlined">
            {isLoggedIn ? formatMessage({ id: 'header.logout' }) : formatMessage({ id: 'header.login' })}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
