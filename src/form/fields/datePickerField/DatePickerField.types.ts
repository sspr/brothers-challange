import { FieldValues, UseControllerProps } from 'react-hook-form';

import { DatePickerProps } from 'ui/datePicker/DatePicker.types';

export type DatePickerFieldProps<T extends FieldValues> = DatePickerProps &
  Pick<UseControllerProps<T>, 'name' | 'control' | 'defaultValue'>;
