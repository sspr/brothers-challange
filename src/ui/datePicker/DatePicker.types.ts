import { DatePickerProps as MUIDatePickerProps } from '@mui/lab';

export type DatePickerProps = Omit<MUIDatePickerProps<Date>, 'renderInput' | 'onChange' | 'value'>;
