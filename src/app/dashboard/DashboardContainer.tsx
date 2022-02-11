import { useQuery } from 'react-query';

import { getRanking } from 'api/actions/ranking/ranking';
import { RankingResponseData } from 'api/types';
import { Dashboard } from './Dashboard';

export const DashboardContainer = () => {
  const { isLoading, isError, data } = useQuery<RankingResponseData>('ranking', getRanking);

  return <Dashboard isLoading={isLoading} isError={isError} data={data} />;
};
