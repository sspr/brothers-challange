import { PlayerResponse } from 'api/types';

export type ProfileProps = {
  profileDetails: PlayerResponse | undefined;
  isLoading: boolean;
  error: unknown;
  pageTitle: string | undefined;
};
