import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { useLocale } from 'hooks';
import { HeaderProps } from './Header.types';
import { LanguageSwitch } from './languageSwitch/LanguageSwitch';
import { styles, StyledLink } from './Header.styles';
import { AppRoute } from 'routing/AppRoute.enum';
import { AuthStorage } from 'context/auth/authStorage.enum';

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const { locale, setLocale, formatMessage } = useLocale();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      navigate(AppRoute.home);
    }

    localStorage.setItem(AuthStorage.TOKEN, '');
    navigate(AppRoute.login);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.title}>
            <StyledLink to={AppRoute.home}>{formatMessage({ id: 'header.title' })}</StyledLink>
          </Typography>
          <LanguageSwitch value={locale} onChange={setLocale} />
          <Button onClick={handleButtonClick} color="inherit" variant="outlined">
            {isLoggedIn ? formatMessage({ id: 'header.logout' }) : formatMessage({ id: 'header.login' })}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
