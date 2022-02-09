import { LinearProgress, Typography } from '@mui/material';
import EventsIcon from '@mui/icons-material/EmojiEvents';

import { styles, Wrapper } from './RankingCard.styles';
import { RankingCardProps } from './RankingCard.types';
import { useLocale } from 'hooks';
import { Goal } from 'api/ranking/ranking.types';
import { Container } from 'ui';

export const RankingCard = ({ name, points, rank }: RankingCardProps) => {
  const { formatMessage } = useLocale();

  return (
    <Container>
      <Wrapper>
        <Typography variant="h5">{name}</Typography>
        <EventsIcon
          fontSize="large"
          sx={{ color: rank === 1 ? styles.cardHeader.color.gold : styles.cardHeader.color.silver }}
        />
      </Wrapper>
      <Typography>
        {points} {formatMessage({ id: 'rankingCard.points' })}
      </Typography>
      <LinearProgress
        sx={styles.progressBar}
        variant="determinate"
        value={points < Goal.GOAL ? Math.round((points / Goal.GOAL) * 100) : 100}
      />
      <Typography fontSize="small" align="right">
        {Math.round((points / Goal.GOAL) * 100)} % {formatMessage({ id: 'rankingCard.percentOfGoal' })}
      </Typography>
    </Container>
  );
};
