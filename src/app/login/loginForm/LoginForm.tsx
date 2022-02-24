import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';

import { styles } from './LoginForm.styles';
import { useLocale } from 'hooks';
import { LoginFields, LoginFormProps } from './LoginForm.types';
import { InputField, CheckboxField } from 'form/fields';
import { emailValidation, requiredValidation, maxLengthValidation } from 'form/validators';
import { Button } from 'ui';

const defaultValues = {
  login: '',
  password: '',
};

export const LoginForm = ({ onSubmit, isLoading, isError }: LoginFormProps) => {
  const { formatMessage } = useLocale();

  const { control, handleSubmit } = useForm<LoginFields>({ defaultValues });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={styles.fromWrapper}>
      <InputField
        control={control}
        name="login"
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
      <Button sx={styles.loginButton} isLoading={isLoading}>
        {formatMessage({ id: 'header.login' })}
      </Button>
      {isError && <Typography color="error">{formatMessage({ id: 'login.wrongCredentials' })}</Typography>}
    </Box>
  );
};
