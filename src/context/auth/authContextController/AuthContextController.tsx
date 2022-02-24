import { useEffect, useState } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextControllerProps } from './AuthContextController.types';
import { createCheckIsLoggedInAction } from 'api/actions/auth/authActions';
import { useQuery } from 'api/hooks';
import { AuthStorage } from '../authStorage.enum';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const [token, setToken] = useState<string | null | undefined>(localStorage.getItem(AuthStorage.TOKEN));

  const { error } = useQuery<string>(createCheckIsLoggedInAction());

  useEffect(() => {
    if (error) {
      setToken(null);
    }
  }, [error]);

  useEffect(() => {
    token ? localStorage.setItem(AuthStorage.TOKEN, token) : localStorage.setItem(AuthStorage.TOKEN, '');
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
