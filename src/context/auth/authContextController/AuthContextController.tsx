import { useEffect, useState } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextControllerProps } from './AuthContextController.types';
import { checkIsLoggedInAction } from 'api/actions/auth/authActions';
import { useQuery } from 'api/hooks';
import { AuthStorage } from '../authStorage.enum';

export const AuthContextController = ({ children }: AuthContextControllerProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data } = useQuery<string>(checkIsLoggedInAction(), { enabled: !!localStorage.getItem(AuthStorage.TOKEN) });

  useEffect(() => {
    setIsLoggedIn(!!data);
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setToken: (token?: string) => {
          setIsLoggedIn((prevState) => !prevState);
          token ? localStorage.setItem(AuthStorage.TOKEN, token) : localStorage.setItem(AuthStorage.TOKEN, '');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
