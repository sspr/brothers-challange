/* eslint-disable react/prop-types */
import { Box, InputLabel, MenuItem, FormControl, Select as MUISelect } from '@mui/material';
import { forwardRef } from 'react';

import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => (
  <Box sx={{ mb: 1 }}>
    <FormControl fullWidth>
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <MUISelect {...props} ref={ref}>
        <MenuItem disabled>{props.label}</MenuItem>
        {props.options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  </Box>
));
