import { FieldValues, UseControllerProps } from 'react-hook-form';

import { CheckboxProps } from 'ui/checkbox/Checkbox.types';

export type CheckboxFieldProps<T extends FieldValues> = CheckboxProps &
  Pick<UseControllerProps<T>, 'name' | 'control' | 'defaultValue'>;
