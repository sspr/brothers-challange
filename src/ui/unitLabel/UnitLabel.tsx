import { Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { styles } from './UnitLabel.styles';
import { UnitLabelProps } from './UnitLabel.types';

export const UnitLabel = ({ discipline }: UnitLabelProps) => {
  const { formatMessage } = useLocale();

  if (discipline === 'elevation') {
    return (
      <Typography variant="caption" sx={styles.units}>
        m
      </Typography>
    );
  }

  if (discipline === 'other') {
    return (
      <Typography variant="caption" sx={styles.units}>
        {formatMessage({ id: 'rankingTable.pts' })}
      </Typography>
    );
  }

  if (discipline === 'pushUps') {
    return null;
  }

  return (
    <Typography variant="caption" sx={styles.units}>
      km
    </Typography>
  );
};
