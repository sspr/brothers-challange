import { Container } from '@mui/material';

import { Header } from 'ui';
import { usePageTitle, useAuth } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  usePageTitle();
  const { isAuthenticated, setToken } = useAuth();

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
    </>
  );
};
