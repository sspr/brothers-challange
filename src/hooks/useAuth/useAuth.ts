import { useContext } from 'react';

import { AuthContext } from 'context/auth/authContext/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used withing AuthContextController');
  }

  return {
    ...context,
  };
};
