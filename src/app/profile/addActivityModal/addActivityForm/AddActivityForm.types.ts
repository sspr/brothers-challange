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
  isFromSubmittedSuccessfully: boolean;
  isSubmitting: boolean;
  error: string | undefined;
  onSave: VoidFunction;
};

export type AddActivityFormContainerProps = {
  name: string;
  onSave: VoidFunction;
};

export type WorkoutPayloadWithOptions = {
  data: WorkoutPayload;
  monthNumber: number;
};
