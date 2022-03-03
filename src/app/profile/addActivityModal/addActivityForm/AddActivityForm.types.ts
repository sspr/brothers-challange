import { Disciplines } from 'api/types';

export type AddActivityFields = {
  discipline: Disciplines;
  date: Date;
  value: number;
  elevation?: number;
  description?: string;
};

export type AddActivityFormProps = {
  onSubmit: (data: AddActivityFields) => void;
};
