import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export type ButtonProps = {
  isLoading: boolean;

  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
};
