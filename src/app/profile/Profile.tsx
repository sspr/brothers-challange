import { Grid, Typography, Button } from '@mui/material';
import { useState } from 'react';

import { useAuth, useLocale } from 'hooks';
import { Card, PageTitle, Spinner } from 'ui';
import { GoalsContainer } from './goal/GoalsContainer';
import { ProfileProps } from './Profile.types';
import { Details } from './details/Details';
import { SummaryTable } from './summaryTable/SummaryTable';
import { AddActivityModal } from './addActivityModal/AddActivityModal';
import { styles } from './Profile.styles';
import { WorkoutsPanel } from './workoutsPanel/WorkoutsPanel';

export const Profile = ({ profileDetails, isLoading, isError, pageTitle }: ProfileProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { formatMessage } = useLocale();
  const { isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  if (isError || !profileDetails || !pageTitle) {
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
          <SummaryTable data={profileDetails} />
          {isAuthenticated && (
            <Button
              sx={styles.button}
              fullWidth
              variant="contained"
              onClick={() => {
                setIsModalOpened(true);
              }}
            >
              {formatMessage({ id: 'profile.addActivity' })}
            </Button>
          )}
        </Grid>
      </Grid>
      <WorkoutsPanel name={pageTitle} />
      <AddActivityModal
         isOpened={isModalOpened}
         onModalClose={() => {
           setIsModalOpened(false);
         }}
      />
    </>
  );
};
