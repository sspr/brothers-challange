import { Box, LinearProgress, Typography } from '@mui/material';
import EventsIcon from '@mui/icons-material/EmojiEvents';

import { styles } from './RankingCard.styles';
import { RankingCardProps } from './RankingCard.types';
import { useLocale } from 'hooks';
import { Card } from 'ui';

const GOAL = 2222;

export const RankingCard = ({ name, score, rank }: RankingCardProps) => {
  const { formatMessage } = useLocale();

  const progressPercent = Math.round((score / GOAL) * 100);

  return (
    <Card>
      <Box sx={styles.wrapper}>
        <Typography variant="h5">{name}</Typography>
        <EventsIcon fontSize="large" sx={rank === 1 ? styles.winnerHeader : styles.header} />
      </Box>
      <Typography>
        {score} {formatMessage({ id: 'rankingCard.points' })}
      </Typography>
      <LinearProgress sx={styles.progressBar} variant="determinate" value={score < GOAL ? progressPercent : 100} />
      <Typography fontSize="small" align="right">
        {progressPercent} % {formatMessage({ id: 'rankingCard.percentOfGoal' })}
      </Typography>
    </Card>
  );
};
