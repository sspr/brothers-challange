import { Chip as MUIChip } from '@mui/material';

import { useLocale } from 'hooks';
import { styles } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip = ({ label, description }: ChipProps) => {
  const { formatMessage } = useLocale();

  const backgroundColor = Object.keys(styles.chipColor).includes(label)
    ? styles.chipColor[label]
    : styles.chipColor['default'];

  return (
    <MUIChip
      label={description ? description : formatMessage({ id: `rankingTable.${label}` })}
      size="small"
      sx={{
        ...styles.chip,
        ...backgroundColor,
      }}
    />
  );
};
