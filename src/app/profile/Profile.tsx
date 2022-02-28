import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { PageTitle } from 'ui';
import { DetailsContainer } from './details/DetailsContainer';
import { GoalsContainer } from './goal/GoalsContainer';
import { SummaryTableContainer } from './summaryTable/SummaryTableContainer';
import { WorkoutsTableContainer } from './workoutsTable/WorkoutsTableContainer';

export const Profile = () => {
  const { formatMessage } = useLocale();
  const { name } = useParams();

  return (
    <>
      <PageTitle title={`${formatMessage({ id: 'profile.header' })} - ${name}`} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <DetailsContainer />
          <GoalsContainer />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <main>
            <SummaryTableContainer />
          </main>
        </Grid>
      </Grid>
      <WorkoutsTableContainer />
    </>
  );
};
