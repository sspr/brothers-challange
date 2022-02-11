import { RankingResponseData } from 'api/types';

export type DashboardProps = {
  isLoading: boolean;
  isError: boolean;
  data: RankingResponseData | undefined;
};
