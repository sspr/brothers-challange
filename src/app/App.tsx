import { useState } from 'react';
import { Container } from '@mui/material';

import { Header } from 'ui';
import { Dashboard } from './dashboard/Dashboard';
import { usePageTitle } from 'hooks';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  usePageTitle();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container maxWidth="md">
        <Dashboard />
      </Container>
    </>
  );
};
