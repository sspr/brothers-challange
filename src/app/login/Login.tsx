import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { styles } from './Login.styles';
import { useLocale } from 'hooks';
import { LoginForm } from './loginForm/LoginForm';
import { loginAction } from 'api/actions/auth/authActions';
import { useMutation } from 'api/hooks';
import { LoginPayload } from 'api/actions/auth/auth.types';
import { useAuth } from 'hooks/useAuth/useAuth';
import { AppRoute } from 'routing/AppRoute.enum';

export const Login = () => {
  const { formatMessage } = useLocale();
  const { mutate, data, isLoading, isError } = useMutation<LoginPayload>(loginAction);
  const { setToken, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(AppRoute.home);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (data) {
      setToken(String(data));
      navigate(AppRoute.home);
    }
  }, [data]);

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
        <LoginForm
          onSubmit={(data) => {
            mutate(data);
          }}
          isLoading={isLoading}
          isError={isError}
        />
      </Box>
    </Container>
  );
};
