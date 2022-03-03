import { Typography } from '@mui/material';

import { Discipline } from 'api/types';
import { useLocale } from 'hooks';
import { styles } from './UnitLabel.styles';
import { UnitLabelProps } from './UnitLabel.types';

export const UnitLabel = ({ discipline }: UnitLabelProps) => {
  const { formatMessage } = useLocale();

  if (discipline === Discipline.ELEVATION || discipline === Discipline.SWIMMING) {
    return (
      <Typography variant="caption" sx={styles.units}>
        m
      </Typography>
    );
  }

  if (discipline === Discipline.OTHER) {
    return (
      <Typography variant="caption" sx={styles.units}>
        {formatMessage({ id: 'rankingTable.pts' })}
      </Typography>
    );
  }

  if (discipline === Discipline.PUSHUPS) {
    return null;
  }

  return (
    <Typography variant="caption" sx={styles.units}>
      km
    </Typography>
  );
};
