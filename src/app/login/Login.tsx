import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { styles } from './Login.styles';
import { useLocale } from 'hooks';

export const Login = () => {
  const { formatMessage } = useLocale();

  type LoginFields = {
    email: string;
    password: string;
    checkbox: boolean;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={styles.wrapper}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {formatMessage({ id: 'header.login' })}
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={styles.fromWrapper}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: 'email is required' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                id="email"
                label={formatMessage({ id: 'login.email' })}
                autoComplete="email"
                autoFocus
              />
            )}
          />
          {errors?.email && <Typography color="red">{errors.email.message}</Typography>}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'password is requirrd irequi',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label={formatMessage({ id: 'login.password' })}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}
          />
          {errors?.password && <Typography color="red">{errors.password.message}</Typography>}
          <Controller
            name="checkbox"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={<Checkbox value="remember" color="primary" />}
                label={formatMessage({ id: 'login.rememberUser' })}
              />
            )}
          />

          <Button type="submit" fullWidth variant="contained" sx={styles.loginButton}>
            {formatMessage({ id: 'header.login' })}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
