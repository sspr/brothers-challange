import { Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

import { styles } from './LoginForm.styles';
import { useLocale } from 'hooks';
import { LoginFields, LoginFormProps } from './LoginForm.types';
import { InputField, CheckboxField } from 'form/fields';
import { emailValidation, requiredValidation, maxLengthValidation } from 'form/validators';

const defaultValues = {
  email: '',
  password: '',
  checkbox: false,
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { formatMessage } = useLocale();

  const { control, handleSubmit } = useForm<LoginFields>({ defaultValues });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={styles.fromWrapper}>
      <InputField
        control={control}
        name="email"
        fullWidth
        autoComplete="email"
        autoFocus
        label={formatMessage({ id: 'login.email' })}
        rules={[emailValidation(), requiredValidation(), maxLengthValidation(30)]}
      />
      <InputField
        control={control}
        name="password"
        type="password"
        fullWidth
        autoComplete="current-password"
        label={formatMessage({ id: 'login.password' })}
        rules={[maxLengthValidation(30), requiredValidation()]}
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
