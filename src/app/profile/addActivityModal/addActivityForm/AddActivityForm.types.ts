import { Disciplines } from 'api/types';

export type AddActivityFields = {
  discipline: Disciplines;
  date: Date;
  value: string;
  elevation?: string;
  description?: string;
};

export type AddActivityFormProps = {
  onSubmit: (data: AddActivityFields) => void;
};
