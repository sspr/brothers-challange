export type LoginFields = {
  email: string;
  password: string;
  checkbox: boolean;
};

export type LoginFormProps = {
  onSubmit: (data: LoginFields) => void;
};
