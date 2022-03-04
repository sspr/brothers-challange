import { WorkoutPayload } from 'api/types';
import { AddActivityFields } from '../AddActivityForm.types';

export const convertDataBeforeSubmission = (data: AddActivityFields): WorkoutPayload => ({
  day: data.date.getDate(),
  type: data.discipline,
  value: Number(data.value),
  description: data?.description ? data?.description : undefined,
  elevation: data?.elevation ? Number(data?.elevation) : undefined,
});
