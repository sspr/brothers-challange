import { Grid, Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { Card, Spinner, Title } from 'ui';
import { Details } from './details/Details';
import { Goal } from './goal/Goal';
import { ProfileProps } from './Profile.types';

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
      <Title title={`${formatMessage({ id: 'profile.header' })} - ${data.name}`} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Details name={data.name} avatar={data.avatar} />
          <Goal points={goal.points} pushUps={goal.pushUps} />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <main>
            <Card>
              <Typography>Main</Typography>
            </Card>
          </main>
        </Grid>
      </Grid>
    </>
  );
};
