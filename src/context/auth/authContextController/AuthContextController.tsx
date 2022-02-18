import { useEffect, useState } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextControllerProps } from './AuthContextController.types';
import { checkIsLoggedInAction } from 'api/actions/auth/authActions';
import { useQuery } from 'api/hooks';
import { AuthStorage } from '../authStorage.enum';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data } = useQuery<string>(checkIsLoggedInAction(localStorage.getItem(AuthStorage.TOKEN)));

  useEffect(() => {
    setIsLoggedIn(!!data);
  }, [data]);

  return <AuthContext.Provider value={{ isLoggedIn, token: data ?? null }}>{children}</AuthContext.Provider>;
};
