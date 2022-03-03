import { Chip as MUIChip } from '@mui/material';

import { Disciplines } from 'api/types';
import { useLocale } from 'hooks';
import { styles } from './DisciplineChip.styles';
import { DisciplineChipProps } from './DisciplineChip.types';

export const DisciplineChip = ({ label }: DisciplineChipProps) => {
  const { formatMessage } = useLocale();

  const backgroundColor = Object.keys(styles.chipColor).includes(label)
    ? styles.chipColor[label as Disciplines]
    : styles.chipColor['default'];

  return (
    <MUIChip
      label={Object.keys(styles.chipColor).includes(label) ? formatMessage({ id: `rankingTable.${label}` }) : label}
      size="small"
      sx={{
        ...styles.chip,
        ...backgroundColor,
      }}
    />
  );
};
