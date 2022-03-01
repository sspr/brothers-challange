import { Grid, Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { Card, PageTitle, Spinner } from 'ui';
import { GoalsContainer } from './goal/GoalsContainer';
import { WorkoutsTableContainer } from './workoutsTable/WorkoutsTableContainer';
import { ProfileProps } from './Profile.types';
import { Details } from './details/Details';
import { SummaryTable } from './summaryTable/SummaryTable';

export const Profile = ({ profileDetails, isLoading, isError, pageTitle }: ProfileProps) => {
  const { formatMessage } = useLocale();

  if (isLoading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  if (isError || !profileDetails) {
    return (
      <Card>
        <Typography align="center">{formatMessage({ id: 'error' })}</Typography>
      </Card>
    );
  }

  return (
    <>
      <PageTitle title={`${formatMessage({ id: 'profile.header' })} - ${pageTitle}`} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Details avatar={profileDetails.avatar} name={pageTitle} />
          <GoalsContainer />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <main>
            <SummaryTable data={profileDetails} />
          </main>
        </Grid>
      </Grid>
      <WorkoutsTableContainer />
    </>
  );
};
