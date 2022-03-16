import { Disciplines, WorkoutPayload } from 'api/types';

export type AddActivityFields = {
  discipline: Disciplines;
  date: Date;
  value: string;
  elevation?: string;
  description?: string;
};

export type AddActivityFormProps = {
  onSubmit: (data: AddActivityFields) => void;
  isSubmitting: boolean;
  error: string | undefined;
};

export type AddActivityFormContainerProps = {
  name: string;
  onSave: VoidFunction;
};

export type WorkoutPayloadWithOptions = {
  data: WorkoutPayload;
  monthNumber: number;
};
