import { Grid } from '@mui/material';

import { styles } from './MainPage.styles';
import { RankingCard } from './rankingCard/RankingCard';
import { RANKIG_MOCK } from 'tests/mock/rankingMock';
import { RankigTable } from './rankingTable/RankingTable';

export const MainPage = () => (
  <>
    <Grid container spacing={styles.container.spacing} columns={styles.container.columns}>
      {RANKIG_MOCK.sort((a, b) => b.points - a.points).map((rank, index) => (
        <Grid key={rank.name} item xs={styles.item.width}>
          <RankingCard
            name={rank.name}
            points={rank.points}
            rank={RANKIG_MOCK[0].points !== RANKIG_MOCK[1].points ? index + 1 : 1}
          />
        </Grid>
      ))}
    </Grid>
    <RankigTable data={RANKIG_MOCK} />
  </>
);
