export type LoginFields = {
  login: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: (data: LoginFields) => void;
  isLoading: boolean;
  error: string;
};
