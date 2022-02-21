import { Container } from '@mui/material';

import { Header } from 'ui';
import { usePageTitle } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';
import { useAuth } from 'hooks/useAuth/useAuth';

export const App = () => {
  usePageTitle();
  const { isLoggedIn, setToken } = useAuth();

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogoutClick={() => {
          setToken();
        }}
      />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
};
