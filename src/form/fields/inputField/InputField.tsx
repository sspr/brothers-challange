import { Controller, FieldValues } from 'react-hook-form';

import { Input } from 'ui';
import { InputFieldProps } from './InputField.types';

export function InputField<T extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...props
}: InputFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => <Input {...props} {...field} error={!!fieldState.error} />}
    />
  );
}
