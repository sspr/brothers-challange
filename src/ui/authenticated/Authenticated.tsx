import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { Card, Spinner } from 'ui';
import { AuthenticatedProps } from './Authenticated.types';

export const Authenticated = ({ children, shouldAuthenticate }: AuthenticatedProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldAuthenticate) {
      navigate(AppRoute.HOME);
    }
  }, [shouldAuthenticate]);

  if (!shouldAuthenticate) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  return <>{children}</>;
};
