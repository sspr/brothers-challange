import { useQuery } from 'react-query';

import { getRanking } from 'api/actions/ranking/ranking';
import { Dashboard } from './Dashboard';
import { Data } from './Dashboard.types';

export const DashboardContainer = () => {
  const { isLoading, isError, data } = useQuery<Data>('ranking', getRanking);

  return <Dashboard isLoading={isLoading} isError={isError} data={data} />;
};
