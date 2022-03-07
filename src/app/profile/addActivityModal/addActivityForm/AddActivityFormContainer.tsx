import { createAddPlayerWorkoutAction } from 'api/actions/player/playerActions';
import { useMutation } from 'api/hooks';
import { AddActivityForm } from './AddActivityForm';
import { AddActivityFormContainerProps, WorkoutPayloadWithOptions } from './AddActivityForm.types';
import { convertDataBeforeSubmission } from './utils/convertDataBeforeSubmission';

export const AddActivityFormContainer = ({ name, onModalClose }: AddActivityFormContainerProps) => {
  const { mutate, data, isLoading, error } = useMutation<WorkoutPayloadWithOptions, string>(({ data, monthNumber }) =>
    createAddPlayerWorkoutAction(name, monthNumber + 1, data),
  );

  return (
    <AddActivityForm
      onSubmit={(data) => mutate({ data: convertDataBeforeSubmission(data), monthNumber: data.date.getMonth() })}
      isFromSubmittedSuccessfully={!!data}
      isSubmitting={isLoading}
      error={String(error)}
      onModalClose={onModalClose}
    />
  );
};
