import { useEffect, useState } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextControllerProps } from './AuthContextController.types';
import { createCheckIsLoggedInAction } from 'api/actions/auth/authActions';
import { useQuery } from 'api/hooks';
import { AuthStorage } from '../authStorage.enum';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const localStorageToken = localStorage.getItem(AuthStorage.TOKEN);

  const [token, setToken] = useState<string | null | undefined>(localStorageToken);

  const { error } = useQuery<string>(createCheckIsLoggedInAction(), { enabled: !token });

  useEffect(() => {
    if (error) {
      setToken(null);
    }
  }, [error]);

  useEffect(() => {
    if (localStorageToken !== token) {
      localStorage.setItem(AuthStorage.TOKEN, token ? token : '');
    }
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
