import { useState } from 'react';
import { Container } from '@mui/material';

import { Header } from 'ui';
import { Dashboard } from './dashboard/Dashboard';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container maxWidth="md">
        <Dashboard />
      </Container>
    </>
  );
};
