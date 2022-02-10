import { Grid } from '@mui/material';

import { styles } from './Dashboard.styles';
import { RankingCard } from './rankingCard/RankingCard';
import { RANKING_MOCK } from 'tests/mock/rankingMock';
import { RankingTable } from './rankingTable/RankingTable';

export const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2} sx={styles.container.margin} columns={{ xs: 6, sm: 12, md: 12 }}>
        {RANKING_MOCK.sort((a, b) => b.score - a.score).map((rank, index) => (
          <Grid key={rank.name} item xs={styles.item.width}>
            <RankingCard
              name={rank.name}
              score={rank.score}
              rank={RANKING_MOCK[0].score !== RANKING_MOCK[1].score ? index + 1 : 1}
            />
          </Grid>
        ))}
      </Grid>
      <RankingTable data={RANKING_MOCK} />
    </>
  );
};
