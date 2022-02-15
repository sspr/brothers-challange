import { Control } from 'react-hook-form';

import { LoginFields } from 'app/login/loginForm/LoginForm.types';

export type EmailProps = {
  control: Control<LoginFields, object>;
};
