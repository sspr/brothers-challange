import { Grid, Typography } from '@mui/material';

import { styles } from './Dashboard.styles';
import { RankingCard } from './rankingCard/RankingCard';
import { RankingTable } from './rankingTable/RankingTable';
import { DashboardProps } from './Dashboard.types';
import { Card, Spinner } from 'ui';
import { useLocale } from 'hooks';

export const Dashboard = ({ isLoading, isError, data }: DashboardProps) => {
  const { formatMessage } = useLocale();

  if (isLoading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  if (isError || !data) {
    return (
      <Card>
        <Typography align="center">{formatMessage({ id: 'error' })}</Typography>
      </Card>
    );
  }

  return (
    <>
      <Grid container spacing={2} sx={styles.container} columns={{ xs: 6, sm: 12, md: 12 }}>
        {data.players
          .sort((a, b) => b.score - a.score)
          .map((rank, index) => (
            <Grid key={rank.name} item xs={styles.item.width}>
              <RankingCard
                name={rank.name}
                score={rank.score}
                rank={data.players[0].score !== data.players[1].score ? index + 1 : 1}
                goal={data.goals.score}
              />
            </Grid>
          ))}
      </Grid>
      <RankingTable stats={data.stats} />
    </>
  );
};
