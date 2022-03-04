import { createAddPlayerWorkoutAction } from 'api/actions/player/playerActions';
import { useMutation } from 'api/hooks';
import { WorkoutPayload } from 'api/types';
import { AddActivityForm } from './AddActivityForm';
import { AddActivityFormContainerProps } from './AddActivityForm.types';
import { convertDataBeforeSubmission } from './utils/convertDataBeforeSubmission';

export const AddActivityFormContainer = ({ currentMonth, setCurrentMonth, name }: AddActivityFormContainerProps) => {
  const { mutate, data, isLoading, error } = useMutation<WorkoutPayload, string>((data) =>
    createAddPlayerWorkoutAction(name, currentMonth + 1, data),
  );

  return (
    <AddActivityForm
      onSubmit={(data) => mutate(convertDataBeforeSubmission(data))}
      setCurrentMonth={setCurrentMonth}
      currentMonth={currentMonth}
      isFromSubmittedSuccessfully={!!data}
      isLoading={isLoading}
      error={String(error)}
    />
  );
};
