import { Control } from 'react-hook-form';

import { LoginFields } from 'app/login/loginForm/LoginForm.types';

export type CheckboxProps = {
  control: Control<LoginFields, object>;
  label: string;
};
