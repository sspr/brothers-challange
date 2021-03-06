import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth, useLocale, useSnackbar } from 'hooks';
import { LanguageSwitch } from './languageSwitch/LanguageSwitch';
import { styles, StyledLink } from './Header.styles';
import { AppRoute } from 'routing/AppRoute.enum';

export const Header = () => {
  const { locale, setLocale, formatMessage } = useLocale();
  const { isAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      navigate(AppRoute.LOGIN);
    } else {
      setToken(null);
      showSnackbar(formatMessage({ id: 'logout.message' }));
    }
  };

  return (
    <Box sx={styles.headerWrapper}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.title}>
            <StyledLink to={AppRoute.HOME}>{formatMessage({ id: 'header.title' })}</StyledLink>
          </Typography>
          <LanguageSwitch value={locale} onChange={setLocale} />
          <Button onClick={handleButtonClick} color="inherit" variant="outlined">
            {isAuthenticated ? formatMessage({ id: 'header.logout' }) : formatMessage({ id: 'header.login' })}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
