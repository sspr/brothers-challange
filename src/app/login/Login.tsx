import { Avatar, CssBaseline, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useLocale, useAuth } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { styles } from './Login.styles';
import { LoginForm } from './loginForm/LoginForm';
import { LoginProps } from './Login.types';
import { Authenticated } from 'ui';

export const Login = ({ onLogin, token, isLoading, error }: LoginProps) => {
  const { formatMessage } = useLocale();
  const { isAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setToken(token);
      navigate(AppRoute.home);
    }
  }, [token]);

  return (
    <Authenticated shouldAuthenticate={isAuthenticated}>
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
              onLogin(data);
            }}
            isLoading={isLoading}
            error={error}
          />
        </Box>
      </Container>
    </Authenticated>
  );
};
