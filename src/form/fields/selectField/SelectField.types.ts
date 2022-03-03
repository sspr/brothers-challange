import { FieldValues, UseControllerProps } from 'react-hook-form';

import { SelectProps } from 'ui/select/Select.types';

type RulesProp = { rules: Record<string, unknown>[] };

export type SelectFieldProps<T extends FieldValues> = SelectProps &
  Pick<UseControllerProps<T>, 'name' | 'control' | 'defaultValue'> &
  RulesProp;
