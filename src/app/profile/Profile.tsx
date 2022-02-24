import { Grid, Typography } from '@mui/material';

import { PLAYER_WORKOUTS_MOCK } from 'api/mock/playerWorckoutsMock';
import { useLocale } from 'hooks';
import { Card, Spinner, PageTitle } from 'ui';
import { Details } from './details/Details';
import { Goals } from './goal/Goals';
import { ProfileProps } from './Profile.types';
import { SummaryTable } from './summaryTable/SummaryTable';
import { WorkoutsTable } from './workoutsTable/WorkoutsTable';

export const Profile = ({ isLoading, isError, data, goal }: ProfileProps) => {
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
        <Typography align="center">{formatMessage({ id: 'dashboard.error' })}</Typography>
      </Card>
    );
  }

  return (
    <>
      <PageTitle title={`${formatMessage({ id: 'profile.header' })} - ${data.name}`} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Details name={data.name} avatar={data.avatar} />
          <Goals points={goal.points} pushUps={goal.pushUps} />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <main>
            <SummaryTable data={data} />
          </main>
        </Grid>
      </Grid>
      <WorkoutsTable data={PLAYER_WORKOUTS_MOCK[0]} onArrowClick={() => {}} />
    </>
  );
};
