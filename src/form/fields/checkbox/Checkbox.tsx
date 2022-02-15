import { Controller } from 'react-hook-form';

import { Checkbox as UICheckbox } from 'ui';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({ control, label }: CheckboxProps) => {
  return (
    <Controller
      name="checkbox"
      control={control}
      defaultValue={false}
      render={({ field }) => <UICheckbox options={{ ...field }} label={label} />}
    />
  );
};
