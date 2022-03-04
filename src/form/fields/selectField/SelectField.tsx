import { Controller, FieldValues } from 'react-hook-form';

import { Select } from 'ui';
import { SelectFieldProps } from './SelectField.types';

export function SelectField<T extends FieldValues>({
  name,
  control,
  options,
  defaultValue,
  ...props
}: SelectFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => <Select options={options} {...props} {...field} error={!!fieldState.error} />}
    />
  );
}
