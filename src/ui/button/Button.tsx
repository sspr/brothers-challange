import { Button as MUIButton, CircularProgress } from '@mui/material';

import { ButtonProps } from './Button.types';

export const Button = ({ sx, isLoading, children }: ButtonProps) => {
  return (
    <MUIButton type="submit" fullWidth variant="contained" sx={sx}>
      {isLoading ? <CircularProgress size={25} color="inherit" /> : children}
    </MUIButton>
  );
};
