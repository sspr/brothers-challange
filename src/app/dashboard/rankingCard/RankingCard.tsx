import { Box, LinearProgress, Typography } from '@mui/material';
import EventsIcon from '@mui/icons-material/EmojiEvents';

import { styles } from './RankingCard.styles';
import { RankingCardProps } from './RankingCard.types';
import { useLocale } from 'hooks';
import { Card } from 'ui';

export const RankingCard = ({ name, score, rank, goal }: RankingCardProps) => {
  const { formatMessage } = useLocale();

  const progressPercent = Math.round((score / goal) * 100);

  return (
    <Card>
      <Box sx={styles.wrapper}>
        <Typography variant="h5">{name}</Typography>
        <EventsIcon fontSize="large" sx={rank === 1 ? styles.winnerHeader : styles.header} />
      </Box>
      <Typography>
        {score} {formatMessage({ id: 'rankingCard.points' })}
      </Typography>
      <LinearProgress sx={styles.progressBar} variant="determinate" value={score < goal ? progressPercent : 100} />
      <Typography fontSize="small" align="right">
        {progressPercent} % {formatMessage({ id: 'rankingCard.percentOfGoal' })}
      </Typography>
    </Card>
  );
};
