import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';

import { styles } from './LoginForm.styles';
import { useLocale } from 'hooks';
import { Email } from 'form/fields/email/Email';
import { LoginFields } from './LoginForm.types';
import { Password } from 'form/fields/password/Password';
import { Checkbox } from 'form/fields/checkbox/Checkbox';

export const LoginForm = () => {
  const { formatMessage } = useLocale();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={styles.fromWrapper}>
      <Email control={control} />
      {errors?.email && <Typography color="red">{errors.email.message}</Typography>}
      <Password control={control} />
      {errors?.password && <Typography color="red">{errors.password.message}</Typography>}
      <Checkbox control={control} label={formatMessage({ id: 'login.checkbox' })} />
      <Button type="submit" fullWidth variant="contained" sx={styles.loginButton}>
        {formatMessage({ id: 'header.login' })}
      </Button>
    </Box>
  );
};
