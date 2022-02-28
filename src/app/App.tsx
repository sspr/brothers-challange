import { Container } from '@mui/material';
import { useMemo } from 'react';

import { Header, Snackbar } from 'ui';
import { usePageTitle, useAuth, usePrevious, useLocale } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  usePageTitle();
  const { formatMessage } = useLocale();
  const { isAuthenticated } = useAuth();
  const prevIsAuth = usePrevious(isAuthenticated);

  const snackbar = useMemo(
    () => <Snackbar text={!isAuthenticated && prevIsAuth ? formatMessage({ id: 'logout.message' }) : undefined} />,
    [isAuthenticated],
  );

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
      {snackbar}
    </>
  );
};
