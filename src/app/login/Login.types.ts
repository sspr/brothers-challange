import { LoginFields } from './loginForm/LoginForm.types';

export type LoginProps = {
  onLogin: (data: LoginFields) => void;
  token: string | undefined;
  isLoading: boolean;
  error: string;
};
