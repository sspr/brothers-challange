import { DatePicker as MUIDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, TextField } from '@mui/material';
import { forwardRef, useState } from 'react';

import { DatePickerProps } from './DatePicker.types';
import { useLocale } from 'hooks';
import { styles } from './DatePicker.styles';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const { datePickerLocale } = useLocale();
  const [date, setDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date | null) => {
    setDate(date ? date : new Date());
  };

  return (
    <Box sx={styles}>
      <LocalizationProvider locale={datePickerLocale.locale} dateAdapter={AdapterDateFns}>
        <MUIDatePicker
          value={date}
          onChange={handleDateChange}
          ref={ref}
          mask={datePickerLocale.mask}
          {...props}
          inputFormat={datePickerLocale.format}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </Box>
  );
});
