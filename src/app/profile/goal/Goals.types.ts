import { Goals } from 'api/types';

export type GoalsProps = {
  goals: Goals | undefined;
  isLoading: boolean;
  isError: boolean;
};
