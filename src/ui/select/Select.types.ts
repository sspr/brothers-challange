import { SelectProps as MUISelectProps } from '@mui/material';

export type SelectItems = {
  options: { label: string; value: string }[];
};

export type SelectProps = MUISelectProps & SelectItems;
