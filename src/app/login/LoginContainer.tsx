import { createLoginAction } from 'api/actions/auth/authActions';
import { useMutation } from 'api/hooks';
import { LoginPayload } from 'api/types';
import { Login } from './Login';

export const LoginContainer = () => {
  const { mutate, data, isLoading, isError, error } = useMutation<LoginPayload, string>(createLoginAction);

  return <Login onLogin={mutate} token={data} isLoading={isLoading} isError={isError} error={String(error)} />;
};
