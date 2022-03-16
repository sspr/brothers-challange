import { useEffect } from 'react';

import { createAddPlayerWorkoutAction } from 'api/actions/player/playerActions';
import { useMutation } from 'api/hooks';
import { AddActivityForm } from './AddActivityForm';
import { AddActivityFormContainerProps, WorkoutPayloadWithOptions } from './AddActivityForm.types';
import { convertDataBeforeSubmission } from './utils/convertDataBeforeSubmission';

export const AddActivityFormContainer = ({ name, onSave }: AddActivityFormContainerProps) => {
  const { mutate, data, isLoading, error } = useMutation<WorkoutPayloadWithOptions, string>(({ data, monthNumber }) =>
    createAddPlayerWorkoutAction(name, monthNumber + 1, data),
  );

  useEffect(() => {
    if (data) {
      onSave();
    }
  }, [data]);

  return (
    <AddActivityForm
      onSubmit={(data) => mutate({ data: convertDataBeforeSubmission(data), monthNumber: data.date.getMonth() })}
      isSubmitting={isLoading}
      error={String(error)}
    />
  );
};
