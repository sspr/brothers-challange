import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useLocale } from 'hooks';
import { HeaderProps } from './Header.types';
import { LanguageSwitch } from './languageSwitch/LanguageSwitch';
import { styles, StyledLink } from './Header.styles';
import { AppRoute } from 'routing/AppRoute.enum';

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const { locale, setLocale, formatMessage } = useLocale();

  return (
    <Box sx={styles.headerWrapper}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.title}>
            <StyledLink to={AppRoute.HOME}>{formatMessage({ id: 'header.title' })}</StyledLink>
          </Typography>
          <LanguageSwitch value={locale} onChange={setLocale} />
          <StyledLink to={AppRoute.LOGIN}>
            <Button color="inherit" variant="outlined">
              {isLoggedIn ? formatMessage({ id: 'header.logout' }) : formatMessage({ id: 'header.login' })}
            </Button>
          </StyledLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
