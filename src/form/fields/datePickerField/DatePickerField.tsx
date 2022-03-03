import { Controller, FieldValues } from 'react-hook-form';

import { DatePicker } from 'ui';
import { DatePickerFieldProps } from './DatePickerField.types';

export function DatePickerField<T extends FieldValues>({
  name,
  control,
  defaultValue,
  ...props
}: DatePickerFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => <DatePicker {...props} {...field} />}
    />
  );
}
