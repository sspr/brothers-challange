import { useState } from 'react';
import { Container } from '@mui/material';

import { Header } from 'ui';
import { usePageTitle } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  usePageTitle();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
    </>
  );
};
