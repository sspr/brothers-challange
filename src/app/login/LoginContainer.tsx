import { createLoginAction } from 'api/actions/auth/authActions';
import { useMutation } from 'api/hooks';
import { LoginPayload } from 'api/types';
import { Login } from './Login';

export const LoginContainer = () => {
  const { mutate, data, isLoading, isError } = useMutation<LoginPayload>(createLoginAction);

  return <Login mutate={mutate} data={data} isLoading={isLoading} isError={isError} />;
};
