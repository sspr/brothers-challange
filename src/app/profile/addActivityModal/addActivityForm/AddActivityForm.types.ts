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
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
  isFromSubmittedSuccessfully: boolean;
  isLoading: boolean;
  error: string | undefined;
};

export type AddActivityFormContainerProps = {
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
  name: string;
};
