import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import { useLocale } from 'hooks';
import { Card, Spinner } from 'ui';
import { GoalsProps } from './Goals.types';
import { styles } from './Goals.styles';

export const Goals = ({ goals, isLoading, isError }: GoalsProps) => {
  const { formatMessage, formatNumber } = useLocale();

  if (isLoading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  if (isError || !goals) {
    return (
      <Card>
        <Typography align="center">{formatMessage({ id: 'error' })}</Typography>
      </Card>
    );
  }

  return (
    <Card>
      <Typography variant="h6" sx={styles.title}>
        {formatMessage({ id: 'profile.goals' })}
      </Typography>
      <Typography sx={styles.goal} variant="body2">
        <StarIcon sx={styles.icon} />
        {`${formatMessage({ id: 'profile.goals.points' })}: ${formatNumber(goals.score)}`}
      </Typography>
      <Typography variant="body2">
        <FitnessCenterIcon sx={styles.icon} />
        {`${formatMessage({ id: 'profile.goals.pushUps' })}: ${formatNumber(goals.pushUps)}`}
      </Typography>
    </Card>
  );
};
