import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';

import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({ options, label }: CheckboxProps) => {
  return <FormControlLabel {...options} control={<MUICheckbox value="remember" color="primary" />} label={label} />;
};
