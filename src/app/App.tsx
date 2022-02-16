import { useState } from 'react';
import { Container } from '@mui/material';

import { Header } from 'ui';
import { usePageTitle } from 'hooks';
import { DashboardContainer } from './dashboard/DashboardContainer';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  usePageTitle();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container maxWidth="md">
        <DashboardContainer />
      </Container>
    </>
  );
};
