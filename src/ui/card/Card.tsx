import { CardContent, Paper } from '@mui/material';

import { CardProps } from './Card.types';

export const Card = ({ children }: CardProps) => {
  return (
    <Paper elevation={3}>
      <CardContent>{children}</CardContent>
    </Paper>
  );
};
