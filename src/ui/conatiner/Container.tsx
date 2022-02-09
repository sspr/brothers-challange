import { CardContent, Paper } from '@mui/material';

import { styles } from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container = ({ children }: ContainerProps) => {
  return (
    <Paper elevation={styles.elevation} sx={styles.marginTop}>
      <CardContent>{children}</CardContent>
    </Paper>
  );
};
