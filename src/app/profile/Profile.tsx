import { Grid, Typography, Button } from '@mui/material';
import { useState } from 'react';

import { useLocale } from 'hooks';
import { Card, PageTitle, Spinner } from 'ui';
import { GoalsContainer } from './goal/GoalsContainer';
import { WorkoutsTableContainer } from './workoutsTable/WorkoutsTableContainer';
import { ProfileProps } from './Profile.types';
import { Details } from './details/Details';
import { SummaryTable } from './summaryTable/SummaryTable';
import { AddActivityModal } from './addActivityModal/AddActivityModal';

export const Profile = ({ profileDetails, isLoading, isError, pageTitle }: ProfileProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
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
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setIsModalOpened(true);
            }}
          >
            {formatMessage({ id: 'profile.addActivity' })}
          </Button>
          <AddActivityModal
            isOpened={isModalOpened}
            onModalClose={() => {
              setIsModalOpened(false);
            }}
          />
        </Grid>
      </Grid>
      <WorkoutsTableContainer />
    </>
  );
};
