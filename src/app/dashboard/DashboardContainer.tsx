import { useQuery } from 'api/hooks';
import { createGetRanking } from 'api/actions/ranking/rankingActions';
import { Dashboard } from './Dashboard';
import { RankingResponse } from 'api/types';

export const DashboardContainer = () => {
  const { isLoading, isError, data } = useQuery<RankingResponse>(createGetRanking());

  return <Dashboard isLoading={isLoading} isError={isError} data={data} />;
};
