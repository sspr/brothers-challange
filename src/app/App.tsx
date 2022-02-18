import { Container } from '@mui/material';

import { Header } from 'ui';
import { usePageTitle } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';
import { useAuth } from 'hooks/useAuth/useAuth';

export const App = () => {
  usePageTitle();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
};
