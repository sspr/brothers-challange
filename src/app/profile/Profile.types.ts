import { PlayerResponse } from 'api/types';

export type ProfileProps = {
  profileDetails: PlayerResponse | undefined;
  isLoading: boolean;
  error: Error | null;
  pageTitle: string | undefined;
};
