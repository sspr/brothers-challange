import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useLocale } from 'hooks';
import { HeaderProps } from './Header.types';
import { LanguageSwitch } from './languageSwitch/LanguageSwitch';
import { styles, StyledLink } from './Header.styles';
import { AppRoute } from 'routing/AppRoute.enum';

export const Header = ({ isLoggedIn, onLogoutClick }: HeaderProps) => {
  const { locale, setLocale, formatMessage } = useLocale();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    !isLoggedIn ? navigate(AppRoute.login) : onLogoutClick();
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
