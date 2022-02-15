import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { styles } from './Login.styles';
import { useLocale } from 'hooks';
import { LoginForm } from './loginForm/LoginForm';

export const Login = () => {
  const { formatMessage } = useLocale();

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
        <LoginForm />
      </Box>
    </Container>
  );
};
