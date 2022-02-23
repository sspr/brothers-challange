import { Chip as MUIChip } from '@mui/material';

import { Disciplines } from 'api/types';
import { useLocale } from 'hooks';
import { styles } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip = ({ label }: ChipProps) => {
  const { formatMessage } = useLocale();

  const backgroundColor = Object.keys(styles.chipColor).includes(label)
    ? styles.chipColor[label as Disciplines]
    : styles.chipColor['default'];

  return (
    <MUIChip
      label={formatMessage({ id: `rankingTable.${label}` })}
      size="small"
      sx={{
        ...styles.chip,
        ...backgroundColor,
      }}
    />
  );
};
