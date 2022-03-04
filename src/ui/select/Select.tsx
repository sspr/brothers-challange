import { Box, InputLabel, MenuItem, FormControl, Select as MUISelect } from '@mui/material';
import { forwardRef } from 'react';

import { styles } from './Select.styles';
import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => (
  <Box sx={styles.boxWrapper}>
    <FormControl fullWidth>
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <MUISelect {...props} ref={ref}>
        {props.options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  </Box>
));
