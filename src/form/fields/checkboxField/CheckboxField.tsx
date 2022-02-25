import { Controller, FieldValues } from 'react-hook-form';

import { Checkbox } from 'ui';
import { CheckboxFieldProps } from './CheckboxField.types';

export function CheckboxField<T extends FieldValues>({ name, control, defaultValue, ...props }: CheckboxFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => <Checkbox {...props} {...field} />}
    />
  );
}
