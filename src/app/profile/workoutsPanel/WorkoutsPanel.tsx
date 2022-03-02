import { Typography, Grid, Button, ButtonGroup } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

import { useLocale } from 'hooks';
import { Card } from 'ui';
import { styles } from './WorkoutsPanel.styles';
import { WorkoutsTableContainer } from './workoutsTable/WorkoutsTableContainer';

export const WorkoutsPanel = () => {
  const { formatDate } = useLocale();
  const currentMonthNumber = new Date().getMonth();
  const [activeMonthNumber, setActiveMonthNumber] = useState(currentMonthNumber);

  const handleMonthChange = (change: number) => {
    if ((activeMonthNumber > 0 || change > 0) && (activeMonthNumber < currentMonthNumber || change < 0)) {
      setActiveMonthNumber((prevMonth) => prevMonth + change);
    }
  };

  return (
    <Card>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            {formatDate(new Date(Number(process.env.REACT_APP_YEAR), activeMonthNumber), {
              year: 'numeric',
              month: 'long',
            })}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group">
            <Button sx={styles.button} onClick={() => handleMonthChange(-1)} disabled={activeMonthNumber === 0}>
              <ArrowBackIosNewIcon sx={styles.arrow} />
            </Button>
            <Button
              sx={styles.button}
              onClick={() => handleMonthChange(1)}
              disabled={activeMonthNumber === currentMonthNumber}
            >
              <ArrowForwardIosIcon sx={styles.arrow} />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <WorkoutsTableContainer monthNumber={activeMonthNumber} />
    </Card>
  );
};
