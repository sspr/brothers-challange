import { Container } from '@mui/material';

import { Header, Snackbar } from 'ui';
import { usePageTitle, useAuth, usePrevious, useLocale } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  usePageTitle();
  const { formatMessage } = useLocale();
  const { isAuthenticated, setToken } = useAuth();
  const prevIsAuth = usePrevious(isAuthenticated);

  console.log(isAuthenticated, prevIsAuth);

  return (
    <>
      <Header
        isLoggedIn={isAuthenticated}
        onLogoutClick={() => {
          setToken(null);
        }}
      />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
      <Snackbar text={!isAuthenticated && prevIsAuth ? formatMessage({ id: 'logout.message' }) : undefined} />
    </>
  );
};
