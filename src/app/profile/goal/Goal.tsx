import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import { useLocale } from 'hooks';
import { Card } from 'ui';
import { GoalProps } from './Goal.types';
import { styles } from './Goal.styles';

export const Goal = ({ points, pushUps }: GoalProps) => {
  const { formatMessage, formatNumber } = useLocale();

  return (
    <Card>
      <Typography sx={styles.title}>{formatMessage({ id: 'profile.goals' })}</Typography>
      <Typography variant="body2">
        <StarIcon sx={styles.icon} />
        {`${formatMessage({ id: 'profile.goals.points' })}: ${formatNumber(points)}`}
      </Typography>
      <Typography variant="body2">
        <FitnessCenterIcon sx={styles.icon} />
        {`${formatMessage({ id: 'profile.goals.pushUps' })}: ${formatNumber(pushUps)}`}
      </Typography>
    </Card>
  );
};
