import { TextField } from '@mui/material';

import { InputProps } from './Input.types';

export const Input = ({ label, autocomplete, type, id, options }: InputProps) => {
  return (
    <TextField
      {...options}
      margin="normal"
      fullWidth
      id={id}
      label={label}
      type={type ? type : 'text'}
      autoComplete={autocomplete ? autocomplete : id}
    />
  );
};
