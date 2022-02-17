import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';

import { styles } from './LoginForm.styles';
import { useLocale } from 'hooks';
import { LoginFields, LoginFormProps } from './LoginForm.types';
import { InputField } from 'form/fields/inputField/InputField';
import { emailValidation } from 'form/validators/emailValidation/emailValidation';
import { passwordValidation } from 'form/validators/passwordValidation/passwordValidation';
import { CheckboxField } from 'form/fields/checkboxField/CheckboxField';

const inputsMaxLength = 30;

const defaultValues = {
  email: '',
  password: '',
  checkbox: false,
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { formatMessage } = useLocale();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({ defaultValues });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={styles.fromWrapper}>
      <InputField
        control={control}
        name="email"
        fullWidth
        autoComplete="email"
        autoFocus
        label={formatMessage({ id: 'login.email' })}
        rules={emailValidation(inputsMaxLength)}
        helperText={
          errors.email?.message ? formatMessage({ id: errors.email?.message }, { maxLength: inputsMaxLength }) : null
        }
      />
      <InputField
        control={control}
        name="password"
        type="password"
        fullWidth
        autoComplete="current-password"
        label={formatMessage({ id: 'login.password' })}
        rules={passwordValidation(inputsMaxLength)}
        helperText={
          errors.password?.message
            ? formatMessage({ id: errors.password?.message }, { maxLength: inputsMaxLength })
            : null
        }
      />
      <CheckboxField
        control={control}
        name="checkbox"
        value="remember"
        label={formatMessage({ id: 'login.checkbox' })}
      />
      <Button type="submit" fullWidth variant="contained" sx={styles.loginButton}>
        {formatMessage({ id: 'header.login' })}
      </Button>
    </Box>
  );
};
