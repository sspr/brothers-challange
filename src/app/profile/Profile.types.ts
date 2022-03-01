import { PlayerResponse } from 'api/types';

export type ProfileProps = {
  profileDetails: PlayerResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  pageTitle: string | undefined;
};
