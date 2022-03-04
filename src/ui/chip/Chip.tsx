import { Chip as MUIChip } from '@mui/material';

import { styles } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip = ({ label, backgroundColor }: ChipProps) => (
  <MUIChip
    label={label}
    size="small"
    sx={{
      ...styles.chip,
      ...backgroundColor,
    }}
  />
);
