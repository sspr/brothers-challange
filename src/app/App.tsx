import { Container } from '@mui/material';

import { Header, Snackbar } from 'ui';
import { usePageTitle, useAuth, usePrevious, useLocale } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  usePageTitle();
  const { formatMessage } = useLocale();
  const { isAuthenticated } = useAuth();
  const prevIsAuth = usePrevious(isAuthenticated);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <AppRoutes />
      </Container>
      <Snackbar text={!isAuthenticated && prevIsAuth ? formatMessage({ id: 'logout.message' }) : undefined} />
    </>
  );
};
