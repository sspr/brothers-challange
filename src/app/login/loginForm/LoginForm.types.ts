import { LoginPayload } from 'api/actions/auth/auth.types';

export type LoginFields = {
  login: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: (data: LoginPayload) => void;
  isLoading: boolean;
  isError: boolean;
};
