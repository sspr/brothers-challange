import { Typography, Grid, Button, ButtonGroup } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

import { Card } from 'ui';
import { WorkoutsPanelProps } from './WorkoutsPanel.types';
import { WorkoutsTableContainer } from './workoutsTable/WorkoutsTableContainer';
import { useLocale } from 'hooks';
import { styles } from './WorkoutsPanel.styles';

export const WorkoutsPanel = ({ name }: WorkoutsPanelProps) => {
  const { formatDate } = useLocale();
  const currentMonthNumber = new Date().getMonth();
  const [activeMonthNumber, setActiveMonthNumber] = useState(currentMonthNumber);
  const activeDate = new Date(Number(process.env.REACT_APP_YEAR), activeMonthNumber);

  const handleArrowClick = (change: number) => {
    if (!(activeMonthNumber === 0 && change < 0) && !(activeMonthNumber === currentMonthNumber && change > 0)) {
      setActiveMonthNumber(activeMonthNumber + change);
    }
  };

  return (
    <Card>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            {formatDate(activeDate, {
              year: 'numeric',
              month: 'long',
            })}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group">
            <Button sx={styles.button} onClick={() => handleArrowClick(-1)} disabled={activeDate.getMonth() === 0}>
              <ArrowBackIosNewIcon sx={styles.arrow} />
            </Button>
            <Button
              sx={styles.button}
              onClick={() => handleArrowClick(1)}
              disabled={currentMonthNumber === activeMonthNumber}
            >
              <ArrowForwardIosIcon sx={styles.arrow} />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <WorkoutsTableContainer monthNumber={activeMonthNumber} name={name} />
    </Card>
  );
};
