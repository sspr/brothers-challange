import { Container } from '@mui/material';

import { Header } from 'ui';
import { usePageTitle } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  usePageTitle();

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
};
