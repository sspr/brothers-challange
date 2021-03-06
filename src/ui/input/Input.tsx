import React from 'react';
import { TextField } from '@mui/material';

import { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => (
  <TextField {...props} ref={ref} variant="outlined" margin="normal" />
));
