import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';
import React from 'react';

import { CheckboxProps } from './Checkbox.types';

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  return <FormControlLabel {...props} ref={ref} control={<MUICheckbox color="primary" />} />;
});
