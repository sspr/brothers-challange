import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { styles } from './Login.styles';
import { useLocale } from 'hooks';
import { LoginForm } from './loginForm/LoginForm';
import { loginAction } from 'api/actions/auth/authActions';
import { useMutation } from 'api/hooks';
import { LoginPayload } from 'api/actions/auth/auth.types';
import { AuthStorage } from 'context/auth/authStorage.enum';

export const Login = () => {
  const { formatMessage } = useLocale();

  const { mutate, data } = useMutation<LoginPayload>(loginAction);

  if (data) {
    localStorage.setItem(AuthStorage.TOKEN, String(data));
  }

  const handleFormSubmit = (variables: LoginPayload) => {
    mutate(variables);

    if (data) {
      localStorage.setItem(AuthStorage.TOKEN, String(data));
    }
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
        <LoginForm onSubmit={handleFormSubmit} />
      </Box>
    </Container>
  );
};
