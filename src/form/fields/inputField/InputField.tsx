import { Controller, FieldValues } from 'react-hook-form';

import { useLocale } from 'hooks';
import { Input } from 'ui';
import { InputFieldProps } from './InputField.types';

export function InputField<T extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...props
}: InputFieldProps<T>) {
  const { formatMessage } = useLocale();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={Object.fromEntries(rules.map((rule) => [Object.keys(rule)[0], Object.values(rule)[0]]))}
      render={({ field, fieldState }) => (
        <Input
          {...props}
          {...field}
          helperText={fieldState.error?.message ? formatMessage({ id: fieldState.error?.message }) : null}
          error={!!fieldState.error}
        />
      )}
    />
  );
}
