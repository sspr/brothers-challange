import { ControllerRenderProps } from 'react-hook-form';

export type InputProps = {
  label: string;
  autocomplete?: string;
  type?: string;
  id: string;
  options: ControllerRenderProps & { autoFocus?: boolean };
};
