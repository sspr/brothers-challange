import { CardContent, Paper } from '@mui/material';

import { styles } from './Card.styles';
import { CardProps } from './Card.types';

export const Card = ({ children }: CardProps) => {
  return (
    <Paper elevation={styles.elevation}>
      <CardContent>{children}</CardContent>
    </Paper>
  );
};
