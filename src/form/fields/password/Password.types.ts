import { Control } from 'react-hook-form';

import { LoginFields } from 'app/login/loginForm/LoginForm.types';

export type PasswordProps = {
  control: Control<LoginFields, object>;
};